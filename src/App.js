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

  const [openShoppingItems, setOpenShoppingItems] = useState([]);

  useEffect(() => {
    saveToLocal(STORAGE_KEY, shoppingItems);
  }, [shoppingItems]);

  function addShoppingItem(item) {
    const shoppingItem = { title: item, isDone: false, id: uuidv4() };
    setShoppingItems([...shoppingItems, shoppingItem]);
    setOpenShoppingItems([...openShoppingItems, shoppingItem]);
  }

  function toggleCheckbox(idToToggle) {
    const itemsWithToggle = shoppingItems.map((item) => {
      if (item.id === idToToggle) {
        item.isDone = !item.isDone;
      }
      return item;
    });

    setShoppingItems(itemsWithToggle);
    openShoppingItems.length > 0 && showOpenItems();
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

  function showOpenItems() {
    const openItems = shoppingItems.filter((item) => !item.isDone);
    setOpenShoppingItems(openItems);
  }
  const itemsToShow =
    openShoppingItems.length > 0 ? openShoppingItems : shoppingItems;

  return (
    <Wrapper>
      <Headline name="Hermine's Shopping List" />
      <Form
        headline="What I need to buy"
        onCreateShoppingItem={addShoppingItem}
      />
      {shoppingItems.length > 0 && (
        <Button
          text="Clear"
          clickHandler={deleteAll}
          color="var(--hufflepuff)"
        />
      )}
      <Filter>
        <Button
          text="Show all"
          color="white"
          outlined={openShoppingItems.length === 0}
          clickHandler={() => setOpenShoppingItems([])}
        />
        <Button
          text="Show open items"
          color="white"
          outlined={openShoppingItems.length > 0}
          clickHandler={showOpenItems}
        />
      </Filter>
      <ShoppingList
        shoppingList={itemsToShow}
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

const Filter = styled.div`
  display: flex;
  justify-content: space-evenly;

  Button {
    width: 50%;
    color: #1b002e;
    border-bottom: 2px solid #1b002e;
    border-radius: 0 0 4px 0;
  }
`;
