const testimonialsData = [
  {
    text:
      "Bezva maturák je parta super lidí, kteří jsou nejlepší ve svých oborech. Připraví Vám nezapomenutelný večer, kde se nebude nikdo nudit a zaslouží si veliké poděkování!",
    name: "Michal Albi"
  },
  {
    text:
      "Ne nadarmo se to jmenuje Bezva Maturák. Skvěle odvedená práce, prostě výborný!",
    name: "Marek Svatoň"
  },
  {
    text:
      "Skvelá organizace, se vším jsme byli naprosto spokojení. Doporučuju všem!",
    name: "Petr Fogl"
  },
  {
    text:
      "Děkujeme za pomoc se vším zařízováním a hlavně za pozitivní přístup!",
    name: "Lenka Khrystonko"
  }
];

export default class Testimonials extends React.Component {
  state = {
    activeSlide: 0
  };

  carouselHandler = param => {
    let slides = document.getElementsByClassName("testimonials-carousel__item");
    let slidesCount = slides.length;

    if (param === "next") {
      let nextSlideID = this.state.activeSlide + 1;

      if (nextSlideID > slidesCount - 1) {
        this.setState({
          activeSlide: 0
        });
      } else {
        this.setState({
          activeSlide: nextSlideID
        });
      }
    }

    if (param === "prev") {
      let prevSlideID = this.state.activeSlide - 1;

      if (prevSlideID < 0) {
        this.setState({
          activeSlide: slidesCount - 1
        });
      } else {
        this.setState({
          activeSlide: prevSlideID
        });
      }
    }

    for (var i = 0; i < slidesCount; i++) {
      slides[i].classList.remove("testimonials-carousel__item--active");
    }

    slides[this.state.activeSlide].classList.add(
      "testimonials-carousel__item--active"
    );
  };

  componentDidMount() {
    this.carouselHandler();
  }

  render() {
    return (
      <section
        className="section section--light section--testimonials"
        id="reference"
      >
        <div className="section__content">
          <div className="container">
            <h1>Reference</h1>
            <div className="divider-horizontal" />
            <div className="testimonials-carousel">
              {testimonialsData.map((testimonial, index) => {
                return (
                  <div
                    className="testimonials-carousel__item"
                    key={index}
                    id={"slide-" + index}
                  >
                    <p>„{testimonial.text}”</p>
                    <small>— {testimonial.name}</small>
                  </div>
                );
              })}
            </div>
          </div>
          <a
            onClick={() => this.carouselHandler("prev")}
            className="testimonials-nav testimonials-nav--left"
          >
            <svg viewBox="0 0 32.635 32.635">
              <path
                d="M32.135,16.817H0.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h31.635c0.276,0,0.5,0.224,0.5,0.5	
		S32.411,16.817,32.135,16.817z"
              />
              <path
                d="M19.598,29.353c-0.128,0-0.256-0.049-0.354-0.146c-0.195-0.195-0.195-0.512,0-0.707l12.184-12.184L19.244,4.136
		c-0.195-0.195-0.195-0.512,0-0.707s0.512-0.195,0.707,0l12.537,12.533c0.094,0.094,0.146,0.221,0.146,0.354
		s-0.053,0.26-0.146,0.354L19.951,29.206C19.854,29.304,19.726,29.353,19.598,29.353z"
              />
            </svg>
          </a>
          <a
            onClick={() => this.carouselHandler("next")}
            className="testimonials-nav testimonials-nav--right"
          >
            <svg viewBox="0 0 32.635 32.635">
              <path
                d="M32.135,16.817H0.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h31.635c0.276,0,0.5,0.224,0.5,0.5	
		S32.411,16.817,32.135,16.817z"
              />
              <path
                d="M19.598,29.353c-0.128,0-0.256-0.049-0.354-0.146c-0.195-0.195-0.195-0.512,0-0.707l12.184-12.184L19.244,4.136
		c-0.195-0.195-0.195-0.512,0-0.707s0.512-0.195,0.707,0l12.537,12.533c0.094,0.094,0.146,0.221,0.146,0.354
		s-0.053,0.26-0.146,0.354L19.951,29.206C19.854,29.304,19.726,29.353,19.598,29.353z"
              />
            </svg>
          </a>
        </div>
      </section>
    );
  }
}
