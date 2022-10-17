import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

// Ce fichier en NPM
// Ajouter propTypes

const Modal = ({
  showModal,
  setShowModal,
  modalContentText,
  modalBackgroundColor,
  modalContentColor,
  modalBorder,
  modalFontSize,
  style,
}) => {
  const employeesList = useSelector((state) => state.employees.employees);
  console.log(employeesList);
  const employeesListLastAdded = (employeesList) => {
    const lastAdded = employeesList[employeesList.length - 1];
    return lastAdded;
  };
  console.log(employeesListLastAdded(employeesList).firstName);
  const lastAddedFirst = employeesListLastAdded(employeesList).firstName;
  const lastAddedLast = employeesListLastAdded(employeesList).lastName;
  console.log(lastAddedFirst);
  console.log(lastAddedLast);

  // return lastAdded;
  // const lastAddedFirst = lastAdded.firstName;
  // console.log(lastAddedFirst);
  // employeesListLastAdded(employeesList);

  return (
    <>
      {showModal ? (
        <div
          className="background"
          style={{
            backgroundColor: modalBackgroundColor,
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
            borderRadius: modalBorder,
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ...style, ///
          }}
        >
          <div
            className="modal-wrapper"
            style={{
              borderRadius: modalBorder,
            }}
          >
            <div className="modal-content">
              <p style={{ color: modalContentColor, fontSize: modalFontSize }}>
                {/* {modalContentText} */}
                Employee {lastAddedFirst} {lastAddedLast} added
              </p>
            </div>
            <div
              className="close-modal-button"
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)} /// toggle modal
              style={{
                color: modalContentColor,
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

// PropTypes for Modal
Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired, //
  // content: PropTypes.string.isRequired,
  modalBackgroundColor: PropTypes.string,
  modalContentColor: PropTypes.string,
  modalBorder: PropTypes.string,
  modalFontSize: PropTypes.string,
};

export default Modal;
