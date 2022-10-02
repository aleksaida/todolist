import { Component } from 'react';
import image from './delete.png';

export class ToDoList extends Component {
    state = {
        userInput: "",
        todolist: []
    }

    onChangeEvent (e) {
        this.setState({userInput: e})
    }

    addItem (input) {
        if (input === ''){
            alert ("Нет планов?")
        } else {
        let listArray = this.state.todolist;
        listArray.push(input);
        this.setState({todolist: listArray, userInput: ''})
    }
    }
    
    crossedWord (event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }
    
    deleteItem () {
        let listArray = this.state.todolist;
        listArray = [];
        this.setState({todolist: listArray})
    }

   deleteLi(item,index){
        let listArray=this.state.todolist;
        listArray.splice(index,1);        
        this.setState({todolist: listArray})
       
    }
    
    onFormSubmit(e) {
        e.preventDefault();
    }
   
    render() {
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className='container'>
            <input type="text"
            placeholder="Что планируете?"
            onChange={(e) => {this.onChangeEvent (e.target.value)}}
            value={this.state.userInput} /> 
            </div>
            <div className="container">
            <button onClick={() => this.addItem(this.state.userInput)} className="add">Добавить</button>
        </div>
        <ul>
            {this.state.todolist.map((item, index) => (
                <li onClick={this.crossedWord} key={index}>
            {item}           
            <img src={image}   width="20px" alt="del" onClick={()=>this.deleteLi(item,index)} />
                </li>
            ))}
        </ul>
        <div className="container">
            <button onClick={() => this.deleteItem()} className="delete">Удалить все</button>
        </div>
        </form>
            </div>            
            
        )

    }
}
