import React, { Component } from 'react';
import SearchBox from '../Components/SearchBox';
import CardList from '../Components/CardList';
import ErrorBoundary from '../Components/ErrorBoundary';
import './App.css';



class App extends Component {
  constructor(){
    super()
    this.state = {
     returnedCards: [], 
     searchfield: ''     
    }
  }
  
// Runs on event trigger
  onSearchChange = (event) =>{
    this.setState({ searchfield: event.target.value });
    setTimeout( () =>{
      fetch(`https://api.scryfall.com/cards/search?q=${this.state.searchfield}`)
      .then(response=> response.json()) 
      .then(cards => {
        let tempArray1 = [];
        let i = 0;
        for(i in cards.data){
          tempArray1[i] = cards.data[i];
        };
        return tempArray1;
      })
      .then(cards => this.setState({returnedCards: cards}))
    }, 500);   
  }

  render(){
    const { returnedCards, searchfield } = this.state
    const filteredCards = returnedCards.filter(card =>{
      return card.name.toLowerCase().includes(searchfield.toLowerCase()) 
    })
    
    return (
      <div className='tc'>
        <h1 className='f-6'>Wizardry:</h1>
        <h2 className='f2'>The Assembling</h2>
        <SearchBox searchChange={this.onSearchChange}/>
        <ErrorBoundary>
          <CardList cards={filteredCards}/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
