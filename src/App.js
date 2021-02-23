import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pixabayApi from './services/pixabay-api';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import LoaderComponent from './components/Loader/Loader';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    images: [],
    query: '',
    queryPage: 1,
    isLoading: false,
    isModalOpen: false,
    largeImage: '',
    imageAlt: '',
  };

  componentDidUpdate(prevProps, prevState) {
    prevState.query !== this.state.query && this.fetchImages();
  }

  onSearchFormSubmit = searchQuery => {
    searchQuery !== '' && this.setState({ query: searchQuery, queryPage: 1, images: [] });
  };

  fetchImages = () => {
    this.setState({ isLoading: true });

    pixabayApi
      .fetchImages({ query: this.state.query, queryPage: this.state.queryPage })
      .then(backendImages => {
        // console.log(backendImages);
        this.setState(prevState => ({
          images: [...prevState.images, ...backendImages],
          queryPage: prevState.queryPage + 1,
        }));
      })
      .catch(error => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  onImageClick = id => {
    const clickedImage = this.state.images.find(image => image.id === id);

    clickedImage &&
      this.setState({
        largeImage: clickedImage.largeImageURL,
        imageAlt: clickedImage.tags,
        isModalOpen: true,
      });
  };

  toggleModal = () => this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));

  render() {
    const { images, isLoading, isModalOpen, largeImage, imageAlt } = this.state;

    return (
      <React.Fragment>
        <Searchbar onSearchFormSubmit={this.onSearchFormSubmit} />
        <ImageGallery>
          <ImageGalleryItem images={images} onImageClick={this.onImageClick} />
        </ImageGallery>
        {images.length > 0 && !isLoading && <Button fetchImages={this.fetchImages} />}
        {isLoading && <LoaderComponent />}
        {isModalOpen && <Modal largeImage={largeImage} imageAlt={imageAlt} toggleModal={this.toggleModal} />}
      </React.Fragment>
    );
  }
}

App.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  query: PropTypes.string.isRequired,
  queryPage: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  largeImage: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default App;
