import { Component } from 'react';
import Container from './Components/Container/Container';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Searchbar from './Components/Searchbar/Searchbar';
import Button from './Components/Button/Button';
import Loader from './Components/Loader/Loader';
import Modal from './Components/Modal/Modal';
import axios from 'axios';
import './styles.css';

const api_key = '21068553-23cbacf626666d0c6324738ef';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    largeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
    });
  };

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;

    this.setState({ isLoading: true });

    return axios
      .get(
        `https://pixabay.com/api/?key=${api_key}&q=${searchQuery}&per_page=12&page=${currentPage}`,
      )
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        if (this.state.currentPage > 2) {
          window.scrollTo({
            top: document.documentElement.offsetHeight,
            behavior: 'smooth',
          });
        }

        this.setState({
          isLoading: false,
        });
      });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  openModal = largeURL => {
    this.setState({
      largeImage: largeURL,
      showModal: true,
    });
  };

  render() {
    return (
      <Container>
        {this.state.showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImage={this.state.largeImage}
          />
        )}
        <Searchbar onSearch={this.onChangeQuery} />
        <ImageGallery images={this.state.images} onClickImg={this.openModal} />
        {this.state.images.length > 0 && !this.state.isLoading && (
          <Button onClick={this.fetchImages} />
        )}
        {this.state.isLoading && <Loader />}
      </Container>
    );
  }
}

export default App;
