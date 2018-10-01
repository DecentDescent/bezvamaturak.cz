import "../styles/styles.scss";
import Head from "../components/Head";
import Hero from "../components/Hero";
import Offer from "../components/Offer";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
export default class extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <Offer />
        <About />
        <Testimonials />
        <Contact />
      </div>
    );
  }
}
