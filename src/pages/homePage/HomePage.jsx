import Advantage from "../../components/advantage/Advantage";
import Areas from "../../components/areas/Areas";
import Footer from "../../components/footer/Footer";
import MainBanner from "../../components/mainBanner/MainBanner";
import Projects from "../../components/projects/Projects";

const HomePage = () => {
    return ( 
        <>  
            <MainBanner/>
            <Advantage/>
            <Areas/>
            <Projects/>
            <Footer/>
        </>
     );
}
 
export default HomePage;