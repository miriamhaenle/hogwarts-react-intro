import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function ShoppingItem({
  title,
  isDone,
  onToggleCheckbox,
  onDeleteItem,
}) {
  return (
    <ListItem>
      <label>
        <Checkbox
          type="checkbox"
          checked={isDone}
          onChange={onToggleCheckbox}
          className="checkbox"
        />
        {title}
      </label>
      <DeleteIcon onClick={onDeleteItem}>X</DeleteIcon>
    </ListItem>
  );
}

ShoppingItem.propTypes = {
  title: PropTypes.string,
  isDone: PropTypes.bool,
  onToggleCheckbox: PropTypes.func,
};

const ListItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const Checkbox = styled.input`
  margin-right: 0.8rem;
  transform: scale(1.5);
`;

const DeleteIcon = styled.span`
  color: #9c1203;
  margin-left: 0.8rem;
`;
