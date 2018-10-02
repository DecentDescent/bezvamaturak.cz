export default class extends React.Component {
  render() {
    return (
      <div className={this.props.classes}>
        <div className="dialog__close" onClick={this.props.dialogHandler}>
          <svg viewBox="0 0 371.23 371.23">
            <polygon
              points="371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23 
	185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615 "
            />
          </svg>
        </div>
        <div className="dialog__body">
          <div className="dialog__content">
            <h1>{this.props.title}</h1>
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
}
