import React from 'react'
import './about.css'
import myImage from '../../assets/profile-photo.jpg';
import { FaAward } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={myImage} alt='' />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>2+ years in production</small>
                        </article>


                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Reach</h5>
                            <small>1,700+ providers served across all 47 counties</small>
                        </article>

                        <article className='about__card'>
                            <TbCertificate className='about__icon' />
                            <h5>Shipped</h5>
                            <small>Web, mobile and API — live on Play Store and App Store</small>
                        </article>
                    </div>

                    <p>
                    Software Engineer building production web, mobile and API systems from Nairobi. I work in
                    TypeScript and React on the front end, React Native for mobile, and Node.js, Express and
                    PostgreSQL on the back end — currently on a live construction marketplace serving 1,700+
                    verified providers across Kenya.
                    </p>


                    <p>
                    Most of my work sits where money and data meet the interface: M-Pesa payment integration with
                    reconciliation, escrow released against approved milestones, role-based access across five user
                    types, and reporting dashboards where a displayed total has to reconcile with the line items
                    beneath it. I care about the numbers being right as much as the screen looking right.
                    </p>


                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;