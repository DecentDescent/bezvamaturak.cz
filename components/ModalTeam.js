export default class ModalTeam extends React.Component {
  render() {
    return (
      <div>
        <div className="modal__overlay">
          <div className="modal__close" onClick={this.props.closeModalHandler}>
            <svg viewBox="0 0 31.112 31.112">
              <polygon
                points="31.112,1.414 29.698,0 15.556,14.142 1.414,0 0,1.414 14.142,15.556 0,29.698 1.414,31.112 15.556,16.97 
	29.698,31.112 31.112,29.698 16.97,15.556 "
              />
            </svg>
          </div>
          <div className="modal">
            <h1>Náš tým</h1>
            <div className="team">
              <div className="team__member">
                <div className="team__member-avatar team__member-avatar--adela" />
                <h2>Bc. Adéla Marková</h2>
                <p>
                  jednatelka Bezva Maturáku
                  <br />
                  +420 777 951 118
                </p>
              </div>
              <div className="team__member">
                <div className="team__member-avatar team__member-avatar--katerina" />
                <h2>Ing. Kateřina Kohoutová</h2>
                <p>
                  koordinátorka a organizátorka plesů
                  <br />
                  +420 737 177 846
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
