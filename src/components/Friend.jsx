import React from "react";

const Friend = ({ item }) => {
  console.log(item);
  return (
    <div
      style={{
        padding: "1rem",
        margin: "auto",
        maxWidth: "700px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h3>{`${item.first_name} ${item.last_name}`}</h3>
      <img src={item.photo_200_orig} alt="friend"></img>
    </div>
  );
};

export default Friend;
