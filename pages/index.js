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
    modalActive: false,
    navOpened: false
  };

  handleScroll() {
    var header = document.getElementById("header");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    var heroElement = document.getElementById("vitejte");
    var darkElement1 = document.getElementById("o-nas");
    var darkElement2 = document.getElementById("kontakt");
    var heroElementHeight = parseInt(heroElement.clientHeight);
    var darkElement1Height = parseInt(darkElement1.clientHeight);
    var darkElement1Offset = parseInt(darkElement1.offsetTop);
    var darkElement2Height = parseInt(darkElement2.clientHeight);
    var darkElement2Offset = parseInt(darkElement2.offsetTop);
    /*
    if (
      (scrollTop >= darkElement1Offset - 125 &&
        scrollTop < darkElement1Offset + darkElement1Height) ||
      (scrollTop >= darkElement2Offset - 125 &&
        scrollTop < darkElement2Offset + darkElement2Height)
    ) {
      header.classList.remove("header--light");
      header.classList.add("header--dark");
    } else if (scrollTop === 0 && scrollTop <= heroElementHeight) {
      header.classList.remove("header--light");
      header.classList.remove("header--dark");
    } else {
      header.classList.add("header--light");
      header.classList.remove("header--dark");
    }*/

    if (scrollTop < heroElementHeight) {
      header.classList.remove("header--light");
      header.classList.remove("header--dark");
    } else if (
      (scrollTop >= darkElement1Offset &&
        scrollTop < darkElement1Offset + darkElement1Height) ||
      (scrollTop >= darkElement2Offset &&
        scrollTop < darkElement2Offset + darkElement2Height)
    ) {
      header.classList.remove("header--light");
      header.classList.add("header--dark");
    } else {
      header.classList.add("header--light");
      header.classList.remove("header--dark");
    }
  }

  handleNav = () => {
    this.setState({
      navOpened: !this.state.navOpened
    });
    if (!this.state.navOpened) {
      document.body.classList.add("nav--opened");
    } else {
      document.body.classList.remove("nav--opened");
    }
  };

  handleNavItem = () => {
    this.setState({
      navOpened: !this.state.navOpened
    });
    document.body.classList.remove("nav--opened");
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  }

  render() {
    return (
      <div>
        <Header handleNav={this.handleNav} handleNavItem={this.handleNavItem} />
        <Hero />
        <Offerings />
        <About />
        <Testimonials />
        <Contact />
      </div>
    );
  }
}
