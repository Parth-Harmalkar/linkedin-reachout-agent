import React, { useState } from "react";
import Header from "./components/Header";
import PromptForm from "./components/PromptForm";
import ResultsTable from "./components/ResultsTable";
import ErrorMessage from "./components/ErrorMessage";

export default function App() {
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFormSubmit = async (prompt) => {
    setIsLoading(true);
    setError("");
    setResults(null);

    const webhookUrl = "http://localhost:5678/webhook-test/prompt-search";

    if (webhookUrl === "YOUR_N8N_TEST_WEBHOOK_URL_HERE") {
      setError("Please paste your n8n webhook URL into the App.js file.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(
          `Network response was not ok. Status: ${response.status}`,
        );
      }

      const data = await response.json();
      if (data && data.length > 0) {
        setResults(data);
      } else {
        throw new Error(
          "The workflow returned no data. Please check your prompt or n8n workflow.",
        );
      }
    } catch (err) {
      console.error("Workflow fetch error:", err);
      setError(err.message || "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // Changed bg-gray-100 to transparent to let the body's gradient show through.
    <div className="min-h-screen text-gray-800">
      <div className="container mx-auto p-4 sm:p-6 md:p-8 max-w-5xl">
        <Header />
        <PromptForm onSubmit={handleFormSubmit} isLoading={isLoading} />
        {error && <ErrorMessage message={error} />}
        {results && <ResultsTable data={results} />}
      </div>
    </div>
  );
}
