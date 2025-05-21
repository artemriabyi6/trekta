import { Link } from 'react-router-dom'
import { images } from '../../utils/images';
import styles from './footer.module.scss'

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <ul>
                    <li className={styles.mainItem}><Link >Головна</Link></li>
                    <li className={styles.item}><Link >Переваги</Link></li>
                    <li className={styles.item}><Link >Сфери застосування</Link></li>
                    <li className={styles.item}><Link >Приклади наших робіт</Link></li>
                    <li className={styles.item}><Link >Наші партнери</Link></li>
                </ul>
                 <ul>
                    <li className={styles.mainItem}><Link >Ціни та матеріали</Link></li>
                    <li className={styles.item}><Link >SLS технологія</Link></li>
                    <li className={styles.item}><Link >Матеріали</Link></li>
                    <li className={styles.item}><Link >FDM технологія</Link></li>

                    
                </ul>
                 <ul>
                    <li className={styles.mainItem}><Link >Портфоліо</Link></li>
                    <li className={styles.item}><Link >Проекти</Link></li>
                    <li className={styles.item}><Link >Роботи</Link></li>

                   
                </ul>
                 <ul>
                    <li className={styles.mainItem}><Link ></Link>Замовити</li>
                    <li className={styles.item}><Link >Замовити SLS</Link></li>
                     <li className={styles.item}><Link >Замовити FDM</Link></li>
                    
                </ul>
                <ul >
                    <ul className={styles.socialMediaList}>
                        <li  className={styles.mediaItem}><Link><img src={images.instagram} alt="" /></Link></li>
                        <li className={styles.mediaItem}><Link ><img src={images.youtube} alt="" /></Link></li>
                        <li className={styles.mediaItem}><Link><img src={images.twitter} alt="" /></Link></li>
                        <li className={styles.mediaItem}><Link ><img src={images.tikTok} alt="" /></Link></li>
                        <li className={styles.mediaItem}><Link ><img src={images.facebook} alt="" /></Link></li>
                    </ul>
                    <li className={styles.item}><Link>+380 (98) 440 80 10</Link></li>
                    <li className={styles.item}><Link>+380 (95) 611 31 47</Link></li>
                    <li className={styles.item}><Link>order@trekta.com</Link></li>
                </ul>
            </div>
        </footer>
     );
}
 
export default Footer;