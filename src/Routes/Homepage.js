import React, { useState } from "react";
import "./homepage.css";
import Card from "../components/navbar/card/card";

const buttons = ["Book A Table", "Explore Menu"];

const cards = [
  {
    id: 1,
    image: "/images/icon1.png",
    title: "Breakfast",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    button: "Explore Menu",
  },
  {
    id: 2,
    image: "/images/icon2.png",
    title: "Main Dishes",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    button: "Explore Menu",
  },
  {
    id: 3,
    image: "/images/icon1.png",
    title: "Drinks",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    button: "Explore Menu",
  },
  {
    id: 4,
    image: "/images/icon2.png",
    title: "Desserts",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    button: "Explore Menu",
  },
];

const reviewCards = [
  {
    id: 1,
    title: "“The best restaurant”",
    description:
      "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    image: "/images/user1.png",
    userName: "Sophire Robson",
    userAddress: "Los Angeles, CA",
  },
  {
    id: 2,
    title: "“The best restaurant”",
    description:
      "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    image: "/images/user1.png",
    userName: "Sophire Robson",
    userAddress: "Los Angeles, CA",
  },
  {
    id: 3,
    title: "“The best restaurant”",
    description:
      "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    image: "/images/user1.png",
    userName: "Sophire Robson",
    userAddress: "Los Angeles, CA",
  },
];

export default function Homepage() {
  return (
    <>
      <div className="first-section">
        <div className="first-sec-content">
          <h1>Best food for your taste</h1>
          <p>
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>
          <div className="buttons">
            {buttons.map((button, index) => (
              <button key={index}>{button}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="second-section">
        <div className="container">
          <div className="second-sec-content">
            <h1 className="sec-heading1">Browse Our Menu</h1>
            <div className="sec-cards">
              {cards.map((card) => (
                <Card variant={"menu"} key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="second-section">
        <div className="container">
          <div className="second-sec-content">
            <h1 className="sec-heading1">What Our Customers Say</h1>
            <div className="sec-cards">
              {reviewCards.map((card) => (
                <Card variant={"review"} key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
