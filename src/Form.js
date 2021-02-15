import Button from './Button';

import './Form.css';

export default function Form({ buttonText }) {
  return (
    <form className="shopping--form">
      <input
        className="input"
        type="text"
        placeholder="What do I need for Hogwarts"
      />
      <Button text={buttonText} />
    </form>
  );
}
