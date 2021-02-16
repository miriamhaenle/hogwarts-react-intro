import PropTypes from 'prop-types';

import Button from './Button';

import './Form.css';

export default function Form({ buttonText, onCreateShoppingItem }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    onCreateShoppingItem(input.value);
    form.reset();
    input.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form__headline">Add shopping item</h2>
      <input
        name="item"
        className="input"
        type="text"
        placeholder="What do I need for Hogwarts"
      />
      <Button text={buttonText} />
      <Button />
    </form>
  );
}

Form.propTypes = {
  buttonText: PropTypes.string,
  onCreateShoppingItem: PropTypes.func,
};
