import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Button({ text, clickHandler }) {
  return <ButtonStyled onClick={clickHandler}>{text}</ButtonStyled>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};

const ButtonStyled = styled.button`
  background: #2d004d;
  border: none;
  border-radius: 4px;
  color: ivory;
  font-size: 1.2rem;
  margin: 1rem 0;
  padding: 0.5rem 8rem;
  transition: background 0.5s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    background: rebeccapurple;
    box-shadow: 3px 3px 10px rgba(45, 0, 77, 0.5);
    cursor: pointer;
  }
`;
