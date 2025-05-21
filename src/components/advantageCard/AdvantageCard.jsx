import styles from './advantageCard.module.scss'

const AdvantageCard = ({ number, title, text, hasBorder}) => {
    return ( 
        <div className={`${styles.card}  ${!hasBorder ? styles.noBorder : ''}`} >
            <div className={styles.numberTitleBlock}>
                 <p className={styles.number}>{number}</p>
                 <h3 className={styles.title}>{title}</h3>
            </div>
           
            <p className={styles.text}>{text}</p>
        </div>
     );
}
 
export default AdvantageCard;