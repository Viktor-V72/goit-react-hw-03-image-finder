import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryitem/ImageGalleryItem';

const ImageGallery = ({ images }) => (
  <ul className={styles.ImageGallery}>
    {images.map(({ webformatURL, id }) => (
      <ImageGalleryItem key={id} webUrl={webformatURL} />
    ))}
  </ul>
);

export default ImageGallery;
// webUrl={webUrl} title={title}
