import React from 'react';

const EditPortfolio = (props) => {
  return (
    <p>This is my {props.match.params.id}</p>
  );
}

export default EditPortfolio;