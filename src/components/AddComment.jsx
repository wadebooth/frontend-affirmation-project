import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddComment() {
  let navigate = useNavigate();

  const [newComment, setNewComment] = useState({
    comment: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: newComment }),
    })
      .then(() => navigate("/"))
      .catch(setError);
  };

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  return (
    <section style={{ margin: "2em 1em" }}>
      <h1>Add Positive Comment</h1>
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      <form onSubmit={handleSubmit}>
        <label for="new-comment">
          New Comment:
          <input
            name="newcomment"
            type="text"
            value={newComment.comment}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
