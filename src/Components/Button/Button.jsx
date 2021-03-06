import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onClick }) => (
  <button onClick={onClick} className={styles.Button} type="button">
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
