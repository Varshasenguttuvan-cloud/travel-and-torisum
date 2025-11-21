/*import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Travel India</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/packages">Packages</Link></li>
        <li><Link to="/trip-planner">Trip Planner</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}*/
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-6 mt-4">
      <h2>Travel India</h2>
  <a href="/" className="px-4 py-2 bg-white/20 backdrop-blur-md text-white font-semibold rounded-lg hover:bg-white/30 transition">
    Home
  </a>

  <a href="/destinations" className="px-4 py-2 bg-white/20 backdrop-blur-md text-white font-semibold rounded-lg hover:bg-white/30 transition">
    Destinations
  </a>

  <a href="/packages" className="px-4 py-2 bg-white/20 backdrop-blur-md text-white font-semibold rounded-lg hover:bg-white/30 transition">
    Packages
  </a>

  <a href="/trip-planner" className="px-4 py-2 bg-white/20 backdrop-blur-md text-white font-semibold rounded-lg hover:bg-white/30 transition">
    Trip Planner
  </a>

  <a href="/blogs" className="px-4 py-2 bg-white/20 backdrop-blur-md text-white font-semibold rounded-lg hover:bg-white/30 transition">
    Blogs
  </a>

  <a href="/about" className="px-4 py-2 bg-white/20 backdrop-blur-md text-white font-semibold rounded-lg hover:bg-white/30 transition">
    About
  </a>

  <a href="/contact" className="px-4 py-2 bg-white/20 backdrop-blur-md text-white font-semibold rounded-lg hover:bg-white/30 transition">
    Contact
  </a>
</nav>

  );
}

