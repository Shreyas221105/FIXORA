import { Link } from "react-router-dom";

function Navbar() {
  return (

    <nav className="bg-blue-700 text-white px-5 md:px-10 py-4 flex flex-wrap justify-between items-center gap-4">

      {/* LOGO */}
      <div className="flex items-center gap-2">

        <span className="text-3xl">
          🛠️
        </span>

        <h2 className="text-2xl md:text-3xl font-bold">
          Service<span className="text-yellow-400">Hub</span>
        </h2>

      </div>

      {/* NAV LINKS */}
      <div className="flex flex-wrap gap-4 md:gap-8 items-center text-sm md:text-lg">

        <Link
          to="/"
          className="hover:text-yellow-300 transition duration-300"
        >
          Home
        </Link>

        <Link
          to="/services"
          className="hover:text-yellow-300 transition duration-300"
        >
          Services
        </Link>

        <Link
          to="/booking"
          className="hover:text-yellow-300 transition duration-300"
        >
          Booking
        </Link>

        <Link
          to="/mybookings"
          className="hover:text-yellow-300 transition duration-300"
        >
          My Bookings
        </Link>

      </div>

    </nav>

  );
}

export default Navbar;