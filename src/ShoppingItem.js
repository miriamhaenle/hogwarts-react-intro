import styled from 'styled-components';

export default function ShoppingItem({ title, isDone, onToggleCheckbox }) {
  return (
    <label>
      <Checkbox
        type="checkbox"
        checked={isDone}
        onChange={onToggleCheckbox}
        className="checkbox"
      />

      {title}
    </label>
  );
}

const Checkbox = styled.input`
  margin-right: 0.8rem;
`;
