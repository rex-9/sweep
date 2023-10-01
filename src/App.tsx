import CharacterList from "./components/CharacterList";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CharacterList />
    </>
  );
}

export default App;
