import { Link } from "react-router-dom";
import { images } from "../../utils/images";
import styles from "./header.module.scss";
import {useMediaQuery} from 'react-responsive'
import MobileHeader from "../../mobile components/Header";

const Header = () => {

 

  const isMobile = useMediaQuery({maxWidth: 767})
  

  return (
    <>
      {
      isMobile ? (
      <MobileHeader/>
      ) : (
         <header>
      <div className={`container ${styles.container}`}>
        <div className={styles.logoBlock}>
          <Link to="/">
            <img src={images.logo} alt="Logo" />
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/price">ціни та матеріали</Link>
            </li>
            <li>
              <Link to="/projects">портфоліо</Link>
            </li>
            <li>
              <Link to="/contact">контакти</Link>
            </li>
            <Link to="/form"  className={styles.specialItem}>
              <li>
               замовити
              </li>
            </Link>
            
          </ul>
        </nav>
      </div>
    </header>
      )
    }
    
    </>
   
  );
};

export default Header;
