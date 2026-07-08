import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content-area">
          {/* Logo area */}

          <div className="logo-section">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/logo.svg" // path inside public/
                  alt="My Logo"
                  width={153}
                  height={40}
                />
              </Link>
            </div>
            <div className="footer-link">
              <ul>
                <li>
                  <Link href="/terms-and-conditions">Terms</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy</Link>
                </li>
                <li>
                  <Link href="https://flockdesk.com/blog/">Blog</Link>
                </li>
              </ul>
            </div>
            <p>@2026 FlockDesk . All rights reserved</p>
          </div>

          <div className="conncet-with">
            <div className="powered-by">
              <span>Powered by</span>
              <Link href="https://www.mindbees.com/">
                {" "}
                <img src="images/mindbees-logo.png" alt="" />
              </Link>
            </div>

            <div className="social">
              <Link href="/" target="_blank" rel="noopener noreferrer">
                <i className="icon-facebook"></i>
              </Link>
              <Link href="/" target="_blank" rel="noopener noreferrer">
                <i className="icon-twitter"></i>
              </Link>
              <Link href="/" target="_blank" rel="noopener noreferrer">
                <i className="icon-linkein"></i>
              </Link>
              <Link href="/" target="_blank" rel="noopener noreferrer">
                <i className="icon-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
