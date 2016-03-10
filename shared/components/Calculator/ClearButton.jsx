import React, { PropTypes } from 'react';

function ClearButton(props) {
  return (
    <div onClick={props.press}>Clear</div>
  );
}

ClearButton.propTypes = {
  press: PropTypes.func.isRequired,
};

export default ClearButton;
