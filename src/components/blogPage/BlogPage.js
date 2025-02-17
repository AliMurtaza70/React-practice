"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const styles = {
  main: {
    marginTop: "80px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    fontFamily: "Poppins",
    marginBottom: "50px",
  },
  blogHeading: {
    fontSize: "38px",
    color: "#AD343E",
    fontWeight: "600",
  },
  image: {
    width: "100%",
    height: "500px",
    objectFit: "cover",
  },
  blogContent: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  description: {
    margin: 0,
    fontSize: "20px",
  },
  aboutBlog: {
    fontSize: "22px",
    fontWeight: "500",
  },
  deleteButton: {
    maxWidth: "260px",
    padding: "16px 0",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#AD343E",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default function BlogPage() {
  const { blogId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (blogId) {
      fetch(`http://localhost:3001/api/blogs/${blogId}`)
        .then((response) => response.json())
        .then((data) => setPost(data))
        .catch((error) => console.error("Error fetching blog:", error));
    }
  }, [blogId]);

  if (!post) {
    return (
      <div>
        <h1>No Blogs Yet</h1>
      </div>
    );
  }
  
  return (
    <div className="container">
      <div style={styles.main}>
        <img src={post.image} style={styles.image} />
        <div style={styles.blogContent}>
          <h1 style={styles.blogHeading}>{post.title}</h1>
          <p style={styles.description}>{post.description}</p>
          <span style={styles.aboutBlog}>Written By: {post.author}</span>
          <span style={styles.aboutBlog}>Publish on: {post.publishDate}</span>
          <button style={styles.deleteButton}>Delete Blog</button>
        </div>
      </div>
    </div>
  );
}
