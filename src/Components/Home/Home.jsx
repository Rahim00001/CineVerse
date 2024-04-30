import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Home = () => {
    return (
        <div>
            <Movies></Movies>
            <ScrollToTop></ScrollToTop>
            <Footer></Footer>
        </div>
    );
};

export default Home;