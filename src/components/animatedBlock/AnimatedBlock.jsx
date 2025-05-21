import { useEffect, useRef, useState } from "react";
import styles from "./animatedBlock.module.scss"; // Підключи свої стилі

const AnimatedBlock = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current); // Анімація лише один раз
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.block} ${visible ? styles.fadeInUp : ""}`}
      style={{
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedBlock;

