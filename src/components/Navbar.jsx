import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import logo from "../assets/raviKumarLogo.webp"
import { FaSquareXTwitter } from "react-icons/fa6"
export default function Navbar() {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-lable="Home">
                    <img src={logo} className="mx-2" width={50} height={33}
                    alt="Logo" />
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text2xl">
                <a href="https://www.linkedin.com/in/paman-yuthmika"
                    target="_blank"
                    rel="nooper noreferrer"
                    aria-label="linkdin">
                    <FaLinkedin/>
                </a>

                <a href="https://github.com/pamanyuthmika"
                    target="_blank"
                    rel="nooper noreferrer"
                    aria-label="GitHub">
                    <FaGithub/>
                </a>

                <a href="http://www.instergram.com/in/yor-instergram-profile"
                    target="_blank"
                    rel="nooper noreferrer"
                    aria-label="Instagram">
                    <FaInstagram/>
                </a>

                <a href="http://www.twitter.com/in/yor-twitter-profile"
                    target="_blank"
                    rel="nooper noreferrer"
                    aria-label="Twitter">
                    <FaSquareXTwitter/>
                </a>

                

            </div>
        </nav>
    )
}