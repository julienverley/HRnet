import React from "react";
import PropTypes from "prop-types";

const AtomNavButton = ({ content }) => {
  return <div className="nav">{content}</div>;
};

// PropTypes for AtomNavButton
AtomNavButton.propTypes = {
  content: PropTypes.string.isRequired,
};

export default AtomNavButton;
