import React, { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscKeydown);
  }

  onEscKeydown = event => event.code === 'Escape' && this.props.toggleModal();

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscKeydown);
  }

  onOverlayClick = event => event.target === event.currentTarget && this.props.toggleModal();

  render() {
    return (
      <div className="Overlay" onClick={this.onOverlayClick}>
        <div className="Modal">
          <img src={this.props.largeImage} alt={this.props.imageAlt} />
        </div>
      </div>
    );
  }
}

export default Modal;
