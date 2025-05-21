import Header from "../../components/header/Header";
import OrderBtn from "../../components/orderBtn/OrderBtn";
import Footer from "../../components/footer/Footer";
import styles from './contact.module.scss'


const ContactPage = () => {
    return ( 
        <>
        <div className={styles.contactPage}>
            <Header/>
            <section className={styles.info}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.infoWrapper}>
                        <div className={styles.textBlock}>
                            <h1>Контакти</h1>
                            <p>Адреса꞉ м. Київ, вул. Машинобудівна, 44</p>
                            <p>Графік роботи꞉ ПН-ПТ – з 9꞉00 до 18꞉00</p>
                            <p>Тел꞉ +380 (98) 440 80 10</p>
                            <p>Тел꞉ +380 (95) 611 31 47</p>
                            <p>Email꞉ order@logics3dprint.com</p>
                            <OrderBtn/>
                        </div>
                         <div className={styles.mapWrapper}>
                            <iframe src="https://www.google.com/maps/d/embed?mid=1IgZb95u-TFJxaDjho8sLNfwMe4XU2Pw&ehbc=2E312F" width="640" height="480"></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
       
        </>
     );
}
 
export default ContactPage;