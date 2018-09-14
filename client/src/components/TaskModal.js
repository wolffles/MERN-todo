import React, {Component} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
// container a component that is hooked to redux. if using a redux state within a react component its called container. 
import { connect } from 'react-redux';
import { addTask } from '../actions/taskActions';


// if you have a form you SHOULD have a component state not application state.
class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    //since it's a form you need to prevent the form from submitting naturally.
    onSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            name: this.state.name

        }

        //Add task via addTask action
        this.props.addTask(newTask);

        //Close modal
        this.toggle();
    }

    render() {
        return(
            <div>
                <Button 
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                > Add Task
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader>
                        Add To Task List
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="task"
                                    placeholder="Enter Task"
                                    //when you have an input you usually have a function in this case its onChange
                                    onChange={this.onChange}
                                >
                                </Input>
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Submit
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.task
});

export default connect(mapStateToProps, { addTask })(ItemModal); 