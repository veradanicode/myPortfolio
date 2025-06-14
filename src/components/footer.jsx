import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-purple-100 via-white to-pink-50 text-gray-700 px-6 py-10 font-sans mt-20">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p className="text-sm sm:text-base">
          Crafted with ❤️ by <span className="font-semibold">Vera</span>
        </p>
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Vera. All rights reserved. Built using React & TailwindCSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
