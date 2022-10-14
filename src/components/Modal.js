import React from "react";

const Modal = ({
  showModal,
  setShowModal,
  content,
  backgroundColor,
  contentcolor,
  borderModal,
  fontSizeModal,
}) => {
  return (
    <>
      {showModal ? (
        <div
          className="background"
          style={{
            backgroundColor: backgroundColor,
            opacity: "0.85",
            fontWeight: "bold",
            padding: "2rem",
            margin: "0 auto",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "2",
            minWidth: "340px",
            width: "99vw",
            height: "98.5vh",
            borderRadius: borderModal,
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="modal-wrapper"
            showModal={showModal}
            style={{
              borderRadius: borderModal,
            }}
          >
            <div className="modal-content">
              <p style={{ color: contentcolor, fontSize: fontSizeModal }}>
                {content}
              </p>
            </div>
            <div
              className="close-modal-button"
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)} /// toggle modal
              style={{
                color: contentcolor,
                fontSize: "1.5rem",
                fontWeight: "lighter",
                outline: "1px solid white",
                width: "50%",
                height: "3rem",
                borderRadius: "20px",
                margin: "40px auto 10px auto",
                padding: ".5rem",
                cursor: "pointer",
              }}
              onMouseOver={(e) =>
                (e.target.style.background = "white") &&
                (e.target.style.color = "#8D6A9F")
              }
              onMouseOut={(e) =>
                (e.target.style.background = "transparent") &&
                (e.target.style.color = "white")
              }
            >
              Close
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
