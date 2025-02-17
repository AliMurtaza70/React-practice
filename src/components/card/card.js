import React from "react";
import { Link } from "react-router-dom";

export default function HomePageCard({ post }) {
  return (
    <div className="card">
      <Link
        to={`/blog/${post.id}`}
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        <img
          src={post.image}
          width="100%"
          height="300px"
          style={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
        />
        <div className="card-content">
          <h1 style={{ margin: 0 }}>{post.authorName}</h1>
          <p
            style={{
              margin: 0,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              WebkitLineClamp: "3",
              textOverflow: "ellipsis",
            }}
          >
            {post.description}
          </p>
        </div>
      </Link>
    </div>
  );
}
