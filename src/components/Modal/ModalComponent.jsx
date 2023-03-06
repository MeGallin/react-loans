import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ModalComponent.css';

const ModalComponent = ({
  openButtonTitle,
  closeButtonTitle,
  props,
  className,
}) => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <>
      {showModal ? (
        <div>
          <div
            title="Close modal"
            className={showModal ? 'modal-overlay' : null}
            onClick={() => setShowModal(false)}
          />
          <div className="modal-wrapper">
            <button
              onClick={() => setShowModal(false)}
              className="confirmation"
            >
              {closeButtonTitle}
            </button>
            {props}
          </div>
        </div>
      ) : null}
      <div onClick={handleShowModal} className={`${className} modal-btn`}>
        {openButtonTitle}
      </div>
    </>
  );
};

ModalComponent.propTypes = {
  openButtonTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  closeButtonTitle: PropTypes.string,
  props: PropTypes.object,
  className: PropTypes.string,
};

export default ModalComponent;
