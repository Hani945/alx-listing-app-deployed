import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">LuxList</Link>

        <nav className="hidden md:flex gap-4 items-center">
          <a className="text-sm" href="#">Rooms</a>
          <a className="text-sm" href="#">Villas</a>
          <a className="text-sm" href="#">Chalets</a>
          <a className="text-sm" href="#">Countryside</a>
        </nav>

        <div className="flex items-center gap-3">
          <input
            aria-label="Search properties"
            className="hidden sm:inline-block border rounded px-3 py-2 text-sm w-48 focus:outline-none focus:ring"
            placeholder="Search city, state..."
          />
          <button className="text-sm px-3 py-2">Sign in</button>
          <button className="bg-blue-600 text-white px-3 py-2 rounded text-sm">Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
