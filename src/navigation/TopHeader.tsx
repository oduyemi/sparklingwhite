"use client";
import React from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export const TopHeader: React.FC = () => {
  return (
    <div className="bg-dark text-light py-2">
      <div className="container-fluid d-flex justify-content-end align-items-center flex-wrap gap-3">
        <Link
          href="tel:+447596288123"
          className="text-decoration-none text-light small d-flex align-items-center gap-2"
        >
          <FaPhoneAlt /> +44 7596 288123
        </Link>

        <Link
          href="mailto:sparklingwhitelimite@gmail.com"
          className="text-decoration-none text-light small d-flex align-items-center gap-2"
        >
          <FaEnvelope /> sparklingwhitelimite@gmail.com
        </Link>

        <div className="d-flex gap-3">
          <Link href="#" className="text-light fs-5"><FaTwitter /></Link>
          <Link href="#" className="text-light fs-5"><FaFacebookF /></Link>
          <Link href="#" className="text-light fs-5"><FaInstagram /></Link>
          <Link href="#" className="text-light fs-5"><FaTiktok /></Link>
        </div>
      </div>
    </div>
  );
};
