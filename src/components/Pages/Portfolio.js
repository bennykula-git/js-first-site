import React from 'react';
// import Modal from 'react-modal';
// import { Modal } from 'react-bootstrap';
// import { useState, useEffect, useRef } from 'react';
import PortfolioItem from './PortfolioItem';

const portfolioItems = [
  {
    style: 'col-md-6 col-lg-4 mb-5',
    image: 'assets/img/portfolio/cabin.png',
    modal: '#portfolioModal1',
  },
  {
    style: 'col-md-6 col-lg-4 mb-5',
    image: 'assets/img/portfolio/cake.png',
    modal: '#portfolioModal2',
  },
  {
    style: 'col-md-6 col-lg-4 mb-5',
    image: 'assets/img/portfolio/circus.png',
    modal: '#portfolioModal3',
  },
  {
    style: 'col-md-6 col-lg-4 mb-5 mb-lg-0',
    image: 'assets/img/portfolio/game.png',
    modal: '#portfolioModal4',
  },
  {
    style: 'col-md-6 col-lg-4 mb-5 mb-lg-0',
    image: 'assets/img/portfolio/safe.png',
    modal: '#portfolioModal5',
  },
  {
    style: 'col-md-6 col-lg-4',
    image: 'assets/img/portfolio/submarine.png',
    modal: '#portfolioModal6',
  },
];

const Portfolio = () => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    // <!-- Portfolio Section-->
    <div>
      <section className='page-section portfolio' id='portfolio'>
        <div className='container'>
          {/* <!-- Portfolio Section Heading--> */}
          <br />
          <br />
          <h2
            className='
            page-section-heading
            text-center text-uppercase text-secondary
            mb-0
          '
          >
            Portfolio
          </h2>
          {/* <!-- Icon Divider--> */}
          <div className='divider-custom'>
            <div className='divider-custom-line'></div>
            <div className='divider-custom-icon'>
              <i className='fas fa-star'></i>
            </div>
            <div className='divider-custom-line'></div>
          </div>
          {/* <!-- Portfolio Grid Items--> */}
          <div className='row justify-content-center'>
            {/* <!-- Portfolio Item 1--> */}
            {portfolioItems.map((i, k) => {
              return (
                <PortfolioItem
                  style={i.style}
                  image={i.image}
                  key={k}
                ></PortfolioItem>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
