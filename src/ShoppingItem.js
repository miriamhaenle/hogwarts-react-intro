export default function ShoppingItem({ title, isDone }) {
  return (
    <section>
      <input type="checkbox" checked={isDone} />
      {title}
    </section>
  );
}
