import "./index.css";
import forward from "./Forward"; // Import the forward function from Forward
import SummaryComponent from "./Summary"; // Import the SummaryComponent
import { useState } from "react";

function App() {
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState(""); // State to store the summary
  const [loading, setLoading] = useState(false); // Add loading state

  const handleRedirect = () => {
    window.location.href = "https://github.com/Ajayrawati";
  };

  const after = async () => {
    if (link.trim() === "") {
      setError("Please enter a valid YouTube URL!");
    } else {
      setError("");
      setLoading(true); // Show loading
      try {
        const summary = await forward(link); // Fetch the summary using forward
        setData(summary); // Set the summary in state
      } catch (err) {
        setError("There was an error fetching the summary.");
      }
      setLoading(false); // Hide loading
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center  bg-gradient-to-br from-white via-purple-100 to-green-100 relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-transparent pointer-events-none">
          <div className="absolute w-full h-full bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="absolute top-0 w-full flex justify-between p-5">
          <div className="rounded-2xl bg-gray-900 text-gray-100 px-5 py-3 font-bold text-2xl">
            Summarizer
          </div>
          <button
            onClick={handleRedirect}
            className="rounded-2xl bg-gray-900 text-gray-100 px-5 py-3 font-bold text-md transition duration-200 hover:bg-black hover:text-white"
          >
            Github
          </button>
        </div>

        <div className="w-full flex flex-col items-center justify-center h-[80vh]">
          <div className="font-extrabold text-3xl mb-3">
            Summarize Your Video Content
          </div>
          <div className="text-xl text-center mb-6 px-4">
            AI-powered YouTube video summarizer for quick, concise, and accurate
            insights in seconds!
          </div>

          {/* Input Field and Button */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              onChange={(e) => setLink(e.target.value)}
              value={link}
              type="text"
              placeholder="Enter YouTube Video URL"
              className="px-4 py-3 rounded-2xl border border-gray-300 w-80 text-lg bg-white focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              onClick={after}
              className="bg-gray-900 text-white px-5 py-3 rounded-2xl font-bold text-lg transition duration-200 hover:bg-gray-800"
            >
              Summarize
            </button>
          </div>
          {error && <div className="text-red-500 mt-2">{error}</div>}

          {/* Loading Spinner */}
          {loading && <div>Loading...</div>}
        </div>
        {/* Pass the fetched summary data to the SummaryComponent */}
        <div className="content-container">
          {data && <SummaryComponent data={data} />}
        </div>
      </div>
    </>
  );
}

export default App;
