import { Link } from "react-router-dom";
import { images } from "../../utils/images";
import styles from "./projects.module.scss";

const cardsData = [
  { id: 1, text: "ПРОЕКТ КОРПУС МОДУЛЯ ЕЛЕКТРОНІКИ", img: images.project1 },
  { id: 2, text: "ПРОЕКТ МЕХАНІЧНА РУКА ІЗ РУХОМИМИ СУГЛОБАМИ", img: images.project2 },
  { id: 3, text: "ПРОЕКТ ЛІТОФАНІЧНА ЛАМПА-НІЧНИК", img: images.project3 },
];

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={`container ${styles.container}`}>
        <div className={styles.titleBlock}>
          <h2 className={styles.title}>Приклади наших <br /> робіт</h2>
          <p className={styles.subTitle}>
            Від складних технічних деталей до естетичних виробів — ми створюємо
            те, що працює і вражає
          </p>
        </div>
        <div className={styles.cardsBlock}>
          {cardsData.map(({ id, img, text }) => (
            <Link
              to={`/projects#project-${id}`}
              key={id}
              className={styles.card}
            >
              <img src={img} alt={text} loading="lazy" />
              <p className={styles.text}>{text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
