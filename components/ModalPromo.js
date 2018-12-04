export default class ModalPromo extends React.Component {
  render() {
    return (
      <div>
        <div className="modal__overlay" id="modal-promo">
          <div className="modal__close" onClick={this.props.closeModalHandler}>
            <svg viewBox="0 0 31.112 31.112">
              <polygon
                points="31.112,1.414 29.698,0 15.556,14.142 1.414,0 0,1.414 14.142,15.556 0,29.698 1.414,31.112 15.556,16.97 
	29.698,31.112 31.112,29.698 16.97,15.556 "
              />
            </svg>
          </div>
          <div className="modal">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/AazDmJxzsr4"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
