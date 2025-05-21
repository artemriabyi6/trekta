import { useState, useEffect } from 'react';
import { images } from '../utils/images';
import { Link } from 'react-router-dom';
import styles from './header.module.scss'

const MobileHeader = () => {

     const [isMenuOpen, setIsMenuOpen] = useState(false);

   useEffect(() => {
  const body = document.body;
  
  if (isMenuOpen) {
    // Запам'ятовуємо поточну позицію скролу
    const scrollY = window.scrollY;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';
    body.style.overflow = 'hidden';
  } else {
    // Відновлюємо позицію скролу
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    body.style.width = '';
    body.style.overflow = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
  
  return () => {
    // Cleanup на випадок розмонтування компонента
    body.style.position = '';
    body.style.top = '';
    body.style.width = '';
    body.style.overflow = '';
  };
}, [isMenuOpen]);


    return ( 
        <>
           <header>
  <div className={`container ${styles.container}`}>
    <div className={styles.logoBlock}>
      <Link to="/">
        <img src={images.logo} alt="Logo" />
      </Link>
    </div>

    {/* Кнопка бургера - тепер вона завжди праворуч */}
    <button 
      className={`${styles.burgerButton} ${isMenuOpen ? styles.hidden : ''}`}
      onClick={() => setIsMenuOpen(true)}
    >
      <img src={images.burger} alt="Open menu" />
    </button>

    {/* Бекдроп */}
    <div 
      className={`${styles.backdrop} ${isMenuOpen ? styles.open : ''}`}
      onClick={() => setIsMenuOpen(false)}
    />

    {/* Меню */}
    <nav className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
      {/* Кнопка закриття всередині меню */}
      <button 
        className={styles.closeButton}
        onClick={() => setIsMenuOpen(false)}
      >
        <img src={images.cross} alt="Close menu" />
      </button>
      
      {/* Пункти меню */}
      <ul>
        <li><Link to="/price">Ціни та матеріали</Link></li>
        <li><Link to="/projects">Портфоліо</Link></li>
        <li><Link to="/contact">Контакти</Link></li>
        <li><Link to="/form">Замовити</Link></li>

      </ul>
    </nav>
  </div>
</header>
        </>
     );
}
 
export default MobileHeader;