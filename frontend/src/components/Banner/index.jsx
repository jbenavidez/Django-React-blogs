import React from 'react';

const Banner = ({backgroundImage, subTitle, Title}) =>{
    return( 
        <header className="header header-inverse" style={{backgroundImage:backgroundImage }} data-overlay={8}>
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
              <h1>{Title}</h1>
              <p className="fs-20 opacity-70">{subTitle}</p>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Banner;