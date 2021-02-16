import ShoppingItem from './ShoppingItem';

export default function ShoppingList({ shoppingList, onToggleCheckbox }) {
  return (
    <section>
      {shoppingList.map(({ title, isDone }, index) => (
        <ShoppingItem
          title={title}
          isDone={isDone}
          onToggleCheckbox={() => onToggleCheckbox(index)}
        />
      ))}
    </section>
  );
}
