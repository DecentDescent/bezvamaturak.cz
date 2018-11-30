import "../styles/styles.scss";
import Head from "../components/Head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Offerings from "../components/Offerings";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import VideoModal from "../components/VideoModal";
export default class extends React.Component {
  state = {
    modalActive: false
  };

  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Offerings />
        <About />
        <Testimonials />
        <Contact />
        {/*<VideoModal />*/}
      </div>
    );
  }
}
