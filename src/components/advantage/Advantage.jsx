import AdvantageCard from '../advantageCard/AdvantageCard';
import styles from './advantage.module.scss'

const Advantage = () => {
    return ( 
        <section>
            <div className="container">
                <h2>Переваги формують вибір</h2>

                <div className={styles.advantagesWrapper}>
                    <div className={styles.firstRow}>
                        <AdvantageCard number='01' title='Розумна вартість' text='Ми пропонуємо вигідні ціни, зберігаючи високу якість друку для кожного вашого проєкту.' hasBorder={true}/>
                         <AdvantageCard number='02' title='
Індивідуальний підхід' text='Наші спеціалісти адаптують процеси друку під ваші завдання, гарантуючи ідеальний результат.' hasBorder={false}/>
                    </div>
                    <div className={styles.secondRow}>
                        <AdvantageCard number='03' title='Оперативність друку' text='Швидкість виготовлення — це наша перевага, яка допомагає вам реалізувати проєкти вчасно.' hasBorder={true}/>
                        <AdvantageCard number='04' title='Якість яка вражає' text='Бездоганна якість — це основа нашої роботи, яка завжди залишає клієнтів задоволеними.' hasBorder={false}/>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Advantage;