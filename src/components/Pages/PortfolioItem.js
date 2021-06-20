import React from 'react';

const PortfolioItem = (props) => {
  return (
    // <!-- Portfolio Item 1-->
    // className={`pill ${ this.props.styleName }`}
    <div className={props.style}>
      <div
        // onClick={handleShow}
        className='portfolio-item mx-auto'
        // data-bs-toggle='modal'
        // data-bs-target={props.modal}
      >
        <div
          className='
        portfolio-item-caption
        d-flex
        align-items-center
        justify-content-center
        h-100
        w-100
      '
        >
          <div className='portfolio-item-caption-content text-center text-white'>
            <i className='fas fa-plus fa-3x'></i>
          </div>
        </div>
        <img className='img-fluid' src={props.image} alt='...' />
      </div>
    </div>
  );
};

export default PortfolioItem;
