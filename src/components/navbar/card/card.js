import React from "react";

const styles = {
  card: {
    borderRadius: "12px",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  imageBox: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "rgb(71 71 71 / 22%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  aboutCard: {
    display: "flex",
    flexDirection: "column",
  },
  cardTitle: {
    fontSize: "24px",
    fontFamily: "DM Sans",
    fontWeight: "600",
    lineHeight: "30px",
    margin: 0,
  },
  cardDesc: {
    fontFamily: "DM Sans",
    fontWeight: "400",
    margin: 0,
  },
  cardButton: {
    color: "#AD343E",
    fontSize: "15px",
    fontFamily: "DM Sans",
    fontWeight: "600",
    lineHeight: "24px",
    borderRadius: "12px",
    padding: "1px 2px",
    border: "none",
  },
  reviewCardContent: {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  },
  reviewuserBox: {
    borderTop: "1px solid #DBDFD0",
    paddingTop: "32px",
    display: "flex",
    gap: "20px",
  },
  reviewUserDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  },
  userName: {
    fontSize: "16px",
    fontFamily: "DM Sans",
    lineHeight: "24px",
    fontWeight: "700",
    margin: 0,
  },
  userAddress: {
    fontSize: "16px",
    fontFamily: "DM Sans",
    lineHeight: "24px",
    fontWeight: "400",
    margin: 0,
  },
};
export default function Card({ card, variant }) {
  const isMenuView = variant === "menu";

  return (
    <div
      style={{
        ...styles.card,
        padding: isMenuView ? "40px 34px 32px 34px" : "40px 35px 35px 35px",
        border: isMenuView ? "1.5px solid #DBDFD0" : "none",
        backgroundColor: !isMenuView ? "#F9F9F7" : "transparent",
      }}
    >
      <div style={isMenuView ? styles.cardContent : styles.reviewCardContent}>
        {isMenuView ? (
          <div style={styles.imageBox}>
            <img src={card.image} width="48px" height="50px" />
          </div>
        ) : null}
        <div
          style={{
            ...styles.aboutCard,
            gap: isMenuView ? "15px" : "24px",
            textAlign: isMenuView ? "center" : "start",
          }}
        >
          <h2
            style={{
              ...styles.cardTitle,
              color: isMenuView ? "#2C2F24" : "#AD343E",
            }}
          >
            {card.title}
          </h2>
          <p
            style={{
              ...styles.cardDesc,
              fontSize: isMenuView ? "15px" : "18px",
              lineHeight: isMenuView ? "24px" : "28px",
            }}
          >
            {card.description}
          </p>
        </div>
        {isMenuView ? (
          <button style={styles.cardButton}>{card.button}</button>
        ) : null}
        {!isMenuView ? (
          <div style={styles.reviewuserBox}>
            <img
              width="70px"
              height="70px"
              style={{
                objectFit: "cover",
              }}
              src={card.image}
            />
            <div style={styles.reviewUserDetails}>
              <h6 style={styles.userName}>{card.userName}</h6>
              <p style={styles.userAddress}>{card.userAddress}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
