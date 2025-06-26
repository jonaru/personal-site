import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Work,
})

function Work() {
  return (
    <>
        <section id="intro">
            <p className="name">Hi, my name is <span>Jonatan Rugarn.</span></p>
            <h2>I help engineering teams reach the next level.</h2>
            <p>I'm an engineering executive specializing in team development, ways of working, and technical excellence.</p>
            <p>Currently, I'm on parental leave, taking care of two wonderful kids.</p>
        </section>
        
        <div className="gradient"></div>

        <div className="section-secondary-color">
            <section id="projects">
                <h2>Highlighted examples of work that I'm proud of</h2>
                <article>
                    <div className="text">
                        <h4>Team development and coaching</h4>
                        <h3>Kognic</h3>
                        <p className="blackbox">
                            Kognic is a sensor fusion annotation SaaS platform. I helped teams increase their velocity by multiple factors as measured by frequency of deliveries to production, through coaching, workshops and tweaking the way of working together with the team.
                            I also helped the team increase value and focus on the right thing by launching extended teams with stakeholders for quick iteration and feedback cycles. In total it is a huge difference in speed and value delivery compared to when I started.
                            I worked with broadening and deepening skills by arranging various trainings and setting up a mentorship program.
                        </p>
                        <h4>Key skills used:</h4>
                        <ul>
                            <li>Team dynamics</li>
                            <li>Agile methodologies</li>
                            <li>Facilitating autonomy</li>
                            <li>Extended teams</li>
                        </ul>
                    </div>
                    <img src="./img/kognic.png" alt="Screenshot of the Wall of Wonder." />
                </article>
                <article className="reverse">
                    <div className="text">
                        <h4>Technical coaching</h4>
                        <h3>Zenseact</h3>
                        <p className="blackbox">
                            Zenseact is an autonomous driving company. I initiated a transition from Matlab/Simulink to C++ within my product area, which enabled auto merging and much better CI. 
                            Later the whole company decided to make the same transition. <br/><br/>
                            I also helped the teams raise code quality by introducing clean code concepts and test driven development, which made a noticeable difference in quality and maintainability in several of our components.
                        </p>
                        <h4>Key skills used:</h4>
                        <ul className="ul">
                            <li>Clean Code</li>
                            <li>CI/CD</li>
                            <li>Refactoring</li>
                            <li>Test driven development</li>
                        </ul>
                    </div>
                    <img className="img" src="./img/zenseact.png" alt="Screenshot of the Wall of Wonder." />
                </article>
                <article>
                    <div className="text">
                        <h4>Enterprise leadership</h4>
                        <h3>Ericsson</h3>
                        <p className="blackbox">
                            I created a group that provided agile training throughout the organization. 
                            For example we trained managers, product owners, scrum masters and others for certification according to Scrum.org standards. 
                            This was very appreciated and accelerated the agile transformation. <br/><br/>
                            I also had an assignment to drive a strategic focus area called A Great Place to Work for a 1000+ people organization. 
                            This was successful and I think the key was the bottom-up perspective. 
                            I heard many positive comments such as “it is great that the managers listen to us”. <br/><br/>
                            I have received several awards for my accomplishments at Ericsson, including Exceptional Performance, Key Contributor and Leadership Talent.
                        </p>
                        <h4>Key skills used:</h4>
                        <ul>
                            <li>Leadership</li>
                            <li>Teaching</li>
                            <li>Organizational change management</li>
                        </ul>
                    </div>
                    <img src="./img/ericsson.jpeg" alt="Screenshot of the Wall of Wonder." />
                </article>
            </section>
        </div>

        <div className="gradient"></div>

        <div className="section-tertiary-color">
            <section id="contact">
                <h2>Contact me</h2>
                <p>I'm always interested in hearing about success stories, or struggles, in developing software teams and organizations.</p>
                <p><a href="mailto:jonatan.rugarn@gmail.com" className="button">Email me</a></p>
                
                {/* <form action="">
                    <label for="fname">Name</label>
                    <input type="text" id="fname" name="name" placeholder="Your name..">
                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Message.."></textarea>
                    <div class="submit">
                        <input class="button submit" type="submit" value="Submit">
                    </div>
                </form> */}
                
            </section>
            <div className="gradient"></div>  
        </div>
    </>
    )
}
