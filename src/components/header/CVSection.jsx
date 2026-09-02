import React from 'react';
import CV from '../../assets/MUTONGA-CV.pdf'

// A recruiter who wants the CV should not have to email and wait for it. The
// download sits first because it is the action most visitors came to take.
const CVSection = () => {
    return (
        <div>
            <div className='cta'>
                <a href={CV} download='Mutonga-Romeo-CV.pdf' className='btn'>Download CV</a>
                <a href="#contact" className='btn btn-primary'>Get in touch</a>
            </div>
        </div>
    )
}

export default CVSection;
