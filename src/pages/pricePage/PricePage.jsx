import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./price.module.scss";
import MaterialTable from "../../components/materialTable/MaterialTable";
import SlsMaterialTable from "../../components/materialTable/SlsMaterialTable";
import MaterialCard from "../../components/materialCard/MaterialCard";

const PricePage = () => {
  return (
    <>
      <div className={styles.pricePage}>
        <Header />
        <main className={styles.main}>
          <div className="container">
            <h1 className={styles.mainTitle}>ціни та матеріали</h1>
            <h4 className={styles.subTitle}>3D друк, FDM технологія</h4>
            <p className={styles.subTitleDesc}>
              FDM (Fused Deposition Modeling) — популярна технологія 3D-друку,
              яка створює об'єкти шляхом екструзії розплавленого термопластика
              пошарово. Вона відзначається простотою, доступністю та широкими
              можливостями застосування.
            </p>
            <MaterialTable />
            <h4 className={styles.subTitle}>3D друк, SLS технологія</h4>
            <p className={styles.subTitleDesc}>
              SLS (Selective Laser Sintering) — технологія 3Dдруку, що
              використовує лазер для спікання порошкових матеріалів пошарово.
              Вона забезпечує високу точність, міцність деталей і дозволяє
              створювати складні геометричні форми без додаткових підтримок.
            </p>
            <SlsMaterialTable/>

            <h3 className={styles.areas}>Матеріали</h3>
            <div className={styles.materialsWrapper}>
              <MaterialCard reverse={false}/>
              <MaterialCard  reverse={true}/>
              <MaterialCard  reverse={false}/>
              <MaterialCard  reverse={true}/>
              <MaterialCard reverse={false}/>
              <MaterialCard  reverse={true}/>
              <MaterialCard  reverse={false}/>
              <MaterialCard  reverse={true}/>
              <MaterialCard reverse={false}/>
              <MaterialCard  reverse={true}/>
              <MaterialCard  reverse={false}/>
              <MaterialCard  reverse={true}/>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PricePage;
