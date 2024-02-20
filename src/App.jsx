import { Component, useState } from 'react'
import './App.css'
import CCTodoadder from './class components/CCTodoadder'
import CCShowList from './class components/CCShowList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todolistitems: [],
      counter: 0
    };// בנאי המחלקה ששומרים בתתוכו את מערך המשתנים שאנחנו מוסיפים ועוד משתנה מונה לתעודות הזהות של כל משתנה במערך
  }
  addToList = (text) => {
    if (!text.trim()) return; //אם השדה לא ריק
    const newId = this.state.counter + 1;
    const newTodo = { id: newId, text: text };
    this.setState(prevState => ({
      todolistitems: [...prevState.todolistitems, newTodo],
      counter: newId,
    }));// פנקשן להוספת התאסק החדש עם וודאות שהוא לא נרשם לפני
  };

  onDelete = (id) => {
    this.setState(prevState => ({
      todolistitems: prevState.todolistitems.filter(todo => todo.id !== id),
    }));// פנקשן למחיקת תאסק קיים
  };
  onEdit = (id, newText) => {
    this.setState(prevState => ({
      todolistitems: prevState.todolistitems.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      ),
    }));
  };// פנקשן לשינוי ועדכון תאסק קיים לתאסק חדש ומשירתו לתוך המערך


  render() {// רנדור את שני המחלקות שלנו 
    return (
      <div className="styled-div">
        <h2>what are we doing today</h2>
        <CCTodoadder addtodo={this.addToList} />
        <CCShowList todolistitems={this.state.todolistitems}
          onDelete={this.onDelete}
          onEdit={this.onEdit} />
      </div>
    )
  }
}


