import Header from '../header/Header';
import OrderBtn from '../orderBtn/OrderBtn';
import styles from './mainBanner.module.scss'

const MainBanner = () => {
    return ( 
        <div className={styles.mainBannerWrapper}>
             <Header/>
             <div className={`container ${styles.container}`}>
                <h1 className={styles.title}>Промисловий 3D-друк <br /> для бізнесу та інноваційних рішень</h1>
                <h3 className={styles.subtitle}>Від прототипів до <br />
                серійного виробництва</h3>
                  <OrderBtn/>
            </div>
          
        </div>
       
     );
}
 
export default MainBanner;