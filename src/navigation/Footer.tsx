"use client";
import React from "react";
import { Box } from "@chakra-ui/react";

import "animate.css";
import Link from "next/link";


export const Footer: React.FC = () => {
  return (
    <Box className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="footer-contact">
                        <h2>Get In Touch</h2>
                        <p><i className="fa fa-map-marker-alt"></i>Flat 1, Walton road , East Molesey. Surrey . United Kingdom . KT8 0HP</p>
                        <p><i className="fa fa-phone-alt"></i>+447596288123</p>
                        <p><i className="fa fa-envelope"></i>sparklingwhitelimite@gmail.com</p>
                        <div className="footer-social">
                            <Link href=""><i className="fab fa-twitter"></i></Link>
                            <Link href=""><i className="fab fa-facebook-f"></i></Link>
                            <Link href=""><i className="fab fa-youtube"></i></Link>
                            <Link href=""><i className="fab fa-instagram"></i></Link>
                            <Link href=""><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="footer-link">
                        <h2>Useful Link</h2>
                        <Link href="/">Homepage</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="/services">Our Services</Link>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="footer-link">
                        <h2>Useful Link</h2>
                        <Link href="/why-us">Why Hire Us</Link>
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/careers">Careers</Link>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="footer-form">
                        <h2>Stay Updated</h2>
                        <p>
                            Join our mailing list today and be the first to know about our promotions
                        </p>
                        <input className="form-control" placeholder="Email here" />
                        <button className="btn">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container footer-menu">
            <div className="f-menu">
                <Link href="">Terms of use</Link>
                <Link href="">Privacy policy</Link>
                <Link href="/faqs">FQAs</Link>
            </div>
        </div>
        <div className="container copyright">
            <div className="row">
                <div className="col-md-6">
                    <p>&copy; <Link href="https://sparklingwhite.com">Sparkling White LTD</Link>, All Right Reserved.</p>
                </div>
                <div className="col-md-6">
                    <p>Designed By <Link href="https://oduyemi.dev">Yemi</Link></p>
                </div>
            </div>
        </div>
    </Box>
  );
};
