import React, { useEffect, useState } from "react";

export default function About() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/data/blogs.json");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    const timeout = setTimeout(() => {
      fetchData();
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading....</div>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id}>
            <div>{blog.author}</div>
            <img src={blog.image} width="300px" alt={`${blog.author}'s blog`} />
            {blog.review.map((review, index) => (
              <div key={index}>{review}</div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}
