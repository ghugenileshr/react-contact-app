import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link} from "react-router-dom";

class ContactList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.contactList.map(row => (
                                    <tr key={row.id}>
                                        <td>{row.firstName}</td>
                                        <td>{row.lastName}</td>
                                        <td>{row.emailAdd}</td>
                                        <td>
                                            <Link className="btn btn-primary btn-sm" to={`/editContact/${row.id}`}>
                                                <span className="glyphicon glyphicon-pencil"> </span>&nbsp;
                                                 Edit 
                                            </Link>
                                            &nbsp;
                                            <button className="btn btn-danger btn-sm" onClick={() => this.props.onDeleteClicked(row.id)}>
                                                <span className="glyphicon glyphicon-trash"> </span>&nbsp;
                                                Delete 
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state =>{
    console.log('[mapStateToProps]: ',state)
    return {
        contactList: state.contactList
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onDeleteClicked: (id) => dispatch({ type: 'DELETE_CONTACT', contactId: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)