import { Link } from "@tanstack/react-router"
import {JSX} from "react"

export default function Header(): JSX.Element {
    return (
        <nav>
            <ul id="nav-list">
                <li>
                    <h1>
                    <Link to="/">
                    <span className="fa-solid fa-square-binary" aria-hidden="true"></span>
                    <span> Jonatan Rugarn</span>
                    </Link>
                    </h1>
                </li>
                <li><Link to="/#accelerator">Tech Job AI Accelerator</Link></li>
                <li><Link to="/about#work">Work</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/about#contact">Contact</Link></li>
                <li><a href="https://linkedin.com/in/jonatanrugarn">
                    <span className="fa-brands fa-linkedin" aria-hidden="true"></span>
                    <span className="sr-only">LinkedIn</span></a></li>
                <li><a href="https://github.com/jonaru">
                    <span className="fa-brands fa-square-github" aria-hidden="true"></span>
                    <span className="sr-only">Github</span></a></li>
                <li><a href="https://www.dropbox.com/scl/fi/4utw7gp7uimynlcfevj9h/Jonatan_Rugarn_CV.pdf?rlkey=phqy6s6hzbt5r08wwyo2gb75f&st=ep105pu5&dl=0" className="button">Resume</a></li>
            </ul>
        </nav>
    )
}