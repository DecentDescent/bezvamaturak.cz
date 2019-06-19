export default class Hero extends React.Component {
  render() {
    return (
      <section className="hero" id="vitejte">
        <div className="hero__overlay" />
        <div className="container">
          <h1>
            Maturitní ples bez starostí
            <br />a podle Vašich představ!
          </h1>
          <p>
            Chcete, aby byl váš ples nezapomenutelný a originální? Nechte
            veškeré starosti na nás a my připravíme maturák na míru šitý vaší
            třídě, požadavkům i finančnímu rozpočtu!
          </p>
        </div>
        <div className="hero__more">
          <a
            className="btn btn--reverse"
            onClick={() => this.props.modalHandler("modalPromo")}
          >
            Promo video
          </a>
          <a className="btn" href="#nabidka">
            Chci vědět více
          </a>
          <div className="divider-vertical" />
        </div>
      </section>
    );
  }
}
