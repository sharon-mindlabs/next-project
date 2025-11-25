"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`main-header ${scrolled ? "active" : ""}`}>
      <div className="container">
        <div className="header-wapper">
          {/* Logo */}
          <div className="logo">
            <Link href="/">
              <Image src="/logo.svg" alt="My Logo" width={171} height={44} />
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
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/integrations">Integrations</Link>
            <Link href="/resources">Resources</Link>

            {/* Mobile Sign In inside menu */}
            <Link
              href="/signin"
              className="mobile-signin button-solid-primary button-md"
            >
              Sign In
            </Link>
          </nav>

          {/* Desktop Sign In */}
          <div className="desktop-signin">
            <Link href="/signin" className="button-solid-primary button-md">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
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
