import React from 'react';
import {validateAll} from 'indicative'
import Axios from 'axios';
import config from '../config';



class Signout extends React.Component {

      constructor(){
        super();

        this.state ={
            name: '',
            email:'',
            password:'',
            password_confirmation:'',
            errors: {}


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

          
 
              try{
                  const user = await this.props.registerUser(this.state)

                console.log(user);
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
                this.setState({
                  errors
                });
              }


          
          
          

      }
  render(){
    return(
      <div className="mh-fullscreen bg-img center-vh p-20" style={{backgroundImage: 'url(assets/img/bg-girl.jpg)'}}>
      <div className="card card-shadowed p-50 w-400 mb-0" style={{maxWidth: '100%'}}>
        <h5 className="text-uppercase text-center">Register</h5>
        <br />
        <br />
        <form className="form-type-material" onSubmit = {this.handleSubmit}> 
          <div className="form-group">
            <input type="text" className="form-control" onChange= {this.handleInputChange}  name="name"placeholder="Username" />

           {
             this.state.errors['name'] &&
             <small className='text-danger'>{this.state.errors['name']}</small>
           }
              
             
            
          </div>
          <div className="form-group">
            <input type="text" name="email" className="form-control" onChange= {this.handleInputChange}  placeholder="Email address" />
            
           {
             this.state.errors['email'] &&
             <small className='text-danger'>{this.state.errors['email']}</small>
           }
          </div>
          <div className="form-group">
            <input type="password" className="form-control" name="password" onChange= {this.handleInputChange}  placeholder="Password" />

            {
             this.state.errors['password'] &&
            <small className='text-danger'>{this.state.errors['password']}</small>

            }
          </div>
          <div className="form-group">
            <input type="password" className="form-control" name="password_confirmation" onChange= {this.handleInputChange}  placeholder="Password (confirm)" />
          </div>
          <br />
          <button className="btn btn-bold btn-block btn-primary" type="submit">Register</button>
        </form>
        <hr className="w-30" />
        <p className="text-center text-muted fs-13 mt-20">Already have an account?
          <a href="login.html">Sign in</a>
        </p>
      </div>
    </div>
    )
  }
}

export default Signout;