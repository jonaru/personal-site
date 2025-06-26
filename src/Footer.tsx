import {JSX} from "react"

export default function Footer(): JSX.Element {
    return (
        <footer>         
            <h2>Jonatan Rugarn &middot; Engineering Executive</h2>
            <ul>
                <li><a href="https://linkedin.com/in/jonatanrugarn">
                    <span className="fa-brands fa-linkedin" aria-hidden="true"></span>
                    <span className="sr-only">LinkedIn</span></a></li>
                <li><a href="https://github.com/jonaru">
                    <span className="fa-brands fa-square-github" aria-hidden="true"></span>
                    <span className="sr-only">Github</span></a></li>
                <li><a href="mailto:jonatan.rugarn@gmail.com">
                    <span className="fa-solid fa-envelope" aria-hidden="true"></span>
                    <span className="sr-only">E-mail</span></a></li>
            </ul>
            <p><small>© 2025 Jonatan Rugarn. All rights reserved.</small></p>
    </footer>
    )
}