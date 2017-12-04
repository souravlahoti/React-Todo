import React, { Component } from 'react';
import '../styles/App.css';
import Header from './HeaderComponent';
import Action from './ActionComponent';
import OptionList from './OptionListComponent';
import AddOption from './AddOptionComponent';
import { Jumbotron, Container } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      options: []
    }
  }

  componentDidUpdate(prevProps,prevState){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options",json);
  }

  componentDidMount(){
    const json = localStorage.getItem("options");
    const options = JSON.parse(json);
    this.setState(() => ({options}));
  }
  onRemoveAll = () => {
    if (this.state.options.length == 0){
      alert("No todo to delete ");
      return
    }
    this.setState(() => {
      return {
        options: []
      };
    });
  }  
  addTodoList = (e) => {
    e.preventDefault();
    var value = e.target.todo.value;
    if(value.trim() !== ""){
      this.setState((prevState) => {
        prevState.options.push(value);
        return {
          options: prevState.options
        }
      })
      e.target.todo.value = "";
    }
  }
  onRemoveList = (e,index) => {
    e.preventDefault();
    this.setState((prevState) => {
      prevState.options.splice(index,1);
      return {
        options: prevState.options
      }
    })
  }
  render() {
    const title = "ToDo App";
    const subtitle = "Add some to do list ";

    return (
      <div className="App">
      <Jumbotron fluid>
          <Container fluid>
            <Header title={title} subtitle={subtitle}/>
            <Action onRemoveAll={this.onRemoveAll} options={this.state.options}/>
            <OptionList options={this.state.options} onRemoveList={this.onRemoveList}/>
            <AddOption addTodoList={this.addTodoList}/>
        </Container>
      </Jumbotron>
      </div>
    );
  }
}

export default App;
