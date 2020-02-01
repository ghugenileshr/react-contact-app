import React, { Component } from 'react'
// import {  Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import { withRouter, Redirect } from 'react-router-dom';
import { connectRouter,push } from 'connected-react-router';
import history from "../history";
class AddContact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            emailAdd: '',
            id: null,
            editMode:false
        }
    }

    componentDidMount(){
        // console.log(this.props.location.pathname.split('/'))
        let params = this.props.location.pathname.split('/');
        if(params.length==3){
            //in edit mode
            console.log(this.props)
            for(let i=0;i<this.props.contactList.length; i++){
                if(this.props.contactList[i].id == params[2]){
                    this.setState({
                       ...this.props.contactList[i],
                        editMode :true
                    })
                    break;
                }
            }

        }else{

        }
    }

    isInEditMode(mode){
        if(this.state.editMode == true){
            return (
                <button type="button" className="btn btn-block btn-success" onClick={this.onUpdateClicked}>
                    Update Contact
                </button>
            )
        }else{
            return (
                <button type="button" className="btn btn-block btn-primary" onClick={this.onAddClicked}>
                    Add New Contact
            </button>)
        }
        
        
    }

    onAddClicked = () => {
        let newContact = {...this.state}
        newContact['status'] = 'active';
        newContact['id'] = Date.now()
        this.props.onAdd(newContact);
        this.props.history.push('/')
    }

    onUpdateClicked = () => {
        let updatedContact = {...this.state}
        this.props.onUpdate(updatedContact);
        this.props.history.push('/')
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>

                <div className="row">

                    <div className="col-lg-3 col-md-3"></div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">

                        <form className="formWrapper">

                            <div className="form-group">
                                <h2 className="text-center">Add new contact form</h2>
                            </div>

                            <div className="form-group">
                                <label htmlFor="firstName">First name</label>
                                <input type="text"
                                    name="firstName"
                                    id="firstName"
                                    value={this.state.firstName}
                                    onChange={this.handleChange}
                                    className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" value={this.state.lastName} name="lastName" id="lastName" onChange={this.handleChange} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="emailAdd">Email Address</label>
                                <input type="email" value={this.state.emailAdd} name="emailAdd" id="emailAdd" onChange={this.handleChange} className="form-control" />
                            </div>
                          
                            {
                                this.isInEditMode(this.state.editMode)
                            }
                            
                            
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('[mapStateToProps]: ', state)
    return {
        contactList: state.contactList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAdd: (contactData) => dispatch({ type: 'ADD_CONTACT', newContactData: contactData }),
        onUpdate: (updatedContactData) => dispatch({ type: 'EDIT_CONTACT', dataToBeUpdate: updatedContactData }),
       
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddContact))
