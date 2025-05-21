

import { useRef, useState, useEffect } from "react";
import styles from "./StickyImage.module.scss";

const StickyImage = ({ reverse, img }) => {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Завантажуємо один раз
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`${styles.stickyWrapper} ${
        reverse ? styles.reverse : ""
      }`}
    >
      <div className={styles.textBlock}>
        <h3 className={styles.subTitle}>Виготовлено з матеріалу PA12</h3>
        <h2 className={styles.title}>
          ПРОЕКТ КОРПУС <br /> МОДУЛЯ ЕЛЕКТРОНІКИ
        </h2>
        <p className={styles.text}>
          Корпус модуля електроніки складається з чотирьох елементів,
          виготовлених за допомогою технології SLS (Selective Laser Sintering).
          Ця технологія забезпечує високу механічну міцність і точність деталей,
          що є критично важливим для електронних модулів. Особливістю SLS-друку є
          можливість створення складних геометричних форм без розділення на
          окремі компоненти, що значно спрощує подальшу збірку. Завдяки своїй
          гнучкості та швидкості, ця технологія є ідеальним рішенням для мало-
          та середньосерійного виробництва, дозволяючи оптимізувати витрати та
          зберегти високу якість продукції.
        </p>
        <button className={styles.moreBtn}>Оглянути проєкт</button>
      </div>

      <div className={styles.imageWrapper}>
        <div className={styles.imageSticky} ref={imgRef}>
          {isVisible && (
  <img
    src={img}
    alt="Зображення"
    onLoad={() => {
      if (imgRef.current) {
        imgRef.current.classList.add("loaded");
      }
    }}
  />
)}
        </div>
      </div>
    </div>
  );
};

export default StickyImage;

