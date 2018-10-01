export default class extends React.Component {
  render() {
    return (
      <section className="section section--color section--purple">
        <div className="section__content">
          <h1>Kontakt</h1>
          <p>
            info@bezvamaturak.cz
            <br />
            +420 777 951 118
          </p>
          <ul className="social">
            <li>
              <a href="#" target="_blank" />
            </li>
            <li>
              <a href="#" target="_blank" />
            </li>
            <li>
              <a href="#" target="_blank" />
            </li>
          </ul>
          <p>
            Bezva maturák s.r.o.
            <br />
            IČO: 07031572, sídlem Praha - Žižkov, Chlumova 206/21, PSČ 130 00
          </p>
          <footer>
            <p>2018 &copy; Bezva Maturák s.r.o.</p>
          </footer>
        </div>
      </section>
    );
  }
}
