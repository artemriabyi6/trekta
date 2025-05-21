import styles from './materialTable.module.scss'

const materials = [
  { name: "ABS", prices: ["6 грн/гр", "8 грн/гр", "11 грн/гр"] },
  { name: "ABS+", prices: ["10 грн/гр", "13 грн/гр", "18 грн/гр"] },
  { name: "ABS pro", prices: ["12 грн/гр", "15 грн/гр", "20 грн/гр"] },
  { name: "PCTG", prices: ["5 грн/гр", "7 грн/гр", "9 грн/гр"] },
  { name: "PLA", prices: ["4 грн/гр", "6 грн/гр", "8 грн/гр"] },
  { name: "Elastan D70", prices: ["14 грн/гр", "16 грн/гр", "20 грн/гр"] },
  { name: "Elastan D100", prices: ["14 грн/гр", "16 грн/гр", "20 грн/гр"] },
  { name: "Elastan D70-CCF", prices: ["20 грн/гр", "22 грн/гр", "25 грн/гр"] },
  { name: "coPET", prices: ["5 грн/гр", "7 грн/гр", "9 грн/гр"] },
  { name: "Гнучкі (TPU 40D, TPU 85a та ін)", prices: ["14 грн/гр", "16 грн/гр", "20 грн/гр"] },
  { name: "Інші інженерні пластики FDM", prices: ["по запиту", "по запиту", "по запиту"] },
];

const MaterialTable = () => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Матеріал</th>
            <th>Опис</th>
            <th>0,28mm</th>
            <th>0,2mm</th>
            <th>0,1mm</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material, index) => (
            <tr key={index}>
              <td className={styles.material}>{material.name}</td>
              <td>
                <button className={styles.button}>Детальніше</button>
              </td>
              {material.prices.map((price, idx) => (
                <td key={idx}>{price}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaterialTable;