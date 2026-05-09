import { Link } from "react-router-dom";
import { getSiteConfig } from "../config/siteConfig";

const Footer: React.FC = () => {
  const config = getSiteConfig();

  return (
    <footer className="bg-slate-950 text-slate-200 py-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-3 items-start">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-white">Movies Gig</h2>
            <p className="max-w-lg text-sm leading-7 text-slate-400">
              {config.footerDescription}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link to="/privacy" className="hover:text-yellow-400">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-yellow-400">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
            <p className="text-sm leading-7 text-slate-400">
              Email us at <a href={`mailto:${config.email}`} className="text-yellow-400 underline">{config.email}</a>
              <br />
              Thank you for joining our cinematic community.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Movies Gig. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
