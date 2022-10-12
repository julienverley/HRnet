import React from "react";

const LastConnexionMessage = () => {
  return (
    <>
      <div
        style={{
          fontSize: ".9rem",
          opacity: ".25",
          textAlign: "center",
          margin: "2rem",
        }}
      >
        Dernière connexion,{" "}
        {new Date().toLocaleDateString("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        })}
      </div>
    </>
  );
};

export default LastConnexionMessage;
