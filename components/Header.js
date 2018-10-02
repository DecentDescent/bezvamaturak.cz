export default class extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo" />
        <ul className="header__navigation" role="menubar">
          <li>
            <a role="menuitem" href="#nabidka">
              Nabídka
            </a>
          </li>
          <li>
            <a role="menuitem" href="#o-nas">
              O nás
            </a>
          </li>
          <li>
            <a role="menuitem" href="#reference">
              Reference
            </a>
          </li>
          <li>
            <a role="menuitem" href="#kontakt">
              Kontakt
            </a>
          </li>
          <li className="cai">
            <a role="menuitem" href="#">
              Objednat
            </a>
          </li>
        </ul>
      </header>
    );
  }
}
