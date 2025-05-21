import styles from './materialTable.module.scss';

const materialsSLS = [
  { name: "Nylon 12", price: "19 грн/гр" },
  { name: "Постобробка поверхні (шліфовка)", price: "2 грн/гр" },
  { name: "Інші інженерні пластики SLS", price: "по запиту", isBold: true },
];

const SlsMaterialTable = () => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.fixedTable}>
        <thead className={styles.thead}>
          <tr>
            <th>Матеріал</th>
            <th>Опис</th>
            <th>0,1 мм</th>
          </tr>
        </thead>
        <tbody>
          {materialsSLS.map((material, index) => (
            <tr key={index}>
              <td className={`${styles.material} ${material.isBold ? styles.bold : ''}`}>
                {material.name}
              </td>
              <td>
                {!material.isBold && (
                  <button className={styles.button}>Детальніше</button>
                )}
              </td>
              <td>{material.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={styles.note}>
        Наведені ціни на 3D друк не включають ПДВ. Ціна може відрізнятися в залежності від складності та розміру моделі, типу матеріалу, терміновості виконання, додаткової обробки.
      </p>
    </div>
  );
};

export default SlsMaterialTable;