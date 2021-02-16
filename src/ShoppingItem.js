import './ShoppingItem.css';

export default function ShoppingItem({ title, isDone, onToggleCheckbox }) {
  return (
    <label>
      <input
        type="checkbox"
        checked={isDone}
        onChange={onToggleCheckbox}
        className="checkbox"
      />

      {title}
    </label>
  );
}
