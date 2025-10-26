// src/components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { House, MessageCircle, Bookmark, Handshake, User } from "lucide-react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success px-3 shadow-sm">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand fw-bold">
          ecoCircle
        </Link>

        <ul className="navbar-nav ms-auto d-flex flex-row align-items-center gap-3">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              <House size={22} />
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/chat" className="nav-link">
              <MessageCircle size={22} />
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/materials" className="nav-link">
              <Bookmark size={22} />
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/exchange" className="nav-link">
              <Handshake size={22} />
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/profile" className="nav-link">
              <User size={22} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
