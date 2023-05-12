import './App.css';
import { useState } from 'react';

function App() {

  const [activeClass, setActiveClass] = useState(0);

  var panels = [
    { isActive: true },
    { isActive: false },
    { isActive: false },
    { isActive: false }
  ]

  const setActiveHandler=(event)=>{
    event.preventDefault();
    const element=event.target.element;

  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className={"panel" + activeClass==0?"active":""} id={0} style={{ "background-image": 'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)' }} onClick={setActiveHandler}>
            <h3>Learn Java</h3>
          </div>
          <div className={"panel" + activeClass==1?"active":""} id={1} style={{ "background-image": 'url(https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80)' }} onClick={setActiveHandler}>
            <h3>Learn Python</h3>
          </div>
          <div className={"panel" + activeClass==2?"active":""} id={2} style={{ "background-image": 'url(https://images.unsplash.com/photo-1517650862521-d580d5348145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80)' }} onClick={setActiveHandler}>
            <h3>Learn React</h3>
          </div>
          <div className={"panel" + activeClass==3?"active":""} style={{ "background-image": 'url(https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80)' }} onClick={setActiveHandler}>
            <h3>Learn Vue</h3>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
