import React, { PropTypes } from 'react';

function NumberDisplay(props) {
  return (
    <div>{props.number}</div>
  );
}

NumberDisplay.propTypes = {
  number: PropTypes.string.isRequired,
};

export default NumberDisplay;
