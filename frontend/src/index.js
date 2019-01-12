import React from 'react';
import ReactDOM from 'react-dom';
 

import Welcome  from '././components/welcome';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Route, Link, withRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreateArticle from './components/CreateArticle';
import Login from './components/Login';
import SingleArticle from './components/SingleArticle';
import Signout from './components/Signout'

 

import './components/styles/assets/css/core.min.css';
import './components/styles/assets/css/core.min.css';
import './components/styles/assets/css/thesaas.min.css';
import './components/styles/assets/css/style.css';
import AuthService from './components/services/auth';
import AUthService from './components/services/auth';
import ArticleServices from './components/services/articles';

class App extends React.Component {

     constructor(){
         super();
         this.state = {
                    authUser: null
         };

     }



     componentDidMount(){
         //get user varible after component moun 
         const user = localStorage.getItem('user');
            console.log('the user ', user);
            try{
                if (user){
                    this.setState({
                        authUser: JSON.parse(user)
                    })
                }
            }catch(errors){
                console.log("error on didmoun" ,errors)
            }
     }
        //set  user after sigiup
     setAuthUSer = (authUser) =>{
         this.setState({
            authUser
         })
     }

    render (){
        const { location } = this.props;
        return (
            <div>
            {
                location.pathname !=='/-/login' && location.pathname !=='/-/signout' &&
                <Navbar authUser = { this.state.authUser } />
            }

       
     <Route exact path='/-/home' component={Welcome} />
     
     <Route exact 
     path='/-/articles/create' 
   
     render = { (props) =>  <CreateArticle {...props} 
     authUser = { this.state.authUser}
     createArticle = {this.props.ArticleServices.createArticle}
     getArticleCategories= {this.props.ArticleServices.getArticleCategories} />} />
      


     <Route exact path='/-/login'
      render=  { (props) =>  <Login {...props} setAuthUSer={this.setAuthUSer} loginUser={this.props.AuthService.loginUser} />} 
       />
  
     <Route exact path='/-/signout' render = { (props) =>  <Signout {...props} setAuthUSer={this.setAuthUSer} registerUser={this.props.AuthService.registerUser} />} />
     <Route exact path='/-/article/:slug' component={SingleArticle} />

       {
                location.pathname !=='/-/login' && location.pathname !=='/-/signout' &&
                <Footer/>
            }


  
     </div>
        )
    }
}

//withrouter take a function 
const Main  = withRouter((props) =>{
    return (
        <App AuthService= { new AUthService()} {...props}  ArticleServices = { new ArticleServices()}/>
    );
});


ReactDOM.render(
    <BrowserRouter>
       <Main />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
