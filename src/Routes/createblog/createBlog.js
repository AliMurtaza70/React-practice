import React, { useState } from "react";

const styles = {
  main: {
    marginTop: "80px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    fontFamily: "Poppins",
    marginBottom: "50px",
  },
  heading: {
    fontSize: "40px",
    color: "#AD343E",
    fontWeight: "600",
    textAlign: "center",
  },
  inputBox: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "30px",
    width: "100%",
  },
  label: {
    fontSize: "16px",
    display: "block",
    marginBottom: "5px",
    fontWeight: "500",
  },
  inputField: {
    width: "95%",
    padding: "12px 8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
    fontFamily: "poppins",
  },
  textFieldBox: {
    marginTop: "40px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  textField: {
    padding: "10px",
    fontSize: "16px",
    fontFamily: "Poppins",
  },
  button: {
    marginTop: "30px",
    width: "100%",
    padding: "16px 0",
    fontSize: "18px",
    fontFamily: "Poppins",
    border: "none",
    backgroundColor: "#AD343E",
    color: "White",
    fontWeight: "500",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

const inputFields = [
  { label: "Blog Title", placeholder: "Enter blog title", name: "title" },
  { label: "Blog Image URL", placeholder: "Enter image URL", name: "image" },
  { label: "Author Name", placeholder: "Enter author name", name: "author" },
  {
    label: "Publish Date",
    placeholder: "Enter publish date",
    name: "publishDate",
    type: "date",
  },
];

const initialFormState = {
  title: "",
  image: "",
  author: "",
  publishDate: "",
  description: "",
};

export default function CreateBlog() {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(formData).some((value) => !value)) {
      alert("Please fill out all fields before submitting.");
      return;
    }
    
    try {
      const response = await fetch("http://localhost:3001/api/blogs");
      const blogs = await response.json();
  
      const nextId = blogs.length > 0 ? Math.max(...blogs.map((b) => b.id)) + 1 : 1;
  
      const newBlog = { id: nextId, ...formData };
  
      const postResponse = await fetch("http://localhost:3001/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBlog),
      });
  
      if (postResponse.ok) {
        alert("Blog submitted successfully!");
        setFormData(initialFormState);
      } else {
        const { error } = await postResponse.json();
        alert(`Error: ${error || "Failed to submit blog."}`);
      }
    } catch (error) {
      console.error("Failed to submit blog:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };
  
  return (
    <div className="container">
      <div style={styles.main}>
        <h1 style={styles.heading}>Create Your Own Blog</h1>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputBox}>
            {inputFields.map((field, index) => (
              <div key={index} style={{ width: "48%" }}>
                <label htmlFor={field.name} style={styles.label}>
                  {field.label}
                </label>
                <input
                  id={field.name}
                  type={field.type || "text"}
                  placeholder={field.placeholder}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  style={styles.inputField}
                />
              </div>
            ))}
          </div>
          <div style={styles.textFieldBox}>
            <h2 style={styles.label}>Blog Description</h2>
            <textarea
              name="description"
              style={styles.textField}
              rows={11}
              placeholder="Enter Blog Description ..."
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <button style={styles.button} type="submit">
            Submit Blog
          </button>
        </form>
      </div>
    </div>
  );
}
