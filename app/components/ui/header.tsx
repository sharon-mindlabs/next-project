"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeVideo();
    };

    if (videoOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoOpen]);

  const openVideo = () => setVideoOpen(true);
  const closeVideo = () => {
    setVideoOpen(false);
    if (videoRef.current) {
      try {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      } catch (e) {}
    }
  };

  return (
    <>
      <header className={`main-header ${scrolled ? "active" : ""}`}>
        <div className="container">
          <div className="header-wapper">
            {/* Logo */}
            <div className="logo">
              <Link href="/">
                <Image
                  src="/logo-2.svg"
                  alt="My Logo"
                  width={181}
                  height={54}
                />
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <button
              className={`mobile-toggle ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Navigation */}
            <nav className={`menu-navigation ${menuOpen ? "show" : ""}`}>
              <Link href="/#features-section">Features</Link>
              <Link href="/#how-it-works">How it Works</Link>
              <Link href="https://blog.flockdesk.com/">Blog</Link>
              {/* Mobile Sign In inside menu */}

              <div className="mobile-signin">
                <Link
                  href="/enquiry"
                  title="Start Free Trial"
                  className="button btn-primary btn-sm"
                >
                  Start Free Trial
                </Link>

                <button
                  title="Watch Demo"
                  className="video-button button btn-primary-line btn-sm"
                  onClick={openVideo}
                >
                  Watch Demo
                </button>
              </div>
            </nav>

            {/* Desktop Sign In */}
            <div className="desktop-signin">
              <Link
                href="/enquiry"
                title="Start Free Trial"
                className="button btn-primary btn-sm"
              >
                Start Free Trial
              </Link>
            </div>

            <div className="desktop-video">
              <button
                title="Watch Demo"
                className="video-button button btn-primary-line btn-sm"
                onClick={openVideo}
              >
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {videoOpen && (
        <div
          onClick={closeVideo}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: 20,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(1100px, 100%)",
              maxWidth: "1100px",
              aspectRatio: "16/9",
              background: "#000",
              position: "relative",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <button
              onClick={closeVideo}
              aria-label="Close video"
              style={{
                position: "absolute",
                right: 4,
                top: 4,
                zIndex: 2,
                background: "rgba(255,255,255,0.1)",
                border: "none",
                color: "#000",
                fontSize: 20,
                width: 42,
                height: 42,
                borderRadius: 18,
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <video
              ref={videoRef}
              src="/videos/flock-demo.mp4"
              controls
              autoPlay
              playsInline
              style={{ width: "100%", height: "100%", display: "block" }}
            />
          </div>
        </div>
      )}
    </>
  );
}

// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <header className={`main-header ${scrolled ? "active" : ""}`}>
//       <div className="container">
//         <div className="header-wapper">
//           {/* Left - Logo */}
//           <div className="logo">
//             <Link href="/">
//               <Image
//                 src="/logo.svg" // path inside public/
//                 alt="My Logo"
//                 width={171}
//                 height={44}
//               />
//             </Link>
//           </div>
//           {/* Center - Navigation */}
//           <nav className="menu-navigation">
//             <Link href="/">Home</Link>
//             <Link href="/about">About</Link>
//             <Link href="/features">Features</Link>
//             <Link href="/pricing">Pricing</Link>
//             <Link href="/integrations">Integrations</Link>
//             <Link href="/resources">Resources</Link>
//           </nav>
//           {/* Right - Sign In */}
//           <div>
//             <Link href="/signin" className="button-solid-primary button-md">
//               Sign In
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
