import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CommentCard from "./CommentCard";

export default function CommentPage() {
  const { commentId } = useParams();
  const [comment, setComment] = useState();
  useEffect(() => {
    fetch(`localhost:3000/messages/${commentId}`)
      .then((response) => response.json())
      .then((data) => setComment(data))
      .catch(console.error);
  }, [commentId]);
  return (
    <>
      <Link to="/"> &lt; Back</Link>
      <CommentCard comment={comment} />
    </>
  );
}
