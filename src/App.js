import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import Headline from './Headline';
import Form from './Form';
import ShoppingList from './ShoppingList';
import Button from './Button';
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
    const shoppingItem = { title: item, isDone: false, id: uuidv4() };
    setShoppingItems([...shoppingItems, shoppingItem]);
  }

  function toggleCheckbox(idToToggle) {
    const itemsWithToggle = shoppingItems.map((item) => {
      if (item.id === idToToggle) {
        item.isDone = !item.isDone;
      }
      return item;
    });

    setShoppingItems(itemsWithToggle);
  }

  function deleteItem(idToDelete) {
    const remainingShoppingItems = shoppingItems.filter(
      (item) => item.id !== idToDelete
    );
    setShoppingItems(remainingShoppingItems);
  }

  function deleteAll() {
    setShoppingItems([]);
  }
  return (
    <Wrapper>
      <Headline name="Hermine's Shopping List" />
      <Form
        headline="What I need to buy"
        onCreateShoppingItem={addShoppingItem}
      />
      {shoppingItems.length >= 1 && (
        <Button
          text="Clear"
          clickHandler={deleteAll}
          color="var(--hufflepuff)"
        />
      )}
      <ShoppingList
        shoppingList={shoppingItems}
        onToggleCheckbox={toggleCheckbox}
        onDeleteItem={deleteItem}
      />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
