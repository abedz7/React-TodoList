import React, { Component } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPen, faSave } from '@fortawesome/free-solid-svg-icons';

export default class TodoItem extends Component {
    state = {
        isEditing: false,
        editText: this.props.todo.text,
    };// סתיית למשתנים אחד לבדיקת עדכון התאסק והשני ועדכון התאסק

    EditTask = () => {
        this.setState(prevState => ({
            isEditing: !prevState.isEditing,
            editText: this.props.todo.text,
        }));
    };// פנקשן לביצוע עדכון ו שינוי על תאסק קיים 

    ChangeText = (e) => {
        this.setState({ editText: e.target.value });
    };// פנקשן לביצוע שינוי  הערך החדש שנתן המשתנה לתאסק הקיים

    saveEdit = () => {
        this.props.onEdit(this.props.todo.id, this.state.editText);
        this.setState({ isEditing: false });
    };// פנקשן לשמירת הערך החדש מהמשתמש  


    render() {// רנדור המחלקה עם LIST מסוים שמורב מכמה מרכיבים
        const { todo, onDelete } = this.props;
        const { isEditing, editText } = this.state;

        return (
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
                {isEditing ? ( // שימוש בתנאי הזה  כדי לוודא ולבדוק איך התאסק מופיע , אם הוא נראה כתאסק רגיל או שהוא מופיע כ תאסק לשינוי ולעדכון בהתאמה
                    <Form.Control
                        type="text"
                        value={editText}
                        onChange={this.ChangeText}
                        autoFocus
                    />
                ) : (
                    <span className="me-auto" style={{fontWeight:'bold'}}>{todo.text}</span>
                )}

                <div>
                    {isEditing ? (
                        <FontAwesomeIcon icon={faSave} onClick={this.saveEdit} style={{ cursor: 'pointer', margin: '0 10px' }} />
                    ) : (
                        <FontAwesomeIcon icon={faPen} onClick={this.EditTask} style={{ cursor: 'pointer', margin: '0 10px' }} />
                    )}
                    <FontAwesomeIcon icon={faTrashAlt} onClick={() => this.props.onDelete(todo.id)} style={{ cursor: 'pointer' }} />

                </div>
            </ListGroup.Item>
        );
    }
}

