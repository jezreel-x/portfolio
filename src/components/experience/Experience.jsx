import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

// Each skill carries WHERE it was used rather than a self-assigned proficiency
// label. "Advanced" is an opinion; "payment reconciliation in production" is
// something an interviewer can ask a follow-up question about.
const building = [
    { name: 'TypeScript & JavaScript (ES6+)', note: 'Primary languages, front end and back end' },
    { name: 'React & React Native', note: 'Live web app and mobile app on Play Store and App Store' },
    { name: 'Node.js & Express', note: 'REST APIs documented with Swagger/OpenAPI' },
    { name: 'PostgreSQL & Prisma ORM', note: 'Relational schema design, migrations, transactions' },
    { name: 'Tailwind CSS & Radix UI', note: 'Reusable component library across five user types' },
    { name: 'TanStack Query, React Hook Form, Zod', note: 'Server state and validated forms' },
    { name: 'Recharts, data tables & virtualisation', note: 'Charts and long lists that stay responsive at scale' },
    { name: 'PHP, Laravel & MySQL', note: 'Earlier work on the AirHousing platform' },
];

const platform = [
    { name: 'M-Pesa (Daraja) integration', note: 'STK push, callbacks, reconciliation, escrow release' },
    { name: 'Notifications systems', note: 'Bulk SMS, transactional email, push and in-app — template-driven, routed per event' },
    { name: 'Reports & analytics', note: 'Aggregation APIs and dashboards, with CSV, Excel and PDF export' },
    { name: 'CI/CD & automated deployment', note: 'GitHub Actions, typecheck and test gates, multi-environment releases, rollback' },
    { name: 'Authentication & authorization', note: 'JWT/JWKS, OAuth2, TOTP 2FA, role-based access control' },
    { name: 'Testing', note: 'Vitest, Jest, Node test runner — unit, integration and smoke suites' },
    { name: 'Docker, Linux & AWS S3', note: 'Containerised services, presigned uploads and signed access' },
    { name: 'Git & Agile practice', note: 'Feature branching, pull request review, Scrum ceremonies' },
];

const SkillList = ({ heading, items }) => (
    <div className="experience__frontend">
        <h3><i>{heading}</i></h3>
        <div className="experience__content">
            {items.map(({ name, note }) => (
                <article className="experience__details" key={name}>
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                        <h4>{name}</h4>
                        <small className="text-light">{note}</small>
                    </div>
                </article>
            ))}
        </div>
    </div>
);

const Experience = () => {
    return (
        <section id='experience'>
            <h5>Skills and Competencies</h5>
            <h2>Technical Skills</h2>

            <div className="container experience__container">
                <SkillList heading="Languages and frameworks" items={building} />
                <SkillList heading="Platform and practice" items={platform} />
            </div>
        </section>
    )
}

export default Experience
