import React from 'react';
import Banner from './../Banner';
import CreateArticleImage  from '../styles/assets/img/bg-laptop.jpg';
import CreateArticleForm from '../CreateArticle/CreateArticleForm';
 
class CreateArticle  extends React.Component{
  
    constructor(){
      super();
           
        this.state = {
                title:'',
                image:null,
                content:'',
                category:null,
                errors:{},
                categories:[]
        };





    }
       async componentWillMount(){
         //get category

         const categories = await this.props.getArticleCategories();

          this.setState({
            categories
          });


       }

       handleSubmit= async (event) =>{
         event.preventDefault();


         try{
          const article = await this.props.createArticle(this.state, this.props.authUser );
          
          this.props.history.push('/-/home');


         }catch(errors){
            this.setState({
              errors
            })
           console.log("error on create component", errors)
         }

         
       }


    handleInputChange =(event) =>{
      //input names should be the same name on the states
       
      this.setState({
        [event.target.name]: event.target.type === 'file' ? event.target.files[0]: event.target.value,
      });
      
    }


  render(){
    return(
        <CreateArticleForm
        handleInputChange= {this.handleInputChange}
        categories = {this.state.categories}
        handleSubmit ={this.handleSubmit}
        />
    );
  }
}


export default CreateArticle;