import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webUrl, title }) => (
  <li className={styles.ImageGalleryItem}>
    <img src={webUrl} alt="" className={styles.ImageGalleryItem_image} />
  </li>
);

export default ImageGalleryItem;
