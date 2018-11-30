export default class Contact extends React.Component {
  render() {
    return (
      <section className="section section--dark section--contact" id="kontakt">
        <div className="section__content section__content--left">
          <div className="container">
            <h1>Kontakt</h1>
            <div className="divider-horizontal" />
            <p>
              <strong>
                info@bezvamaturak.cz
                <br />
                +420 777 951 118
              </strong>
            </p>
            <p>
              V případě dotazů nebo objednávek nás kontaktujte na emailu,
              telefonu, nebo využijte náš kontaktní formulář.
            </p>
            <div className="divider-vertical" />
            <a className="btn" href="#">
              Mám dotaz
            </a>
            <small>
              Bezva maturák s.r.o., IČ: 07031572, Chlumova 206/21, 130 00 Praha
              3
            </small>
          </div>
        </div>
      </section>
    );
  }
}
