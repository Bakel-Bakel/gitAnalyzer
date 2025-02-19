import RepoInput from "./components/RepoInput";

function App() {
  const handleAnalyze = (repoUrl) => {
    console.log("Analyzing:", repoUrl); // Placeholder for API call
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <RepoInput onAnalyze={handleAnalyze} />
    </div>
  );
}

export default App;
