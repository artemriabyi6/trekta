import { useEffect } from "react";
import styles from "./imageModal.module.scss";

const ImageModal = ({ images, activeIndex, onClose, onNext, onPrev, onSelect }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
  document.body.style.overflow = "hidden";
  return () => {
    document.body.style.overflow = "auto";
  };
}, []);

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>×</button>
        <img src={images[activeIndex]} alt="Preview" />
        <button className={styles.prev} onClick={onPrev}>‹</button>
        <button className={styles.next} onClick={onNext}>›</button>
        <div className={styles.thumbnails}>
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              className={idx === activeIndex ? styles.active : ""}
              onClick={() => onSelect(idx)}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
