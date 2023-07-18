import React, { Component } from 'react'
import { Table, Button, ButtonToolbar } from 'react-bootstrap'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import { StuModel } from './StuModel'

export class Manage extends Component {

    constructor(){
        super();
        this.state = {
            student:[], addModalShow:false, editModalShow:false
        }
    }

    fetchData(){
        fetch('http://127.0.0.1:8000/student/')
        .then(response => response.json())
        .then((data) =>{
            this.setState({
                student:data
            });
            console.log(data);
        })};
    
        componentDidMount(){
            this.fetchData();
        }
    
        componentDidUpdate(){
            this.fetchData();
        }

        deleteDep(stu_id){
            if(window.confirm('Are you sure?')){
                fetch('http://127.0.0.1:8000/student/' + stu_id, {
                    method:'DELETE',
                    header:{
                        'Accept':'application/json',
                        'Content-Type':'application/json',
                    }
                })
            }
        }

  render() {
    const {student, stu_id, fname, lname, course,email}=this.state
    let AddModelClose=()=> this.setState({'addModalShow':false})
    return (
        <div>

        <p id="manage"></p>

<Table className="table table-bordered hover" id="dataTable">
                    <thead>
                    <tr>
                      <th>ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Course</th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
    { student.map((stu) => 
                     
    <tr key={stu.id}>
    <td>{stu.student_id}</td>
    <td>{stu.firstname}</td>
    <td>{stu.lastname}</td>
    <td>{stu.email}</td>
    <td>{stu.course}</td>
    <td><ButtonToolbar>


        <Button className="mr-2" variant="danger" 
        onClick={()=>this.deleteDep(stu.student_id)}>
            Delete
        </Button>
        </ButtonToolbar> </td>
</tr>)}

                    </tbody>
                </Table>
                <ButtonToolbar>
                    <Button variant="primary" onClick={()=>this.setState({addModalShow:true})}>
                    Add Student
                    </Button>
                    <StuModel show={this.state.addModalShow}
                    onHide={AddModelClose}></StuModel>
                </ButtonToolbar>
        
    </div>
    )
  }
}

export default Manage
