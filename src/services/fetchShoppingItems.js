export default function fetchShoppingItems() {
  return fetch('https://jsonplaceholder.typicode.com/todos').then((response) =>
    response.json()
  );
}
