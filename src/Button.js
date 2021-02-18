import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Button({ text, clickHandler, color, outlined }) {
  return (
    <MainButton onClick={clickHandler} color={color} outlined={outlined}>
      {text}
    </MainButton>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};

const MainButton = styled.button`
  background: ${(props) => props.color || 'var(--primary)'};
  border: ${(props) => (props.outlined ? '2px solid #1b002e' : 'none')};
  border-radius: 4px;
  color: ${(props) => (props.outlined ? '#1b002e' : 'ivory')};
  font-size: 1rem;
  margin-top: 0.8rem;
  padding: 0.5rem 0.8rem;
  transition: background 0.5s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    background: #1b002e;
    color: ${(props) => props.outlined && 'ivory'};
    box-shadow: 3px 3px 10px rgba(45, 0, 77, 0.5);
    cursor: pointer;
  }
`;
