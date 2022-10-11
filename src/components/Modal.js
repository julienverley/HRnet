import React from "react";
// import Cancel from "./assets/images/cancel.png";
// import Check from "./assets/images/check.png";

const Modal = ({
  showModal,
  setShowModal,
  content,
  backgroundColor,
  colorModal,
  contentcolor,
  iconModal,
  shadowModal,
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
            opacity: "0.9",
            fontWeight: "bold",
            padding: "1rem",
            margin: "0 auto",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "340px",
            height: "250px",
            borderRadius: "10px",
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
              background: colorModal,
              boxShadow: shadowModal,
              borderRadius: borderModal,
            }}
          >
            <div className="modal-content">
              {/* {iconModal === "success" && <img src={Check} alt="check logo" />}
              {iconModal === "error" && <img src={Cancel} alt="check logo" />} */}

              <p style={{ color: contentcolor, fontSize: fontSizeModal }}>
                {content}
              </p>
            </div>
            <div
              className="close-modal-button"
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
              style={{
                color: contentcolor,
                fontSize: "1.5rem",
                fontWeight: "lighter",
                outline: "1px solid white",
                width: "50%",
                borderRadius: "10px",
                margin: "40px auto 10px auto",
                cursor: "pointer",
              }}
            >
              {/* &times; */}Close
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

// const Background = `
//   background: rgba(189, 189, 189, 0.7);
//   position: fixed;
//   min-height: 100vh;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   left: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 10;
//   padding: 20px;
//   box-sizing: border-box;
// `;

// const ModalWrapper = `
//   min-width: 250px;
//   max-width: 900px;
//   /* box-shadow: 0 5px 16px rgba(0, 0, 0, 0.6); */
//   background-color: #fff;
//   color: #000;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   position: relative;
//   z-index: 20;
//   /* border-radius: 10px; */
//   padding: 10px 20px;
// `;

// const ModalContent = `
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   line-height: 1.8;
//   color: #141414;
//   padding: 10px 0;

//   img {
//     margin: 20px;
//     width: 60px;
//     @media (max-width: 680px) {
//       width: 50px;
//     }
//     @media (max-width: 480px) {
//       width: 40px;
//     }
//   }

//   p {
//     margin: 0;
//     padding: 0;
//     border-top: 1px solid;
//     margin-bottom: 1rem;
//     font-size: 2.5rem;
//     text-align: center;
//     font-weight: bold;
//     padding-top: 10px;
//     color: #000;

//     @media (max-width: 680px) {
//       font-size: 2rem;
//     }
//     @media (max-width: 480px) {
//       font-size: 1.8rem;
//     }
//   }
// `;

// const CloseModalButton = `
//   cursor: pointer;
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   width: 32px;
//   height: 32px;
//   padding: 0;
//   z-index: 30;
//   font-size: 2rem;
//   font-weight: 900;

//   :hover {
//     color: red;
//   }
// `;

export default Modal;
