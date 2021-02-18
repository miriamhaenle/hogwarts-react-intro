import ShoppingItem from './ShoppingItem';
import styled from 'styled-components';

export default function ShoppingList({
  shoppingList,
  onToggleCheckbox,
  onDeleteItem,
}) {
  return (
    <ListWrapper>
      {shoppingList.map(({ title, isDone, id }) => (
        <ShoppingItem
          key={id}
          title={title}
          isDone={isDone}
          onToggleCheckbox={() => onToggleCheckbox(id)}
          onDeleteItem={() => onDeleteItem(id)}
        />
      ))}
    </ListWrapper>
  );
}

const ListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 0.5rem;
`;
