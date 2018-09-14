import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid'
import { connect } from 'react-redux';
import { getTasks } from '../actions/taskActions';
import PropTypes from 'prop-types'

class TodoList extends Component {
    
    componentDidMount() {
        this.props.getTasks();
    }

    render() {
        // this.props.task.tasks
        const { tasks } = this.props.task; // destructuring: pulling tasks out of this.props
        return(
            <Container>
                <Button 
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={() => {
                        const name = prompt('Enter Task');
                        if(name) {
                            this.setState( state => ({
                                tasks: [...state.tasks, { id:uuid(), name }]
                            }));
                        }
                    }}
                >
                    Add Task
                </Button>

                <ListGroup>
                    <TransitionGroup className="tasks-list">
                        {tasks.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                   <Button 
                                   className='remove-btn'
                                    color="danger"
                                    size='sm'
                                    onClick={() => {
                                        this.setState(state => ({
                                            tasks: state.tasks.filter(task => task.id !== id)
                                        }));
                                    }}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
    
}

TodoList.propTypes = { 
    getTasks: PropTypes.func.isRequired, // when you bring in an action from redux, it's stored as a prop
    task: PropTypes.object.isRequired // this represents state
}

const mapStateToProps = (state) => ({
    task: state.task // called task because its task in /reducers/index.js
})

export default connect(mapStateToProps, { getTasks })(TodoList);