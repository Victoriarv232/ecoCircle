"use client";

import Link from "next/link";
import { House, MessageCircle, Bookmark, Handshake, User } from "lucide-react";
import "../../styles/navbar.css"; // seu CSS específico da navbar

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          EcoCircle
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                <House /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/messages" className="nav-link">
                <MessageCircle /> Mensagens
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/bookmarks" className="nav-link">
                <Bookmark /> Favoritos
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/partners" className="nav-link">
                <Handshake /> Parceiros
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/profile" className="nav-link">
                <User /> Perfil
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
