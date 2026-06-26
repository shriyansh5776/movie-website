import { Copyright } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex font-light justify-between mx-20  border-neutral-700  border-t py-4 text-neutral-600">
      <div className="flex">
        <Copyright />
        <p>2026 NoirFlux.</p>
        <p>All rights reserved</p>
      </div>
      <nav className="flex gap-4">
        <button className="cursor-pointer">Terms</button>
        <button className="cursor-pointer">Privacy</button>
        <button className="cursor-pointer">Help</button>
      </nav>
    </footer>
  );
};

export default Footer;
