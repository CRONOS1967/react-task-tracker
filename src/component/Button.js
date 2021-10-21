import React from "react";
import PropTypes from 'prop-types'
const button = ({ color, text, onClick }) => {
  return (
    <button className="btn" style={{ backgroundColor: color }} onClick={onClick}>
      {text}
    </button>
  );
};

button.defaultProps={
    color: 'steelblue'
}
button.prototype={
    text:PropTypes.string,
    onClick:PropTypes.func
}
export default button;
