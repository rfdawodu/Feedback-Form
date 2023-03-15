import React, { useState } from "react";

export default function App() {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState(
    "we appreciate you give us an honest feedBack .Thank you🤗 "
  );

  const handleClick = (e) => {
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please provide a explaining why the service is poor .Thank you");
    } else {
      alert("form submitted");
      console.log("form submitted");

      setScore(score);
      setComment("");
      setMessage("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();

    setMessage("");
  };

  return (
    <div>
      <h1>FeedBack form</h1>
      {message && <h2>{message}</h2>}

      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="field">
            <label>Score: {score}⭐️</label>
            <br></br>

            <input
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
          <div className="field">
            <label>comment:</label>
            <br></br>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}
