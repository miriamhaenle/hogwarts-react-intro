import PropTypes from 'prop-types';
import './Button.css';

export default function Button({ text }) {
  return <button className="button">{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
