import React, { useState } from 'react';
import './App.css';

function App() {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  // Simulation of AI generation (So you can take screenshots without an API Key)
  const handleGenerate = () => {
    if (!topic) return;
    setLoading(true);

    // Simulating a 2-second API delay
    setTimeout(() => {
      setLoading(false);
      setResult({
        title: `The Ultimate Guide to ${topic}: Trends & Tips for 2026`,
        intro: `In the rapidly evolving world of ${topic}, staying ahead of the curve is essential. This comprehensive guide explores the key strategies you need to know...`,
        keywords: `#${topic.replace(/\s/g, '')} #2026Trends #ExpertTips #Growth`,
        body: `1. Understand the Basics of ${topic}\nFirst, we need to analyze the core fundamentals. Experts suggest that focusing on foundational elements yields 80% of the results.\n\n2. Advanced Strategies\nLeveraging data-driven insights can significantly boost your performance in ${topic}.`
      });
    }, 2000);
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">ContentAI ⚡</div>
        <nav>
          <div className="nav-item active">📝 Blog Generator</div>
          <div className="nav-item">🔍 SEO Analyzer</div>
          <div className="nav-item">⚙️ Settings</div>
        </nav>
        <div className="user-profile">
          <div className="avatar">MH</div>
          <span>Mukit Hasan</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header>
          <h1>AI Blog Post Generator</h1>
          <p>Create SEO-optimized content in seconds powered by GPT-4.</p>
        </header>

        <div className="input-section">
          <label>Enter Your Blog Topic</label>
          <div className="input-group">
            <input
              type="text"
              placeholder="E.g., Digital Marketing Strategies for 2026..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
            <button onClick={handleGenerate} disabled={loading}>
              {loading ? 'Generating...' : '✨ Generate Content'}
            </button>
          </div>
        </div>

        {/* Result Area */}
        {result && (
          <div className="result-card">
            <div className="badge">SEO Optimized</div>
            <h2>{result.title}</h2>
            <p className="keywords">{result.keywords}</p>
            <div className="content-body">
              <p><strong>Introduction:</strong> {result.intro}</p>
              <pre>{result.body}</pre>
            </div>
            <div className="actions">
              <button className="btn-secondary">Copy Text</button>
              <button className="btn-secondary">Export to CMS</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;