import { useState } from "react";

const RepoInput = ({ onAnalyze }) => {
  const [repoUrl, setRepoUrl] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (repoUrl.trim() === "") return; // Prevent empty submissions
    setIsClicked(true); // Change button color on click
    onAnalyze(repoUrl);

    // Reset button color after a delay (optional)
    setTimeout(() => setIsClicked(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Card-like container */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          GitHub Repo Analyzer
        </h2>
        
        {/* Input and Button Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {/* Rounded Input */}
          <input
            type="text"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            placeholder="Enter GitHub repo URL"
            className="border border-gray-300 rounded-full px-5 py-3 w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Button */}
          <button
            type="submit"
            className={`px-5 py-3 rounded-full text-lg text-white transition-all duration-300 ${
              isClicked ? "bg-blue-500" : "bg-gray-500 hover:bg-gray-700"
            }`}
          >
            Analyze
          </button>
        </form>
      </div>
    </div>
  );
};

export default RepoInput;
