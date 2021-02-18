import { useState, useEffect } from 'react';
import Headline from './Headline';
import Form from './Form';
import ShoppingList from './ShoppingList';
import loadFromLocal from './lib/loadFromLocal';
import saveToLocal from './lib/saveToLocal';

function App() {
  const STORAGE_KEY = 'shoppingList';
  const [shoppingItems, setShoppingItems] = useState(
    loadFromLocal(STORAGE_KEY) ?? []
  );

  useEffect(() => {
    saveToLocal(STORAGE_KEY, shoppingItems);
  }, [shoppingItems]);

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

  function getTitle(name) {
    return name + '`s Shopping List';
  }
  return (
    <div className="App">
      <Headline title={getTitle('Harry')} />
      <Form buttonText="Add to list" onCreateShoppingItem={addShoppingItem} />
      <ShoppingList
        shoppingList={shoppingItems}
        onToggleCheckbox={toggleCheckbox}
      />
    </div>
  );
}

export default App;
