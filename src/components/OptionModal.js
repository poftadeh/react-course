import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={false}
    contentLabel="selected option"
  >
    <h3>Selected Option</h3>
  </Modal>
);

export default OptionModal;
