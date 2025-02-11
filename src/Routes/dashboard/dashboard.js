import React, { useEffect, useState } from "react";
import HomePageCard from "../../components/card/card";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/data/blogs.json");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <div className="main">
        <h1 className="main-heading">Our Best Blog Posts</h1>
        <div className="posts">
          {data.length > 0 ? (
            data.map((post) => <HomePageCard key={post.id} post={post} />)
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
