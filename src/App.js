
// import bg from './images/background.jpeg';
// import profilePic from './images/Dinesh.jpg';
import { useState } from 'react';
import './App.css';
// import color from './color.module.css';
// import './styles.scss';

// import TestClass from './classComp';

// import Header from './practices/classHeader';
// import Products from './classProducts';
// import Main from './practices/classMain';
// import Footer from './practices/classFooter';
// import FormClass from './practices/classForm';

import HeaderFunc from './practices/fnHeader';
import MainFunc from './practices/fnMain';
import FooterFunc from './practices/fnFooter';

// import ClassCycle from './practices/classCycles';
// import FuncHooks, { FuncUseMemo } from './practices/fnHooks';

// import FuncPropType from './practices/fnPropTypes';

import FuncHOC from './practices/fnHOC';

import ErrorBoundary from './practices/classError';
import TestClass from './practices/classComp';

// function App() {
//   const values = [1, 2, 3, 4, 5];
//   const valuesList = values.map((el, i) => <li key={i}>{el}</li>);

//   const names = ["Dinesh", "Tony"];
//   return (
//     <>
//       <ul className='clsDiv'>
//         {valuesList}
//       </ul>

//       <ul>
//         {names.map((el, i) => {
//           return (
//             <li key={i}>
//               <div>{el}</div>
//               <img alt="" src="" />
//             </li>
//           )
          
//         })}
//       </ul>
//     </>
//   );
// }

function App() {
  const [logged, setLogged] = useState(false);

  const HeaderComponent = FuncHOC(HeaderFunc);
  const FooterComponent = FuncHOC(FooterFunc);
  const MainComponent = FuncHOC(MainFunc);

  return(
    <>
      <h1>ReactJs</h1>
      {/* <Header id="1" name="Dinesh" />
      <Main />
      <Footer /> */}
      {/* <h2>Forms - Class Component</h2>
      <FormClass /> */}

      {/* <ClassCycle id="1" name="Dinesh" subject="ReactJs" /> */}

      {/* <HeaderFunc id="2" name="Tony" />
      <MainFunc />
      <FooterFunc /> */}

      {/* <h2>Forms - Function Component</h2> */}

      {/* <FuncHooks /> */}
      {/* { <FuncUseMemo /> } */}

      {/* <FuncPropType id={1} /> */}

      {/* {logged.toString()}
      {
        logged
          ? 
            <button onClick={() => setLogged(false)}>Logout</button>
          :
            <button onClick={() => setLogged(true)}>Login</button>
      }
      <HeaderComponent logged={logged} />
      <MainComponent logged={logged} />
      <FooterComponent logged={logged} /> */}

      <ErrorBoundary>
        <TestClass />
      </ErrorBoundary>

      <ErrorBoundary>
        <TestClass />
      </ErrorBoundary>

      {logged.toString()}
      {
        logged
          ? 
            <button onClick={() => setLogged(false)}>Logout</button>
          :
            <button onClick={() => setLogged(true)}>Login</button>
      }
      <HeaderComponent logged={logged} />
      <MainComponent logged={logged} />
      <FooterComponent logged={logged} />
    </>
  )
}


// function App() {
//   const [login, setLogin] = useState(false);

//   const logged = (event) => {
//     console.log(event.target.id);
//     (event.target.id === "login") ? setLogin(true) : setLogin(false);
//   }
//   return(
//     <>
//       <h1>ReactJs</h1>
//       {login ? (<Logout />, <button id="logout" onClick={logged}>Logout</button>) : (<Login />, <button id="login" onClick={logged}>Login</button>)}
//       <Header />
//       <Main />
//       <Footer />

//       <HeaderFunc />
//       <MainFunc />
//       <FooterFunc />
//     </>
//   )
// }

export default App;
