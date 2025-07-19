"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Header: React.FC = () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/why-us", label: "Why Hire Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="shadow-sm" style={{ backgroundColor: "#004646" }}>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#004646" }}>
        <div className="container-fluid">
          <Link href="/" passHref legacyBehavior>
            <a className="navbar-brand d-flex align-items-center">
              <Image src="/images/logo/logo.png" alt="Logo" width={70} height={40} />
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarMain">
            <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-3">
              {navItems.map((item) => (
                <li className="nav-item" key={item.href}>
                  <Link href={item.href} passHref legacyBehavior>
                    <a className="nav-link text-light">{item.label}</a>
                  </Link>
                </li>
              ))}

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link href="/careers" passHref legacyBehavior>
                      <a className="dropdown-item">Careers</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faqs" passHref legacyBehavior>
                      <a className="dropdown-item">FAQs</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
