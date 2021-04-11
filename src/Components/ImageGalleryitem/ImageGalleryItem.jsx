import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webUrl, onClickImg, largeImageURL }) => (
  <li
    onClick={() => onClickImg(largeImageURL)}
    className={styles.ImageGalleryItem}
  >
    <img src={webUrl} alt="" className={styles.ImageGalleryItem_image} />
  </li>
);

export default ImageGalleryItem;
