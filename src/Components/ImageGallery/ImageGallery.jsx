import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryitem/ImageGalleryItem';

const ImageGallery = ({ images, onClickImg }) => (
  <ul className={styles.ImageGallery}>
    {images.map(({ webformatURL, id, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        webUrl={webformatURL}
        onClickImg={onClickImg}
        largeImageURL={largeImageURL}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ),
  onClickImg: PropTypes.func.isRequired,
};

export default ImageGallery;
// webUrl={webUrl} title={title}
