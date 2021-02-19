import { useState } from 'react';
import './App.css';
import Headline from './Headline';
import Form from './Form';
import ShoppingList from './ShoppingList';

function App() {
  const [shoppingItems, setShoppingItems] = useState([]);

  function addShoppingItem(item) {
    const shoppingItem = { title: item, isDone: false };
    setShoppingItems([...shoppingItems, shoppingItem]);
  }

  function toggleCheckbox(indexToToggle) {
    const itemToToggle = shoppingItems.find(
      (item, index) => index === indexToToggle
    );
    itemToToggle.isDone = !itemToToggle.isDone;
    const firstHalf = shoppingItems.slice(0, indexToToggle);
    const secondHalf = shoppingItems.slice(indexToToggle + 1);

    setShoppingItems([...firstHalf, itemToToggle, ...secondHalf]);
  }

  return (
    <div className="App">
      <Headline title="Hogwarts shopping list" />
      <Form buttonText="Add to list" onCreateShoppingItem={addShoppingItem} />
      <ShoppingList
        shoppingList={shoppingItems}
        onToggleCheckbox={toggleCheckbox}
      />
      <Form buttonText={() => console.log('hi')} onCreateShoppingItem="Hi" />
    </div>
  );
}

export default App;
