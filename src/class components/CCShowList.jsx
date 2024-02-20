import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import TodoItem from "./CCTodoItem";

export default class CCShowList extends Component {
    render() {
        const { todolistitems, onDelete, onEdit } = this.props; // משתנים קבועים לפונקציות לתוך הפרופס לביצוע פעילות המחיקה והעדכון
        return (
            <ListGroup>
                {todolistitems.map(todo => (// עדעון קל תא במערך והמרכיבים ופעולות שמופעלות עליו
                    <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    onDelete={onDelete} 
                    onEdit={onEdit}
                  />
                ))}
            </ListGroup>
        );
    }
}