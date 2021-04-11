import LoaderReact from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.spinner}>
    <LoaderReact type="Puff" color="#00BFFF" height={100} width={100} />
  </div>
);

export default Loader;
