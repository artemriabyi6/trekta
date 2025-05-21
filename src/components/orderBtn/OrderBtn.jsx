import { Link } from 'react-router-dom';
import styles from './orderBtn.module.scss'

const OrderBtn = () => {
    return ( 
        <Link to="/form">
         <button className={styles.button}>замовити 3Д друк</button>
        </Link>
     );
}
 
export default OrderBtn;