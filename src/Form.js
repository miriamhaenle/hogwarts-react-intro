import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

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
    <Wrapper onSubmit={handleSubmit}>
      <h2>Add shopping item</h2>
      <input
        name="item"
        type="text"
        placeholder="What do I need for Hogwarts"
      />
      <Button text={buttonText} />
    </Wrapper>
  );
}

Form.propTypes = {
  buttonText: PropTypes.string,
  onCreateShoppingItem: PropTypes.func,
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    color: #00165e;
  }
  input {
    padding: 0.3rem;
  }
`;
