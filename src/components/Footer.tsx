import { Link } from "react-router";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Footer() {


    return (

        <footer className="flex flex-col bg-black text-white px-5">
        

        <div className="flex flex-row justify-between py-5 border-b-1">
  
        <div>
          <h4 className="font-extrabold pb-3">Explore</h4>
          <ul>
            <li><a href="/catalog">Browse Listings</a></li>
            <li><a href="/agents">Find an Agent</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
  
        <div>
          <h4 className="font-extrabold pb-3">Legal</h4>
          <ul>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/ccpa-policy">CCPA Privacy Policy</Link></li>
            <li><Link to="/disclaimer">Legal Disclaimer</Link></li>
            <li><Link to="/sitemap">Sitemap</Link></li>
          </ul>
        </div>
  
        <div>
          <h4 className="font-extrabold pb-3">Connect</h4>
          <div className="flex gap-3">
            <a className="hover:text-pink-500 transition" href="https://www.instagram.com/" target="blank"><FaInstagram/></a>
            <a className="hover:text-blue-600 transition" href="https://github.com/shefket-mustafa" target="blank"><FaGithub/></a>
            <a  href="https://www.linkedin.com/in/shefket-mustafa-81356a360/" target="blank"><FaLinkedin/></a>
          </div>
        </div>
  
        </div>

        <div className="flex items-center text-xs py-5 max-w-5xl mx-auto ">
          <p>
            casaFind is not a real estate broker, mortgage broker or mortgage lender, and casaFind does not aid or assist borrowers in obtaining, solicit borrowers or lenders for, negotiate or make loans secured by liens on real property.
          </p>
        </div>

        <div className="flex justify-center border-t-1 py-5">
          <p>© casaFind - All rights reserved.</p>
        </div>
      </footer>
    )
}