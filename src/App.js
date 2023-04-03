
import bg from './images/background.jpeg';
import profilePic from './images/Dinesh.jpg';
import './App.css';
import color from './color.module.css';

function App() {
  const values = [1, 2, 3, 4, 5];
  const valuesList = values.map((el, i) => <li key={i}>{el}</li>);

  const names = ["Dinesh", "Tony"];
  return (
    <>
      <ul>
        {valuesList}
      </ul>

      <ul>
        {names.map((el, i) => {
          return (
            <li key={i}>
              <div>{el}</div>
              <img alt="" src="" />
            </li>
          )
          
        })}
      </ul>
    </>
  );
}

export default App;
