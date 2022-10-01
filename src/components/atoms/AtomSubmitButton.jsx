import React from "react";
///
const AtomSubmitButton = ({ isSubmitting }) => {
  return (
    <>
      <button className="button" disabled={isSubmitting} type="submit">
        Save
      </button>
    </>
  );
};

export default AtomSubmitButton;
