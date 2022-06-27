import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters'; 
import NavBar from './components/navbar';

  class App extends Component
  {
    state={
      counters: [
          {id:1,value:8},
          {id:2,value:0},
          {id:3,value:4},
          {id:4,value:2},
          {id:5,value:0}
      ]    };
      
      constructor(){
        super();
        console.log('App - Constructor');
     // this.state=this.props.something;
      }
      componentDidMount(){
        //appel d'ajax
        //this.setState({this.props});
        console.log('App - Mounted');
      
      }
      handlyIncriment = (counter)=>{
          const counters=[...this.state.counters];
          const index= counters.indexOf(counter);
          counters[index]={...counter};
          counters[index].value++;
          console.log(this.state.counters[index]);
          this.setState({counters});
      };
      
      handlyRest= ()=>{
          const counters= this.state.counters.map(c=>
              {
                  c.value=0;
                  return c;
              });
              this.setState({counters});
      };
    
      handlyDelet = (counterId) => {
        //  console.log('le composant est supprimer', counterId);
          const counters = this.state.counters.filter(c => c.id !== counterId);
          this.setState({counters});  
      };

    render(){
      console.log('App - Rendered');

      return (
        <div className="App">
          <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
          <main className="container">
                           <Counters
                           counters ={this.state.counters}
                           OnReset={this.handlyRest}
                           OnIncrement={this.handlyIncriment}
                           OnDelete={this.handlyDelet}
                           />
                     </main>
        </div>
      );
    }
  }
export default App;
