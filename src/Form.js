import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

export default function Form({ onCreateShoppingItem, headline }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    if (input.value.length >= 1) {
      onCreateShoppingItem(input.value);
      form.reset();

      input.focus();
    }
  }

  return (
    <FormWrapper className="form" onSubmit={handleSubmit}>
      <h2>{headline}</h2>
      <input
        name="item"
        className="input"
        type="text"
        placeholder="What do I need for Hogwarts"
      />
      <Button text="Add" />
    </FormWrapper>
  );
}

Form.propTypes = {
  onCreateShoppingItem: PropTypes.func,
  headline: PropTypes.string,
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    color: #00165e;
  }
  input {
    padding: 0.4rem;
  }
`;
