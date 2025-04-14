import Gallery from './components/Gallery';

function App() {
  const list = ['juan', 'pedro', 'maria'];
  const listItem = list.map((letter) => (
    <>
      <li>
        <b>{letter}</b>
      </li>
    </>
  ));

  return (
    <>
      <h1>Hola Mundo</h1>
      <ul>{listItem}</ul>
    </>
  );
}

export default App;
