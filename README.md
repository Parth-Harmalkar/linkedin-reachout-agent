# AI-Powered Lead Generation & Outreach Automation

A full-stack application that automates the process of finding and personalizing outreach to potential leads. This tool uses a React frontend, an n8n automation backend, and Google's Gemini AI to transform a simple text prompt into an enriched list of contacts with unique, AI-generated icebreaker messages.

---

## 🚀 The Problem

Sales and business development teams spend countless hours on tedious, manual tasks:
1.  **Searching** for potential clients on platforms like Apollo.io or LinkedIn.
2.  **Filtering** through long lists to find the right contacts.
3.  **Researching** each individual to find a hook for a personalized message.
4.  **Writing** dozens of "personalized" emails that often still sound generic.

This process is inefficient, doesn't scale well, and can lead to low engagement rates.

## ✨ The Solution

This application automates the entire workflow. A user simply provides a natural language description of their target audience, and the system handles the rest, returning a ready-to-use CSV file with names, contact details, and a unique, AI-written conversation starter for every single person.

---

## 📋 Features

-   **Simple Web Interface:** A clean UI built with React and Tailwind CSS for a great user experience.
-   **Natural Language Input:** Users can describe their ideal customer in plain English (e.g., "Generative AI startups in India with 20-50 employees").
-   **Dual-AI Process:**
    -   **AI Prompt Engineer:** The first AI model interprets the user's request and converts it into a precise search query for a lead database.
    -   **AI Copywriter:** The second AI model analyzes each lead's profile and writes a personalized icebreaker message.
-   **Dynamic Results Table:** Displays the generated leads in a clean, easy-to-read format.
-   **CSV Export:** Allows users to download the final, enriched list with a single click.

---

## 🛠️ Tech Stack & Architecture

This project utilizes a modern, decoupled architecture to separate concerns and ensure scalability.

-   **Frontend:**
    -   **React:** For building the interactive user interface.
    -   **Tailwind CSS:** For modern and responsive styling.

-   **Backend & Automation:**
    -   **n8n.io:** A powerful, visual workflow automation tool that acts as the application's backend, orchestrating the entire process.

-   **AI & Services:**
    -   **Google Gemini:** Used for both natural language understanding (prompt engineering) and creative text generation (copywriting).
    -   **Apollo.io (simulated):** The workflow is designed to fetch contact data from a lead generation platform like Apollo.

### Architectural Flow

1.  The **React App** captures the user's prompt and sends it to a secure **n8n Webhook**.
2.  The **n8n Workflow** is triggered.
3.  **Gemini AI (Model 1)** converts the prompt into a structured database query URL.
4.  The workflow fetches the lead data.
5.  The workflow **loops through each lead** and sends their profile to **Gemini AI (Model 2)** to generate a personalized icebreaker.
6.  The original lead data and the new AI message are merged.
7.  The final, enriched data is sent back to the React app as a JSON response.
8.  The **React App** displays the data in the results table.

---

## ⚙️ Setup and Installation

To run this project locally, you will need to set up the frontend and the backend separately.

### Frontend (React App)

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up the n8n Webhook URL:**
    -   Open `src/App.js`.
    -   Find the `webhookUrl` variable and replace the placeholder with your n8n Test Webhook URL.
4.  **Start the development server:**
    ```bash
    npm start
    ```
    The application will be available at `http://localhost:3000`.

### Backend (n8n Workflow)

1.  **Set up n8n:**
    -   You can run n8n locally using Docker or sign up for a cloud account.
2.  **Import the Workflow:**
    -   Copy the JSON from the `workflow.json` file in this repository.
    -   In your n8n canvas, select `Import from Clipboard`.
3.  **Configure Credentials:**
    -   Open the `Message a model` nodes and add your Google Gemini API credentials.
4.  **Activate the Workflow:**
    -   Save and activate the workflow. Use the **Test URL** from the Webhook node for development.

---

## 🔮 Future Improvements

-   [ ] **Direct API Integration:** Connect directly to the LinkedIn or Apollo API instead of simulating the data fetch.
-   [ ] **Automated Sending:** Add nodes to automatically send the personalized messages via email or LinkedIn.
-   [ ] **User Authentication:** Add a login system to save user history and manage API keys.
-   [ ] **Analytics Dashboard:** Build a simple dashboard to track the success rate of different icebreaker styles.
