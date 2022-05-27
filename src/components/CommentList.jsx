import React, { useEffect, useState } from "react";
import { Row } from "antd";
import CommentCard from "./CommentCard";

function RestaurantList() {
  const [comments, setComments] = useState();
  useEffect(() => {
    // fetch our API
    fetch("http://localhost:3000/messages")
      .then((response) => response.json())
      .then((data) => {
        const newData = data.reverse();
        setComments(newData);
      }) // data -> restaurants
      .catch(console.error);
  }, []);
  return (
    <section style={{ marginTop: "60px" }}>
      <Row>
        {!comments ? (
          <h2>Loading...</h2>
        ) : (
          comments.map((comment) => (
            <CommentCard comment={comment} key={comment.id} />
          ))
        )}
      </Row>
    </section>
  );
}

export default RestaurantList;
