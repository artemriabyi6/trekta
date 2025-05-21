import styles from './materialCard.module.scss'
import { images } from '../../utils/images';

const MaterialCard = ({ reverse }) => {
    return ( 
        <div className={`${styles.card}  ${reverse ? `${styles.reverse}` : 'aa'}`}>
            <div className={styles.imgBlock}>
                <img src={images.material1} alt="" />
            </div>
            <div className={styles.textBlock}>
                <h3 className={styles.cardTitle}>ABS (акрилонітрил-бутадієн-стирол)</h3>
                <p className={styles.desc}>Характеристики матеріалу ABS:</p>
                <p className={styles.text}>⦁ Механічна міцність: здатний витримувати значні навантаження без руйнування.
⦁ Термостійкість: працює при температурах до 90–100°C, зберігаючи форму та функціональність.
⦁ Хімічна стійкість: не піддається дії лугів, кислот і спиртів.
⦁ Міцність до розтягування: 40 МПа, забезпечує надійність конструкцій.
⦁ Легкість обробки: матеріал можна полірувати, обробляти механічно або створювати гладку поверхню за допомогою спеціальних</p>
<button className={styles.moreBtn}>Детальніше</button>
            </div>

            
        </div>
     );
}
 
export default MaterialCard;