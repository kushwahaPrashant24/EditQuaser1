import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './selectableButton.css';

const SelectableButton = ({ content, isSelected: initialSelected, onClick }) => {
  const [isSelected, setIsSelected] = useState(initialSelected);

  const handleClick = () => {
    setIsSelected(!isSelected);
    if (onClick) {
      onClick(!isSelected);
    }
  };

  return (
    <button
      className={`selectable-button ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      {isSelected}
      {content}
    </button>
  );
};

// PropTypes validation
SelectableButton.propTypes = {
  content: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export default SelectableButton;
