import "./App.css";
import BlogPage from "./components/BlogPage/BlogPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import IntroMenu from "./components/IntroMenu/IntroMenu";

function App() {
  return (
    <div className="mainContainer">
      <Header />
      <div className="contentContainer">
        <BlogPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
