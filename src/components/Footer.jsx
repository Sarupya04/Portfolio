import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-6 border-t border-white">
      <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
}
