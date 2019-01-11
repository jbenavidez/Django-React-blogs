import {validateAll} from 'indicative'
import Axios from 'axios';
import config from  '../config';


export default class AUthService{


   async registerUser(data){
    
    //validate date using indicative 

 
          
    const  rules = {
          name:'required|string',
          email: 'required|email',
          password:'required|string|min:6|confirmed',
        

    };

      const messages ={
            required:'The {{ field }} is required.',

            'email.email':'The email is invalid.',
            'password.confirmed':'The password confirmation does not match.'
             
      };


        try{
          await validateAll(data, rules, messages)
          const response = await  Axios.post( config.apiurl ,{
            //Axios.post(`${config.apiurl}/auth/register`,{
            username:data.name,
            email: data.email,
            password: data.password

          })
          return response.data;
       
        }catch(errors){

            if (errors.response.status == 422){
              console.log(errors.response)
              const formatttedErrors ={};
              // formatttedErrors['email'] = errors.response.data['email'][0];
              //   this.setState({
              //     errors: formatttedErrors
              //   })
              return Promise.reject(formatttedErrors)
              console.log('error after put api ',)
            }

          const formatttedErrors ={}
        
          errors.forEach(error => formatttedErrors[error.field] = error.message)

            return Promise.reject(formatttedErrors)
        }

    }


    //login user function 
    async loginUser(data){
    
      //validate date using indicative 
  
   
            
      const  rules = {
          
            email: 'required|email',
            password:'required|string',
          
  
      };
  
        const messages ={
              required:'The {{ field }} is required.',
  
              'email.email':'The email is invalid.',
            
               
        };
  
  
          try{
            await validateAll(data, rules, messages)
            //make sure you create the api on django to login user 
            const response = await  Axios.post( config.loginApiUrl ,{
              //Axios.post(`${config.apiurl}/auth/register`,{
         
              email: data.email,
              password: data.password
  
            })
            return response.data;
         
          }catch(errors){
              console.log("erros from auth login user", errors)
              if (errors.status == 401){
                console.log(errors.response)
                const formatttedErrors ={};
                // formatttedErrors['email'] = errors.response.data['email'][0];
                //   this.setState({
                //     errors: formatttedErrors
                //   })
                return Promise.reject(formatttedErrors)
                console.log('error after put api ',)
              }
  
            const formatttedErrors ={}
          
            errors.forEach(error => formatttedErrors[error.field] = error.message)
  
              return Promise.reject(formatttedErrors)
          }
  
      }
}