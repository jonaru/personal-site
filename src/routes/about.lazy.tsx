import { createLazyFileRoute, LazyRoute } from '@tanstack/react-router'
import { getImageURL } from '../utils/image-utils'
import { JSX } from 'react'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

const styleHidden: React.CSSProperties = {
  visibility: "hidden"
}

function About(): JSX.Element {
  return (
    <>
        <div className="gradient"></div>

        <div className="section-secondary-color">
            <section id="projects">
                <h2>About Jonatan Rugarn</h2>
                <article>
                    <div className="text">
                        <div style={styleHidden}><h4>extra line</h4></div>
                        <h3>Background</h3>
                        <p className="blackbox">I'm a computer engineer with a degree from Linköping University, and an engineering executive with ~10 years' of management experience. I love to to work with team development, and help teams and organizations progress to a high-performing state. 
                            I'm experienced in modern development practices, including both technology and processes; for example agile methodologies, implementation patterns, testing, TDD and CI/CD. 
                        </p>
                        <p className="blackbox">
                            I'm also the founder of <a href="http://lingonberrytalent.se">Lingonberry Talent Acquisition</a> - a small tech recruitment agency.
                        </p>
                        <p className="blackbox">I love to read, both fiction and non-fiction, go on hikes, and constantly evolve in my profession by learning new things. I'm a father of two kids, and currently live with my family in Alingsås.</p>
                        <h4>Favorite technologies include:</h4>
                        <ul>
                            <li>Java</li>
                            <li>C++</li>
                            <li>Javascript/Typescript</li>
                            <li>React</li>
                            <li>Html/CSS</li>
                        </ul>
                    </div>
                    <img src={getImageURL("profile.jpeg")} alt="Profile picture of Jonatan." />
                </article>
            </section>
        </div>

        <div className="gradient"></div>
    </>
)
}
