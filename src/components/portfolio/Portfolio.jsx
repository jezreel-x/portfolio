import React from 'react';
import './portfolio.css';
// import '../testimonials/testimonials.css';


import IMG1 from '../../assets/portfolio-photo.png';
import IMG2 from '../../assets/portfolio-photo(2).png';
// import IMG3 from '../../assets/portfolio-photo(3).png';

// AirHousing Images
import IMG4 from '../../assets/portfolio-photo(4).jpg';
import IMG5 from '../../assets/portfolio-photo(5).jpg';
import IMG6 from '../../assets/portfolio-photo(6).jpg';
import IMG7 from '../../assets/portfolio-photo(7).jpg';
import IMG8 from '../../assets/portfolio-photo(8).jpg';
import IMG9 from '../../assets/portfolio-photo(9).png';
import IMG10 from '../../assets/portfolio-photo(10).png';
import IMG11 from '../../assets/portfolio-photo(11).png';
import IMG12 from '../../assets/portfolio-photo(19).png';
import IMG13 from '../../assets/portfolio-photo(20).png';
import IMG14 from '../../assets/portfolio-photo(21).png';
import IMG15 from '../../assets/portfolio-photo(22).png';

// JaGedo Images
import IMG16 from '../../assets/portfolio-photo(12).png';
import IMG17 from '../../assets/portfolio-photo(13).png';
import IMG18 from '../../assets/portfolio-photo(14).png';
import IMG19 from '../../assets/portfolio-photo(15).png';
import IMG20 from '../../assets/portfolio-photo(16).png';
import IMG21 from '../../assets/portfolio-photo(17).png';
import IMG22 from '../../assets/portfolio-photo(18).png';

// Miscellaneous Images
import IMG23 from '../../assets/portfolio-photo(23).png';
import IMG24 from '../../assets/portfolio-photo(24).png';
import IMG25 from '../../assets/portfolio-photo(25).png';
import IMG26 from '../../assets/portfolio-photo(26).png';
import IMG27 from '../../assets/portfolio-photo(27).png';
import IMG28 from '../../assets/portfolio-photo(28).png';





import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        id: 1,
        image: [IMG1, IMG9],
        title: `Utilized React to develop an financial tracker system.
        Its main purpose is to assist users in keeping track of their financial expenses. - hosted on Github.`,
        github: 'https://github.com/jezreel-x',
        demo: 'https://expense-ui.netlify.app/',
    },
    {
        id: 2,
        image: [IMG2, IMG11, IMG10],
        title: 'My Personal Portfolio Website uses React and is deployed on Netlify.',
        github: 'https://github.com/jezreel-x',
        demo: 'https://mutosh-software.netlify.app/',
    },
    /*
    {
        id: 3,
        image: IMG3,
        title: `Qwarqo web application - a website that allows users to seek for rentals at the comfort of their 
        homes. Releases one from the shackles of endless movement in search of a rental. Try it today!!`,
        github: '#',
        demo: '#',
    },
    */
    {
        id: 4,
        image: [IMG12, IMG13, IMG23, IMG24, IMG25, IMG14, IMG15],
        title: `AirHousing Real Estate Property Management App - Developed and maintained a web app for a real estate start-up using
        React, Laravel, TailwindCSS, PHP, REST API - to allow users to digitally search for rentals and houses. Still in development
        process.`,
        github: 'https://github.com/jezreel-x',
        demo: '#',
    },
    {
        id: 5,
        image: [IMG16, IMG17, IMG18, IMG19, IMG20, IMG21, IMG22],
        title: `JaGedo - Build and maintain JaGedo, a live construction marketplace connecting customers with 1,700+ verified fundis,
        professionals, contractors and hardware suppliers across all 47 counties, spanning a React web app, a React Native mobile
        app (currently on Play Store and App Store) and a Node.js API.
        `,
        github: 'https://github.com/jagedos/JaGedov3-Designs/',
        demo: 'https://jagedo.co.ke',
    },
    {
        id: 6,
        image: [IMG4, IMG5, IMG6, IMG7, IMG8],
        title: `AirHousing Mobile App - Developed and maintained a mobile app for a real estate start-up using
        JSX, React, React Native, to allow users to digitally search for rentals and houses. Still in development
        on Expo Go.`,
        github: 'https://github.com/jezreel-x',
        demo: '#',
    },
    {
        id: 7,
        image: [IMG26, IMG27, IMG28],
        title: `Calories Tracker App - A robust, high-performance React app that allows users to input the name of a food item or 
        dish they've consumed, 
        along with details on proteins, calories, fat, carbs, etc. Users can then keep track of their calorie 
        intake and receive a warning message if their calorie limit is exceeded. The logic for inputting item data 
        and saving results in a card format has been implemented using React JSX.`,
        github: 'https://github.com/jezreel-x',
        demo: 'https://nutrition-and-calorie-tracker.netlify.app/',
    }
    

]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Projects</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                {/*
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                */}
                                {/* Swiper for Project Images */}
                                <Swiper
                                    style={{
                                        width: '100%',
                                        maxWidth: '250px',
                                        height: 'auto',
                                        objectFit: 'cover',
                                        borderRadius: '10px',
                                        backgroundColor: 'transparent',
                                        paddingBottom: '2px'
                                    }}
                                    modules={[Pagination]}
                                    spaceBetween={40}
                                    slidesPerView={1}
                                    pagination={{ clickable: true }}
                                    
                                >
                                    {image.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="portfolio__item-image">
                                                <img 
                                                src={image} 
                                                alt='#'
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                               
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;