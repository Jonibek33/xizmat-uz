"use client";

import Link from "next/link";
import "./style.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h3>XIZMAT.UZ</h3>
      </div>
      <div className="links">
        <Link href="/">Главная</Link>
        <Link href="/services">Найти специалиста</Link>
        <Link href="/specialist-form">Стать специалистом</Link>
      </div>
      <div className="actions">
        {/* <Link href="#" className="login">Войти</Link> */}
        <Link href="#" className="signup">Регистрация</Link>
      </div>
    </div>
  );
}
