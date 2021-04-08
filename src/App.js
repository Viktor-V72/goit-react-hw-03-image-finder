import { Component } from 'react';
import Container from './Components/Container/Container';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Searchbar from './Components/Searchbar/Searchbar';
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
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
    });
  };

  fetchImages = () => {
    return axios
      .get(
        `https://pixabay.com/api/?key=${api_key}&q=${this.state.searchQuery}`,
      )
      .then(response => {
        this.setState({
          images: [...response.data.hits],
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    console.log(this.state.images);
    return (
      <Container>
        <Searchbar onSearch={this.onChangeQuery} />
        <ImageGallery images={this.state.images} />
      </Container>
    );
  }
}

export default App;
