import "../styles/styles.scss";
import Head from "../components/Head";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Offerings from "../components/Offerings";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

import ModalPromo from "../components/ModalPromo";
import ModalTeam from "../components/ModalTeam";
import ModalOffering from "../components/ModalOffering";
import ModalContact from "../components/ModalContact";

export default class extends React.Component {
  state = {
    navOpened: false,
    modalPromo: false,
    modalTeam: false,
    modalOffering: false,
    modalContact: false,
    offeringTitle: "",
    offeringContent: ""
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

    if (scrollTop < 10) {
      header.classList.remove("header--light");
      header.classList.remove("header--dark");
    } else if (scrollTop >= 10 && scrollTop < heroElementHeight) {
      header.classList.remove("header--light");
      header.classList.add("header--dark");
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

  modalHandler = (modalID, params) => {
    this.setState({
      [modalID]: true
    });
    if (params) {
      this.setState({
        offeringTitle: params.offering.title,
        offeringContent: params.offering.content
      });
    }
    document.body.classList.add("modal--active");
  };

  closeModalHandler = () => {
    this.setState({
      modalPromo: false,
      modalTeam: false,
      modalOffering: false,
      modalContact: false
    });
    document.body.classList.remove("modal--active");
  };

  escFunction = event => {
    if (event.keyCode === 27) {
      this.closeModalHandler();
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("keydown", this.escFunction, false);
    this.handleScroll();
  }
  render() {
    let modalPromoElement;
    let modalTeamElement;
    let modalOfferingElement;
    let modalContactElement;

    if (this.state.modalPromo) {
      modalPromoElement = (
        <ModalPromo closeModalHandler={this.closeModalHandler} />
      );
    }
    if (this.state.modalTeam) {
      modalTeamElement = (
        <ModalTeam closeModalHandler={this.closeModalHandler} />
      );
    }
    if (this.state.modalOffering) {
      modalOfferingElement = (
        <ModalOffering
          closeModalHandler={this.closeModalHandler}
          offeringTitle={this.state.offeringTitle}
          offeringContent={this.state.offeringContent}
        />
      );
    }
    if (this.state.modalContact) {
      modalContactElement = (
        <ModalContact closeModalHandler={this.closeModalHandler} />
      );
    }

    return (
      <div>
        {/*
        <Preloader />
        */}
        <Head />
        <Header handleNav={this.handleNav} handleNavItem={this.handleNavItem} />
        <Hero modalHandler={this.modalHandler} />
        <Offerings modalHandler={this.modalHandler} />
        <About modalHandler={this.modalHandler} />
        <Testimonials />
        <Contact modalHandler={this.modalHandler} />
        {modalPromoElement}
        {modalTeamElement}
        {modalOfferingElement}
        {modalContactElement}
      </div>
    );
  }
}
