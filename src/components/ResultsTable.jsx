import React from "react";

const ResultsCards = ({ data }) => {
  if (!data || data.length === 0) return null;

  const headers = Object.keys(data[0]);

  const downloadCSV = () => {
    const csvRows = [headers.join(",")];
    data.forEach((item) => {
      const values = headers.map((header) => {
        const escaped = ("" + item[header]).replace(/"/g, '""');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(","));
    });

    const blob = new Blob([csvRows.join("\n")], {
      type: "text/csv;charset=utf-8;",
    });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "leads.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4 sm:p-6 bg-transparent">
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-3xl font-bold text-gray-800">
          Your Generated Leads
        </h2>
        <button
          onClick={downloadCSV}
          className="bg-green-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-green-700 w-full sm:w-auto transition-all transform hover:scale-105"
        >
          Download as CSV
        </button>
      </div>

      <div className="space-y-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {Object.keys(item).map((key) => (
                  <div key={key}>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      {key.replace(/_/g, " ")}
                    </p>
                    <p className="text-base text-gray-900 break-words mt-1">
                      {item[key]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsCards;
