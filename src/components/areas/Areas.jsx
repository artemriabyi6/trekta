import styles from "./areas.module.scss";
import { images } from "../../utils/images";
import OrderBtn from "../orderBtn/OrderBtn";

const productData = [
  {
    title: "Деталі для БПЛА",
    description:
      "Виготовляємо міцні та легкі компоненти для корпусів, механізмів і електроніки безпілотників, що витримують польові умови.",
    image: images.drone,
    tags: ["Nylon (Нейлон)", "PLA (Полілактид)", "ABS"],
  },
  {
    title: "Промислові деталі",
    description:
      "Інженерна точність і передові матеріали для створення надійних промислових компонентів.",
    image: images.drone,
    tags: ["Nylon (Нейлон)", "PLA (Полілактид)", "ABS"],
  },
  {
    title: "Мілітарі технології",
    description:
      "Виготовляємо кронштейни, панелі та елементи для військових пристроїв, які легко інтегруються у ваші системи.",
    image: images.drone,
    tags: ["Nylon (Нейлон)", "PLA (Полілактид)", "ABS"],
  },
  {
    title: "Корпуси для електроніки",
    description:
      "Індивідуальні рішення для корпусів, які допомагають вашій техніці виглядати сучасно і працювати бездоганно.",
    image: images.drone,
    tags: ["Nylon (Нейлон)", "PLA (Полілактид)", "ABS"],
  },
  {
    title: "Корпуси для електроніки",
    description:
      "Індивідуальні рішення для корпусів, які допомагають вашій техніці виглядати сучасно і працювати бездоганно.",
    image: images.drone,
    tags: ["Nylon (Нейлон)", "PLA (Полілактид)", "ABS"],
  },
  {
    title: "Корпуси для електроніки",
    description:
      "Індивідуальні рішення для корпусів, які допомагають вашій техніці виглядати сучасно і працювати бездоганно.",
    image: images.drone,
    tags: ["Nylon (Нейлон)", "PLA (Полілактид)", "ABS"],
  },
];

const Areas = () => {
  return (
    <section className={styles.areasSection}>
        <div className={`container ${styles.container}`}>
             <h1>Сфери застосування</h1>
        </div>
     
      <div className={styles.productGrid}>
        {productData.map((item, index) => (
          <div
            className={`${styles.productCard} ${
              index % 2 !== 0 ? `${styles.reverse}` : ""
            }`}
            key={index}
          >
            <img src={item.image} alt={item.title} loading="lazy"/>
            <div className={styles.productContent}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className="tags">
                {item.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.buttonBlock}>
        <OrderBtn/>
      </div>
    </section>
  );
};

export default Areas;
