import ShoppingItem from './ShoppingItem';

export default function ShoppingList({ shoppingList }) {
  return (
    <ul>
      {shoppingList.map(({ title, isDone }) => (
        <ShoppingItem title={title} isDone={isDone} />
      ))}
    </ul>
  );
}
