import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Odnourovnevie from './Components/ConstructPage/Odnourovnevie/Odnourovnevie';
import Dvuhurovnevie from './Components/ConstructPage/Dvuhurovnevie/Dvuhurovnevie';
import DvuhPodsv from './Components/ConstructPage/DvuhPodsv/DvuhPodsv';
import Par from './Components/ConstructPage/Par/Par';
import ParLine from './Components/ConstructPage/ParLine/ParLine';










class App extends React.Component {
  render(){
  return (
    <div className="appContainer">
      <BrowserRouter>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/odnourovnevie/" component={Odnourovnevie}/>
      <Route exact path="/dvuhurovnevie/" component={Dvuhurovnevie}/>
      <Route exact path="/dvuhurovnevie-s-podsvetkoi/" component={DvuhPodsv}/>
      <Route exact path="/paraschii-potolok/" component={Par}/>
      <Route exact path="/paraschie-linii/" component={ParLine}/>


      </BrowserRouter>
   

      </div>

   
  );
}
}

export default App;
