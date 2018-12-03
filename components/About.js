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
              svém oboru, se spoustou nápadů a elánem pro práci ve dne v noci. S
              pořádáním společenských akcí včetně maturitních plesů máme bohaté
              a dlouholeté zkušenosti. Každý z nás stojí za službou, bez které
              se na svém maturitním plese neobejdete. Díky tomuto spojení jsme
              schopni Vám vytvořit Bezva Maturák dle Vašich představ.
            </p>
            <p>
              Náš tým se navzájem obohacuje o své nápady a zkušenosti ze svého
              oboru. Díky tomu doplňujeme mezery, které na plesech často
              vznikají kvůli nespolupráci lidí, kteří se na organizaci plesu
              podílejí.
            </p>
            <div className="divider-vertical" />
            <a className="btn" href="#">
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
              <span className="counter__number">2 200</span>
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
