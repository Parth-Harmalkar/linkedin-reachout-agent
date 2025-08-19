import React, { useState } from "react";
import Spinner from "./Spinner";

const PromptForm = ({ onSubmit, isLoading }) => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!prompt.trim()) {
      alert("Please describe your target audience.");
      return;
    }
    onSubmit(prompt);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-10">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="prompt-input"
          className="block text-base font-semibold text-gray-800 mb-2"
        >
          Describe Your Target Audience
        </label>
        <input
          type="text"
          id="prompt-input"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-shadow"
          placeholder="e.g., Early-stage SaaS startups in Southeast Asia focused on developer tools"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="mt-5 w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 flex items-center justify-center disabled:bg-indigo-400 transition-all transform hover:scale-105"
        >
          {isLoading ? <Spinner /> : "Generate Leads"}
        </button>
      </form>
    </div>
  );
};

export default PromptForm;
