import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content-area">
          {/* Logo area */}
          <div className="logo">
            <Link href="/">
              <Image
                src="/logo.svg" // path inside public/
                alt="My Logo"
                width={171}
                height={44}
              />
            </Link>
            <p>
              The complete SaaS solution for task management and team
              productivity.
            </p>
            <span>© 2025 FlockDesk. All rights reserved.</span>
          </div>

          <div className="footer-link">
            <h6>Product</h6>
            <ul>
              <li>
                <Link href="/">Features</Link>
              </li>
              <li>
                <Link href="/">Pricing</Link>
              </li>
              <li>
                <Link href="/">Mobile App</Link>
              </li>
              <li>
                <Link href="/">Integrations</Link>
              </li>
              <li>
                <Link href="/">API</Link>
              </li>
            </ul>
          </div>

          <div className="footer-link">
            <h6>Company</h6>
            <ul>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Careers</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">Press</Link>
              </li>
            </ul>
          </div>

          <div className="footer-link">
            <h6>Support</h6>
            <ul>
              <li>
                <Link href="/">Help Center</Link>
              </li>
              <li>
                <Link href="/">Documentation</Link>
              </li>
              <li>
                <Link href="/">Community</Link>
              </li>
              <li>
                <Link href="/">Status</Link>
              </li>
              <li>
                <Link href="/">Contact Support</Link>
              </li>
            </ul>
          </div>

          <div className="footer-link">
            <h6>Legal</h6>
            <ul>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Terms of Service</Link>
              </li>
              <li>
                <Link href="/">Cookie Policy</Link>
              </li>
            </ul>
          </div>

          <div className="footer-link start-tirial">
            <h6 className="sub-heading">Start your free trial today</h6>
            <div className="cta-btn">
              <Link href="/" className="button-solid-secondary button-md">
                Start Free Trial
              </Link>

              <Link href="/" className="button-solid-primary button-md">
                Live Chat
              </Link>
            </div>
          </div>

          <div className="conncet-with">
            <h6 className="sub-heading">Connect with</h6>
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <i className="icon-facebook"></i> Facebook
            </Link>
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <i className="icon-twitter"></i> X
            </Link>
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <i className="icon-linkein"></i> LinkedIn
            </Link>
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <i className="icon-instagram"></i> Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
