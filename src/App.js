import React,{Component} from 'react'
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import hello from './components/hello'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import  ClassClick  from './components/ClassClick';
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';


class App extends Component{
// class App extends React.Component {
render (){
  return (
    <div className="App">
      <ParentComponent/>
      {/* <EventBind/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name="Bruce" heroName="Batman" /> */}
      {/* <P> this is children props</P> */}
      {/* <Greet/> */}
      <Greet name="Clarck" heroName="Superman" />
      {/* <button>Action</button> */}
      {/* <Greet/> */}
      {/* <Greet name="Diana" heroName="Wonder Women" /> */}
      {/* <Welcome name="Bruce" heroName="Batman" /> */}
      {/* <Welcome name="Clarck" heroName="Superman"/> */}
      {/* <Welcome name="Diana" heroName="Wonder Women"/> */}

      {/* <Welcome/> */}
      {/* <hello/> */}
     </div>
  );
}
}


export default App;
