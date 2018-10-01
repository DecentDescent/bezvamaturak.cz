export default class extends React.Component {
  render() {
    return (
      <section className="section section--light">
        <div className="section__content">
          <h1>Co nabízíme</h1>
          <p>
            Nabízíme kompletní služby pro Váš maturitní ples. Pomocí našeho
            poptávkového průvodce si můžete vytvořit balíček šitý přímo Vám na
            míru!
          </p>
          <ul className="offer">
            <li>
              <div className="offer__avatar" />
              <div className="offer__label">Organizace plesu</div>
            </li>
            <li>
              <div className="offer__avatar" />
              <div className="offer__label">Maturitní choreografie</div>
            </li>
            <li>
              <div className="offer__avatar" />
              <div className="offer__label">Kapela</div>
            </li>
            <li>
              <div className="offer__avatar" />
              <div className="offer__label">Foto &amp; Video</div>
            </li>
            <li>
              <div className="offer__avatar" />
              <div className="offer__label">
                Grafické práce
                <br />
                &amp; Tisk
              </div>
            </li>
            <li>
              <div className="offer__avatar" />
              <div className="offer__label">Moderátor</div>
            </li>
            <li>
              <div className="offer__avatar" />
              <div className="offer__label">Maturitní šerpy</div>
            </li>
            <li>
              <div className="offer__avatar" />
              <div className="offer__label">
                Dárky
                <br />
                do tomboly
              </div>
            </li>
            <li>
              <div className="offer__avatar" />
              <div className="offer__label">Výzdoba plesu</div>
            </li>
            <li>
              <div className="offer__avatar" />
              <div className="offer__label">Společenské šaty</div>
            </li>
            <li>
              <div className="offer__avatar" />
              <div className="offer__label">Ozvučení</div>
            </li>
            <li>
              <div className="offer__avatar" />
              <div className="offer__label">Osvětlení</div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
