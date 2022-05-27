import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Card, Rate } from "antd";
import { UserContext } from "../App";
const { Meta } = Card;

export default function CommentCard({ comment }) {
  let navigate = useNavigate();
  const { user } = useContext(UserContext);
  return (
    <Col style={{ width: "300px", margin: "1em" }}>
      <Card style={{ backgroundColor: "#205493" }} loading={!comment} hoverable>
        {comment.comment}
        <Meta title={comment?.name} description={comment?.address} />
        {user && <Rate />}
      </Card>
    </Col>
  );
}
