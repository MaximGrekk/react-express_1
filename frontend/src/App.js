import React, {useState, useEffect} from 'react';
// import ReactDOM from 'react-dom';
import ToDoForm from './components/ToDoForm'

const styles = {
  title: {
    textAlign: "center",
    paddingTop: "1.5em",

  }
}

function App() {

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api')
    .then(res => res.json())
    .then(res => setData(res.todos[2].title))
  }, [])

  return (
    <>
      <h1 style={styles.title}>To Do List</h1>
      <ToDoForm name="Artem"/>
      <p className="text-center py-2">
        {
          !data ? "Loading..." : data
        }
      </p>
    </>
  );
}

export default App;
