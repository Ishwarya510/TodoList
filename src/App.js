import React, { Component } from 'react'
import List from "./List"
import "./App.css"

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       items:[],
       currentItem:{
         text:"",
         key:""
       }
       
    }
  }
  handleInput=(e)=>{
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Math.random()
      }
    })
  }
  addItem=(e)=>{
    e.preventDefault();
    const newItem=this.state.currentItem;
    if(newItem.text!==""){
      const newItems=[...this.state.items,newItem]
      this.setState({
        items:newItems,
        currentItem:{
          text:"",
          key:""
        }
      })
    }
  }
  deleteItem=(key)=>{
    const filterItem=this.state.items.filter(item=>item.key!==key)
    this.setState({
      items:filterItem
    })
  }
  render() {
    return (
      <div className="App">
          <h1 className="head">TODO LIST</h1>
          <div className="container">
          <form onSubmit={this.addItem} id="add">
            <input type="text" placeholder="Enter text...." value={this.state.currentItem.text} onChange={this.handleInput} className="input"/>
            <button type="submit">Add</button>
          </form>
        <List items={this.state.items} deleteItem={this.deleteItem}/>
        </div>
      </div>
    )
  }
}

export default App

