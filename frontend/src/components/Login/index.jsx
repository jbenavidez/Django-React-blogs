import React from 'react';
import LoginForm from '../LoginForm/index';


class Login extends React.Component{

  constructor(){
    super();
    this.state = {
      email:'',
      password:'',
      errors:{}
    };
  }
  handleInputChange =(event) =>{
    //input names should be the same name on the states
    this.setState({
      [event.target.name]: event.target.value
    });
    
  }

  handleSubmit = async (event) =>{
    event.preventDefault();

      // console.log(this.state)
      try{
        const user = await this.props.loginUser(this.state);
        console.log('call login api work', )
       
        //store the user on the browser 
        localStorage.setItem('user', JSON.stringify(user))
        try{
           this.props.setAuthUSer(user)
        }catch(errors){
          console.log("the error")
        }
        //redirect the user 
        this.props.history.push('/-/home');



      }catch(errors){
        console.log('call login api : FAILED', errors)
        this.setState({
          errors
        })
      }

  }


  render(){
    return  (
      <LoginForm 
      handleInputChange = {this.handleInputChange}
      handleSubmit = {this.handleSubmit}
      />
    );
  }
}

export default Login;
