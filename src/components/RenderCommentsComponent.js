import React from "react";
import CommentForm from "./CommentForm";
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderComments(props) {
  return (
    <div>
      <h1>Comments</h1>
      <Stagger in>
      {props.comments.map((comment) => {
        return (
          <Fade in>
          <ul className="list-unstyled">
            <li>{comment.comment}</li>
            <li>
              -- {comment.author},{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </li>
          </ul>
          </Fade>
        );
      })}
      </Stagger>
      <CommentForm dishId={props.dishId} addComment={props.addComment} postComment={props.postComment}  />
    </div>
  );
}

export default RenderComments;
