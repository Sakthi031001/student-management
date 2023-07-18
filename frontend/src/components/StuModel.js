import React,{ Component } from 'react'
import { Modal, Col, Row, Form, Button, FormControl, FormGroup, FormLabel } from 'react-bootstrap'


export class StuModel extends Component {
  
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://127.0.0.1:8000/student/',{
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                student_id:null,
                firstname:event.target.firstname.value,
                lastname:event.target.lastname.value,
                email:event.target.email.value,
                course:event.target.course.value,
            })
        })
        .then(response=>response.json())
        .then((result) => {
            alert(result);
        },
        (error) =>{
            alert('Failed');
        })
    }

    render() {
    return (
        <div className="container">
                
        <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered >

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Fill In Student Information
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="firstname">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" name="firstname" required placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="fastname">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" name="lastname" required placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" name="email" required placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="course">
                                <Form.Label>Course</Form.Label>
                                <Form.Control type="text" name="course" required placeholder="" />
                        </Form.Group>
                        <Form.Group>
                            <p></p>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="danger" type="submit" onClick={this.props.onHide}>
                    Close
            </Button>

            </Modal.Footer>
        </Modal>
    </div>
    )
  }
}