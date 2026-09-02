import React, { useState, useEffect, useCallback } from 'react';
import './portfolio.css';
// import '../testimonials/testimonials.css';


import IMG1 from '../../assets/portfolio-photo.png';

// AirHousing Images
import IMG4 from '../../assets/portfolio-photo(4).jpg';
import IMG5 from '../../assets/portfolio-photo(5).jpg';
import IMG6 from '../../assets/portfolio-photo(6).jpg';
import IMG7 from '../../assets/portfolio-photo(7).jpg';
import IMG8 from '../../assets/portfolio-photo(8).jpg';
import IMG9 from '../../assets/portfolio-photo(9).png';
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
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Respect the OS setting rather than auto-advancing at everyone regardless.
const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;


// Ordered by weight, not by date. The first card is the one a recruiter reads,
// and often the only one — so the live commercial platform leads.
//
// `github`/`demo` set to null hides that button rather than rendering a dead '#'
// link. A button that goes nowhere is worse than no button at all.
//
// `portrait: true` marks phone screenshots so they stay narrow — widening a
// portrait screenshot to the full card just scales it past its own resolution.
const data = [
    {
        id: 1,
        image: [IMG16, IMG17, IMG18, IMG19, IMG20, IMG21, IMG22],
        title: 'JaGedo — Construction Marketplace',
        stack: 'React · React Native · TypeScript · Node.js · PostgreSQL · Prisma · M-Pesa',
        description: `A live marketplace connecting customers with 1,700+ verified fundis, professionals,
        contractors and hardware suppliers across all 47 counties — a React web app, a React Native mobile app
        published on Play Store and App Store, and a Node.js API. I work across all three: REST APIs over
        PostgreSQL, M-Pesa payments with escrow released against approved milestones, role-based access for five
        user types, a notifications system spanning SMS, email and push, and the admin reporting module with
        trend charts, date-range filters and CSV, Excel and PDF export.`,
        github: null,
        demo: 'https://jagedo.co.ke',
    },
    {
        id: 2,
        image: [IMG12, IMG13, IMG23, IMG24, IMG25, IMG14, IMG15],
        title: 'AirHousing — Property Management Platform',
        stack: 'React · Laravel · PHP · TailwindCSS · REST API',
        description: `A web platform for a real estate start-up letting users search rentals and houses
        digitally, with a management interface for landlords' listings. Built and maintained the front end
        against a Laravel REST API.`,
        github: null,
        demo: null,
    },
    {
        id: 3,
        image: [IMG4, IMG5, IMG6, IMG7, IMG8],
        portrait: true,
        title: 'AirHousing — Mobile App',
        stack: 'React Native · Expo · REST API',
        description: `The companion mobile application for AirHousing, bringing rental search, account creation
        and listing management to Android and iOS over the same REST API.`,
        github: null,
        demo: null,
    },
    {
        id: 4,
        image: [IMG1, IMG9],
        title: 'Expense Tracker',
        stack: 'React · JavaScript',
        description: `A personal finance tracker for logging and categorising expenses, with running totals and
        a breakdown by category.`,
        github: 'https://github.com/jezreel-x/expense-tracker',
        demo: 'https://expense-ui.netlify.app/',
    },
    {
        id: 5,
        image: [IMG26, IMG27, IMG28],
        title: 'Calorie Tracker',
        stack: 'React · JavaScript',
        description: `A nutrition tracker where users log a food item with its protein, calorie, fat and carb
        values, keep a running daily total, and are warned when they pass their limit.`,
        github: 'https://github.com/jezreel-x/calorie-tracker-app',
        demo: 'https://nutrition-and-calorie-tracker.netlify.app/',
    }
]


const Portfolio = () => {
    // The enlarged screenshot, or null when nothing is open.
    const [lightbox, setLightbox] = useState(null);

    const close = useCallback(() => setLightbox(null), []);

    // Escape closes it, and the page behind must not scroll while it is open —
    // otherwise dismissing the overlay leaves you somewhere else on the page.
    useEffect(() => {
        if (!lightbox) return undefined;

        const onKeyDown = (e) => {
            if (e.key === 'Escape') close();
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [lightbox, close]);

    return (
        <section id='portfolio'>
            <h5>My Recent Projects</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, portrait, title, stack, description, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <Swiper
                                    className={portrait ? 'portfolio__swiper portfolio__swiper--portrait' : 'portfolio__swiper'}
                                    modules={[Pagination, Navigation, Autoplay]}
                                    spaceBetween={40}
                                    slidesPerView={1}
                                    loop={image.length > 1}
                                    pagination={{ clickable: true }}
                                    navigation={image.length > 1}
                                    autoplay={
                                        prefersReducedMotion || image.length < 2
                                            ? false
                                            : {
                                                delay: 3500,
                                                // Keep cycling after someone clicks an arrow, and hold
                                                // still while they are actually looking at it.
                                                disableOnInteraction: false,
                                                pauseOnMouseEnter: true,
                                            }
                                    }
                                >
                                    {image.map((src, index) => (
                                        <SwiperSlide key={index}>
                                            <button
                                                type='button'
                                                className='portfolio__item-image'
                                                onClick={() => setLightbox({ src, alt: `${title} screenshot ${index + 1}` })}
                                                aria-label={`Enlarge ${title} screenshot ${index + 1}`}
                                            >
                                                <img src={src} alt={`${title} screenshot ${index + 1}`} />
                                            </button>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <h3>{title}</h3>
                                <p className="portfolio__item-stack">{stack}</p>
                                <p className="portfolio__item-desc">{description}</p>
                                <div className="portfolio__item-cta">
                                    {github && (
                                        <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                                    )}
                                    {demo && (
                                        <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                                    )}
                                </div>
                            </article>
                        )
                    })
                }
            </div>

            {lightbox && (
                <div
                    className='portfolio__lightbox'
                    onClick={close}
                    role='dialog'
                    aria-modal='true'
                    aria-label={lightbox.alt}
                >
                    <button
                        type='button'
                        className='portfolio__lightbox-close'
                        onClick={close}
                        aria-label='Close'
                    >
                        &times;
                    </button>
                    {/* Stops a click on the image itself from closing the overlay. */}
                    <img
                        src={lightbox.src}
                        alt={lightbox.alt}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    )
}

export default Portfolio;