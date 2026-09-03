import React from 'react';
import './testimonials.css';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

/**
 * "Mary Watiri" -> "MW". Stock photographs attached to real people's names read
 * as invented the moment anyone looks closely, so these are initials instead.
 */
const initials = (name) =>
    name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((word) => word[0])
        .join('')
        .toUpperCase();

const data = [
    {
        name: 'Mary Watiri',
        review: `As his co-worker, I was pleased to work with such an industrious individual. Showed prowess, zeal and passion in the 
        developing software solutions - while constantly initiating a strong determination to grow in this career, both
        from a personal and community perspective.`,
    },
    {
        name: 'Alex Maragia',
        review: `Showed extra due diligence in his work. Good in communication skills and team-collaboration. 
        Very proud.`,
    },
    {
        name: 'Kirinyet Brian',
        review: `Was pleased to work with one of the most brilliant minds in the Software Development industry, very committed
        and down to earth to solving problems that came his way. His technical skills were well beyond my expectations,
        I would highly recommend him to anyone.`,
    },

]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Reviews</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                {/* Decorative: the full name is stated right below it. */}
                                <div className="client__avatar" aria-hidden='true'>
                                    {initials(name)}
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials