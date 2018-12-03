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
            Chcete aby Váš ples byl nezapomenutelný a originální? Nechte veškeré
            vyřizování na nás a my Vám připravíme maturák na míru šitý právě
            Vaší třídě, Vašim požadavkům, Vašemu finančnímu rozpočtu!
          </p>
        </div>
        <div className="hero__more">
          <a className="btn btn--reverse" href="#">
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
