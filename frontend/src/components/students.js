import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

export class students extends Component {

    constructor(){
        super();
        this.state = {
            deps:[]
        }
    }

    refreshlist(){
        fetch('http://127.0.0.1:8000/student/')
        .then(response => response.json())
        .then(deps => {
            this.setState({
                deps:deps
            });
            console.log(deps);
        })
    };

    componentDidMount(){
        this.refreshlist();
    }

    componentDidUpdate(){
        this.refreshlist();
    }

  render() {

    const stuData = this.state.deps;
    const rows = stuData.map((stu) =>
    <tr key ={stu.id}>
        <td>{stu.student_id}</td>
        <td>{stu.firstname}</td>
        <td>{stu.lastname}</td>
        <td>{stu.email}</td>
        <td>{stu.course}</td>
    </tr>)

    return (
      <div>
        <p id='before-table'></p>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>FIRSTNAME</th>
                    <th>LASTNAME</th>
                    <th>EMAIL</th>
                    <th>COURSE</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>
      </div>
    )
  }
}
