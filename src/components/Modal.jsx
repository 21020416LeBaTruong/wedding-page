import React from "react";
import PropTypes from "prop-types";

const ImageModal = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative">
        <img src={imageSrc} alt="Enlarged view" className="max-w-full max-h-screen" />
        <button onClick={onClose} className="absolute top-0 right-0 text-white text-2xl p-2">
          &times;
        </button>
      </div>
    </div>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  imageSrc: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;
