import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 py-8 px-4 text-center text-gray-400">
      <p>© {new Date().getFullYear()} Lyes. All rights reserved.</p>
    </footer>
  );
}