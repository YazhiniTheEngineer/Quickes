import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../components/Input";
import Cards from "./Cards";



function Main(){
    const [showModal,setShowModal] = useState(false);
    const [name,setName] = useState("");
    const [taskContent,settaskContent] = useState("");
    const [radio,setRadio] = useState("");
    const [newtasks,setNewTasks]=useState("")
    const [selectedTask,setSelectedTask]=useState("");

    console.log(selectedTask);
    function handleClick(id){
        console.log(id)
        let tasks = newtasks[0];
        setSelectedTask(tasks[id])
    }
    return(
        <div className="main">
            <Container className="container">
                <Row className="add-task">
                    <Col sm={8}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label></Form.Label>
                                <Form.Control as="textarea" row={3} col={5} 
                                placeholder="Enter task..." 
                                onClick={ () => setShowModal(true) }
                                readOnly
                                />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col sm={4}>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary">
                            Category
                            </Dropdown.Toggle>

                            <Dropdown.Menu variant="light">
                            <Dropdown.Item onClick={() => handleClick('urgent')} active>Urgent</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleClick('within')}>Within Today</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleClick('whenever')}>Whenever</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">All</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Container>
            <Input trigger={showModal} setTrigger={setShowModal} 
            name={name} setName={setName} 
            taskContent={taskContent} settaskContent={settaskContent}
            radio = {radio} setRadio={setRadio} tasks={newtasks}  setNewTasks={setNewTasks}
            />
            {
                selectedTask && selectedTask.length > 0 && selectedTask.map((item) => {
    
                     return <Cards 
                        title={item.title}
                        task = {item.content}
                        radio = {"See Me"}
                />
                })
            }
           
        </div>
    );
}

export default Main;