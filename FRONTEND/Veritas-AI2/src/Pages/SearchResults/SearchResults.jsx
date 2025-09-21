import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SearchResults.module.css"; // Import custom CSS

const getGaugeLabel = (score) => {
  if (score >= 70) return "Possibly True News";
  if (score >= 40) return "Mixed Signals";
  return "Possibly False News";
};

const NewsVerifier = () => {
  const { query } = useParams();
  const [newsText, setNewsText] = useState(query || "");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchResult = async (text) => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await axios.post("http://localhost:8000/api/verify", {
        text,
      });
      setResult(response.data);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query && query.trim() !== "") {
      fetchResult(query);
    }
  }, [query]);

  const correctnessScore = result ? result.correctness_percentage : 0;
  const needleRotation = (correctnessScore / 100) * 180 - 90;

  return (
    <div className="news-page-container">
      <h1 className="page-title">News Verifier</h1>

      {error && <div className="error-text">{error}</div>}

      {result && (
        <div className="results-dashboard">
          {/* Left Section: News + Verdict + Sources */}
          <div className="left-panel">
            <div className="card">
              <h2>News</h2>
              <p>{result.news_prompt}</p>
            </div>

            <div className="card verdict-card">
              <h2>Verdict</h2>
              <p className={`verdict-text verdict-${result.verdict.replace(" ", "-").toLowerCase()}`}>
                {result.verdict}
              </p>
            </div>

            <div className="card sources-card">
              <h2>Sources & Scores</h2>
              {result.sources.map((src, idx) => (
                <div key={idx} className="source-bar">
                  <span className="source-name">{src.source}</span>
                  <div className="bar-container">
                    <div
                      className="bar-fill"
                      style={{ width: `${src.score}%` }}
                    >
                      {src.score}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Gauge */}
          <div className="right-panel">
            <div className="gauge-card">
              <h2>Correctness Score</h2>
              <div className="gauge-container">
                <div className="gauge-arc"></div>
                <div
                  className="gauge-needle"
                  style={{ transform: `rotate(${needleRotation}deg)` }}
                ></div>
                <div className="gauge-text">
                  {correctnessScore}% <br />
                  <span>{getGaugeLabel(correctnessScore)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsVerifier;
