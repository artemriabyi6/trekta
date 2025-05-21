import styles from "./projectCard.module.scss";

const ProjectCard = ({ img, onClick }) => {
  return (
     <div className={styles.card} onClick={onClick}>
      <img src={img} alt="photo" loading="lazy" />
    </div>
  );
};

export default ProjectCard;
