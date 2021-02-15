import './App.css';
import Headline from './Headline';
import Form from './Form';
import ShoppingList from './ShoppingList';

function App() {
  const shoppingItems = [
    { title: 'Hat', isDone: false },
    { title: 'Butter Beer', isDone: false },
    { title: 'Nimbus 2022', isDone: false },
    { title: 'The Daily Prophet', isDone: false },
  ];

  function getTitle(name) {
    return name + '`s Shopping List';
  }
  return (
    <div className="App">
      <Headline name={getTitle('Harry')} />
      <Form buttonText="Add to list" />
      <ShoppingList shoppingList={shoppingItems} />
    </div>
  );
}

export default App;
