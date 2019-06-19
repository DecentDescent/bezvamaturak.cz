export default class About extends React.Component {
  render() {
    return (
      <section className="section section--dark section--about" id="o-nas">
        <div className="section__content section__content--right">
          <div className="container">
            <h1>O nás</h1>
            <div className="divider-horizontal" />
            <p>
              Jsme parta bezva mladých lidí s profesionálními zkušenostmi ve
              svém oboru, se spoustou nápadů a elánem pro práci ve dne i v noci.
              S pořádáním společenských akcí, a především maturitních plesů,
              máme bohaté a dlouholeté zkušenosti. Náš tým se navzájem obohacuje
              o nápady a zkušenosti ze svých oborů, a tak jsme schopni odstranit
              veškeré nedostatky, které mohou plesu ubrat na jeho výjimečnosti.
              Děláme práci, která nás baví, naplňuje a nabíjí energií, právě tu
              dáváme zpět každému individuálnímu projektu.
            </p>
            <p>
              Díky tomu jsme vám schopni vytvořit Bezva Maturák přesně podle
              Vašich představ.
            </p>
            <div className="divider-vertical" />
            <a
              className="btn"
              onClick={() => this.props.modalHandler("modalTeam")}
            >
              Náš tým
            </a>
          </div>
        </div>
        <div className="counter">
          <ul>
            <li>
              <span className="counter__number">90</span>
              <span className="counter__label">plesů</span>
            </li>
            <li>
              <span className="counter__number">2 000</span>
              <span className="counter__label">maturantů</span>
            </li>
            <li>
              <span className="counter__number">8</span>
              <span className="counter__label">let praxe</span>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
