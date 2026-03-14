import { createLazyFileRoute } from '@tanstack/react-router'
import { getImageURL } from '../utils/image-utils'
import { JSX } from 'react'

export const Route = createLazyFileRoute('/')({
  component: Work,
})

function Work(): JSX.Element {
  return (
    <>
        <section id="intro">
            <p className="name">Hi, my name is <span>Jonatan Rugarn.</span></p>
            <h2>I help engineering teams reach the next level.</h2>
            <p>I'm an engineering executive specializing in team development, ways of working, and technical excellence.</p>
            <p>I've also run a tech recruitment agency and published the Tech Job AI Accelerator.</p>
        </section>
        
        <div className="gradient"></div>

        <div className="section-secondary-color">
        <section id="accelerator">
            <div className="hero">
                <h2>Upgrade Your Tech Job Search With AI — Without Guesswork</h2>
                <p>A free guide with 5 proven AI prompts to help engineers get more interviews and better offers.</p>
                <a href="https://www.dropbox.com/scl/fi/kjpfnc2gpw3mgiiuu0f1m/Five-prompts.pdf?rlkey=lqlu1bfk8eg8s9pk25r4x3fjo&st=n0xryijj&dl=0" target="_blank" rel="noopener noreferrer">
                    <button>👉 Download the Free Guide</button>
                </a>
                <p className="small-text">No credit card. No hidden catch.</p>
            </div>
            <div className="problem">
                <h2>Why Most Engineers Struggle in Job Searches</h2>
                <p>You can be great at your job and still struggle to get interviews.</p>
                <p>Not because you lack skill — but because:</p>
                <ul>
                    <li>Your resume undersells your impact</li>
                    <li>Your answers lack structure</li>
                    <li>You don’t tailor applications</li>
                    <li>You feel unprepared for interviews</li>
                    <li>You’re unsure how to negotiate</li>
                </ul>
                <p>Small communication gaps lead to big missed opportunities.</p>
                <p>This guide helps you close them.</p>
            </div>
            <div className="what-you-get">
                <h2>What’s Inside the Free Guide</h2>
                <p>In this practical PDF, you’ll learn how to use AI to:</p>
                <ul>
                    <li>✅ Turn daily work into strong achievements</li>
                    <li>✅ Tailor your resume for each role</li>
                    <li>✅ Prepare confident interview answers</li>
                    <li>✅ Practice with a realistic mock interviewer</li>
                    <li>✅ Approach salary negotiations professionally</li>
                </ul>
                <p>No fluff. No generic advice. Just tools you can use immediately.</p>
            </div>
            <div className="how-it-works">
                <h2>How This Guide Helps You</h2>
                <ol>
                    <li>1️⃣ Download the PDF</li>
                    <li>2️⃣ Copy the prompts</li>
                    <li>3️⃣ Use them with ChatGPT or similar tools</li>
                    <li>4️⃣ Refine the output</li>
                    <li>5️⃣ Apply with confidence</li>
                </ol>
                <p>Most people see improvements within days.</p>
            </div>
            <div className="primary-cta">
                <h2>Get the Free Guide</h2>
                <p>Ready to upgrade your job search?</p>
                <p>Download the guide and start using these tools today.</p>
                <a href="https://www.dropbox.com/scl/fi/kjpfnc2gpw3mgiiuu0f1m/Five-prompts.pdf?rlkey=lqlu1bfk8eg8s9pk25r4x3fjo&st=n0xryijj&dl=0" target="_blank" rel="noopener noreferrer">
                    <button>👉 Download the Free Guide</button>
                </a>
            </div>
        </section>
        </div>
        <div className="gradient"></div>
        <div className='section-tertiary-color'>
            <section id="accelerator">
            <div className="soft-upsell">
                <h2>Want the Complete System?</h2>
                <p>This free guide is just the beginning.</p>
                <p>If you want a full, structured system for landing better tech roles — including advanced templates, workflows, and interview frameworks — you’ll soon be able to access:</p>
                <h3 id="tech-job-ai-accelerator">The Tech Job AI Accelerator</h3>
                {/* <p>Join the list to get early access and founder pricing.</p>
                <button>Join the List</button>
                <p className="small-text">No spam. Unsubscribe anytime.</p> */}
            </div>
            </section>
        </div>

        <div className="gradient"></div>
    </>
    )
}
