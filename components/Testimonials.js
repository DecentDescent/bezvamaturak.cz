export default class Testimonials extends React.Component {
  carouselHandler() {
    let slidesCount = document.getElementsByClassName(
      "testimonials-carousel__item"
    ).length;
    /* nextSlide() {
      if(nextSlideID > slidesCount) {
        nextSlideID = 0;
      } else {
        nextSlideID = activeSlideID + 1;
      }
    }

    prevSlide() {
      if(prevSlideID < 0) {
        prevSlideID = slidesCount;
      } else {
        prevSlideID = activeSlideID - 1;
      }
    } */
  }

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
              <div className="testimonials-carousel__item testimonials-carousel__item--active">
                <p>
                  „Bezva maturák je parta super lidí, kteří jsou nejlepší ve
                  svých oborech. Připraví Vám nezapomenutelný večer, kde se
                  nebude nikdo nudit a zaslouží si veliké poděkování!”
                </p>
                <small>— Michal Albi</small>
              </div>
              <div className="testimonials-carousel__item">
                <p>
                  „Ne nadarmo se to jmenuje Bezva Maturák. Skvěle odvedená
                  práce, prostě výborný!”
                </p>
                <small>— Marek Svatoň</small>
              </div>
              <div className="testimonials-carousel__item">
                <p>
                  „Skvelá organizace, se vším jsme byli naprosto spokojení.
                  Doporučuju všem!”
                </p>
                <small>— Petr Fogl</small>
              </div>
              <div className="testimonials-carousel__item">
                <p>
                  „Děkujeme za pomoc se vším zařízováním a hlavně za pozitivní
                  přístup!”
                </p>
                <small>— Lenka Khrystonko</small>
              </div>
            </div>
          </div>
          <a href="#" className="testimonials-nav testimonials-nav--left">
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
          <a href="#" className="testimonials-nav testimonials-nav--right">
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
