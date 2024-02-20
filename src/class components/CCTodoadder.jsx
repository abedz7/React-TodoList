import { Component } from "react";
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default class CCTodoadder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputvalue: ''
        };
    }//בנאי שמאתחל את הערך שאנחנו רוצים לשמור


    textsaver = (e) => {
        this.setState({ inputvalue: e.target.value });
    }//שמירת הערך שנכתב בתוך הקלט

    btnAddTodo = () => {
        this.props.addtodo(this.state.inputvalue);// קריאה לפונקציה להוספת הערך החדש
        this.setState({ inputvalue: '' }); //איפוס הערך מחדש להוספה הבאה
    };

    render() {//רנדור התבנית שלנו ביחד עם הפונקציות המתאימות לקליטת ושליחת קלט
        return (
            <div>
                <InputGroup style={{ display: 'flex', alignItems: 'stretch' }} size="lg" className="mb-3">
                    <Form.Control style={{ flex: '1 1 auto', fontSize: '25px' }}
                        placeholder="Doing Today ..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={this.textsaver}
                    />
                    <Button onClick={this.btnAddTodo} variant="outline-secondary" id="button-addon2">
                        Add
                    </Button>
                </InputGroup>
            </div>
        );
    }
}