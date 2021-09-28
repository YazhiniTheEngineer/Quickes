import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Input({trigger,setTrigger,name,setName,taskContent,settaskContent,radio,setRadio,setNewTasks}){
    // const [title,setTitle] = useState("");
    // const [task,setTask] = useState("");
    // const [radio,setRadio] = useState("");
   let task = [{
        "urgent" : [],
        "within" : [],
        "whenever" : []
    }]
    
    let setAns = (e) => {
        e.preventDefault();
        console.log(radio);
        let editedTask = task[0];
        editedTask[radio.toString()].push({
        "title": name,
        "content": taskContent
        });
        setNewTasks(task)

        setName("");
        settaskContent("");
        setRadio("");

      };
      
    return (trigger) ? ( 
        <>
            <Modal.Dialog>
                <Modal.Header closeButton onClick={() => setTrigger(false)}>
                    <Modal.Title>Add Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title..." id="title"
                             onChange={(e) => setName(e.target.value)} value={name}
                             />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Task</Form.Label>
                            <Form.Control type="text" placeholder="Enter task..." id="task" value={taskContent}
                             onChange={(e) => settaskContent(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" 
                            onChange={(e) => setRadio(e.target.value) }
                        >
                            <Form.Check type="radio" name="same" value="urgent" label="Urgent" />
                            <Form.Check type="radio" name="same" value="within" label="Within Today" />
                            <Form.Check type="radio" name="same" value="whenever"  label="Whenever" />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setTrigger(false)}>Close</Button>
                    <Button variant="primary" 
                        onClick={setAns} 
                    >Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
    </>) : null;
}

export default Input;
