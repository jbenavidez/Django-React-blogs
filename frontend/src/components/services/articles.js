import Axios from 'axios';
import config from '../config'

export default class ArticleServices {

    async getArticleCategories(){
        const response  = await Axios.get(`http://127.0.0.1:8000/api/v1/categories/`);
        //django remove categorie use -> response.data
        console.log("friday can you see me" ,response)
        return response.data;
    }

      createArticle =  async (data,token) => {
        const image = await  this.uploadToCloudinary(data.image);



            try{
                const response = await Axios.post(`https://react-blog-api.bahdcasts.com/api/articles`, {
                    title: data.title,
                    content: data.content,
                    category_id : data.category,
                    imgUrl : image.secure_url, 
        
        
                },{
                headers: {
                    Authorization: `Bearer ${token}`,
        
                }
        
                });

                console.log("Response from create article api", response);
            return response.data; 


            }catch(errors){
                console.log("errors from creating an article", errors)

                return errors.response.data;

            }

            


    }   

    async uploadToCloudinary(image){

        const form = new FormData();
        form.append('file', image);
        //required to uplaod the image to the cloud 
        form.append('upload_preset', 'ieeapopz');

        const response = await Axios.post('https://api.cloudinary.com/v1_1/dbcdym3gj/image/upload', form);

        console.log("this is the rresponse from cloudinary" , response);

        return response.data;

    }

}