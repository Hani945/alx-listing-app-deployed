import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container mx-auto px-4 py-8 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h4 className="font-semibold">LuxList</h4>
            <p>© {new Date().getFullYear()} LuxList — All rights reserved</p>
          </div>
          <div className="flex gap-4">
            <a href="#">About</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
