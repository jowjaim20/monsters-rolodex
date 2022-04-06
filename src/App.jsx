import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const filteredMonster = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );
  useEffect(() => {
    const getMonsters = async () => {
      const monstersFromServer = await fetchMonsters();
      setMonsters(monstersFromServer);
    };
    getMonsters();
  }, []);

  //fetch monsters
  const fetchMonsters = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
  };
  //onchange search monster function
  const searchFieldUpdate = (e) => setSearchField(e.target.value);

  /*-------------------------*/
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder={"Search monsters"} onChange={searchFieldUpdate} />
      <CardList monsters={filteredMonster} />
    </div>
  );
}

export default App;
