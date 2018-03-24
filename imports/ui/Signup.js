import React,{Component} from "react";
import { Accounts } from 'meteor/accounts-base'

export default class Signup extends Component{
    constructor(props){
        super(props);
        this.submitForm=this.submitForm.bind(this);
        this.emailChange=this.emailChange.bind(this);
        this.passwordChange=this.passwordChange.bind(this);
    }

    emailChange(event){
        this.setState({email:event.target.value});
    }

    passwordChange(event){
        this.setState({password:event.target.value});
    }

    submitForm(){
        console.log("password: ",this.state.password);
        console.log("email: ",this.state.email)
        Accounts.createUser({email: this.state.email,password:this.state.password},function(err){
            if(err){
                console.log(err);
            }
            else{
                console.log("User Created");
            }
        });
    }

    render(){
        return (
            <div className="container">
                <label>Email: </label><input type="email" className="form-control" onChange={this.emailChange}/>
                <label>Password: </label><input type="password" className="form-control" onChange={this.passwordChange} />
                <button className="btn btn-default btn-lg" onClick={this.submitForm}>Signup</button> 
            </div>
        )
    }
}
