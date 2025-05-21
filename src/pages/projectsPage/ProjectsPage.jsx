import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./projects.module.scss";
import OrderBtn from "../../components/orderBtn/OrderBtn";
import StickyImage from "../../components/stickyImage/StickyImage";
import ProjectCard from "../../components/projectCard/ProjectCard";
import Counter from "../../components/counter/Counter";
import AnimatedBlock from "../../components/animatedBlock/AnimatedBlock";
import ImageModal from "../../components/imageModal/ImageModal";
import { images } from "../../utils/images";
import { memo, useRef, useEffect, useState } from "react";

const counters = [
  { label: "Виготовлено", value: 2000 },
  { label: "Партнерів", value: 50 },
  { label: "Матеріали", value: 30 },
];

const stickyImages = [
  { img: images.project1, reverse: false },
  { img: images.project2, reverse: true },
  { img: images.project3, reverse: false },
];

const imagesArray = [images.drone, images.project1, images.project2, images.project3, images.drone, images.drone];

const ProjectsPage = () => {
  const stickyRefs = useRef({});

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = stickyRefs.current[id];
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOpen = (idx) => {
    setActiveIndex(idx);
    setIsOpen(true);
  };

  const handleNext = (customIndex) => {
    if (typeof customIndex === "number") {
      setActiveIndex(customIndex);
    } else {
      setActiveIndex((prev) => (prev + 1) % imagesArray.length);
    }
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + imagesArray.length) % imagesArray.length);
  };

  const handleSelect = (idx) => {
    setActiveIndex(idx);
  };

  return (
    <div className={styles.projectPage}>
      <Header />

      <div className={`container ${styles.container}`}>
        <div className={styles.mainBanner}>
          <AnimatedBlock delay={0.1}>
            <h4 className={styles.subTitle}>НАШІ ПРОЕКТИ</h4>
          </AnimatedBlock>
          <AnimatedBlock delay={0.2}>
            <h1 className={styles.title}>Trekta</h1>
          </AnimatedBlock>
          <AnimatedBlock delay={0.3}>
            <p className={styles.text}>
              Наші роботи — це результат інноваційних рішень і високих
              стандартів, втілених у життя. Ми створюємо проєкти, які поєднують
              сучасні технології, креативний підхід і бездоганну якість
              виконання.
            </p>
          </AnimatedBlock>
          <AnimatedBlock delay={0.4}>
            <div className={styles.projectsInfo}>
              {counters.map(({ label, value }, idx) => (
                <div key={idx} className={styles.numberBlock}>
                  <p className={styles.main}>{label}</p>
                  <span className={styles.count}>
                    <Counter targetNumber={value} />
                  </span>
                </div>
              ))}
            </div>
          </AnimatedBlock>
          <AnimatedBlock delay={0.5}>
            <OrderBtn />
          </AnimatedBlock>
        </div>

        <div className={styles.projectsWrapper}>
          {stickyImages.map(({ img, reverse }, idx) => {
            const id = `project-${idx + 1}`;

            return (
              <AnimatedBlock key={idx} delay={0.3}>
                <div
                  id={id}
                  ref={(el) => (stickyRefs.current[id] = el)}
                >
                  <StickyImage img={img} reverse={reverse} />
                </div>
              </AnimatedBlock>
            );
          })}
        </div>

        <AnimatedBlock>
          <div className={styles.others}>
            <h2 className={styles.otherTitle}>Інші моделі</h2>
            <div className={styles.otherWrapper}>
              {imagesArray.map((img, idx) => (
                <ProjectCard key={idx} img={img} onClick={() => handleOpen(idx)} />
              ))}
            </div>
            {isOpen && (
              <ImageModal
                images={imagesArray}
                activeIndex={activeIndex}
                onClose={() => setIsOpen(false)}
                onNext={handleNext}
                onPrev={handlePrev}
                onSelect={handleSelect}
              />
            )}
          </div>
        </AnimatedBlock>
      </div>

      <Footer />
    </div>
  );
};

export default memo(ProjectsPage);

