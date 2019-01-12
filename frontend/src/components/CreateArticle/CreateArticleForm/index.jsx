import React from 'react';
 
import Banner from '../../Banner';
import CreateArticleImage from '../../styles/assets/img/bg-laptop.jpg';

const CreateArticleForm = ({handleInputChange, categories, handleSubmit}) => {
    return ( 
        <div>
        
     
        <Banner
           backgroundImage ={`url(${CreateArticleImage})`}
          Title = "Write an article"
        />
        <main className="main-content">
          <section className="section">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-12">
                  <form className="p-30 bg-gray rounded" onSubmit = {handleSubmit}>
                    <div className="row">
                      <div className="form-group col-md-12 my-5">
                        <input type="file" className="form-control" name="image"  onChange={handleInputChange} />
                      </div>
                      <div className="form-group col-12 col-md-6">
                        <input className="form-control form-control-lg" type="text" name="title" placeholder="Title" onChange={handleInputChange} />
                      </div>
                      <div className="form-group col-12 col-md-6">
                        <select name="category " onChange={handleInputChange}   className="form-control form-control-lg">
                          <option value>Select category</option>
                         
                            {categories.map(category => 
                            <option key={category.id} value={category.id}>{category.name} </option>) }


                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control form-control-lg" rows={4} placeholder="Content" name="content"  onChange={handleInputChange} />
                    </div>
                    <div className="text-center">
                      <button className="btn btn-lg btn-primary" type="submit">Create Article</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* END Main container */}
      </div>
      
    );
};

export default CreateArticleForm;