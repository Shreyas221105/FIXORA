import React from "react";

function Footer() {

  return (

    <footer className="bg-gray-900 text-white mt-16">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>

          <h2 className="text-3xl font-bold">
            🛠️ Service<span className="text-yellow-400">Hub</span>
          </h2>

          <p className="mt-4 text-gray-400 leading-7">
            Your one-stop solution for trusted home services.
            Book electricians, plumbers, AC repair,
            cleaners and more with ease.
          </p>

        </div>

        {/* QUICK LINKS */}
        <div>

          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li className="hover:text-white cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-white cursor-pointer transition">
              Services
            </li>

            <li className="hover:text-white cursor-pointer transition">
              Booking
            </li>

            <li className="hover:text-white cursor-pointer transition">
              My Bookings
            </li>

          </ul>

        </div>

        {/* SERVICES */}
        <div>

          <h3 className="text-xl font-semibold mb-4">
            Popular Services
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>⚡ Electrician</li>
            <li>🚰 Plumber</li>
            <li>❄️ AC Repair</li>
            <li>🧹 Home Cleaning</li>

          </ul>

        </div>

        {/* CONTACT */}
        <div>

          <h3 className="text-xl font-semibold mb-4">
            Contact Us
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>📍 Sonipat, Haryana</li>

            <li>📞 +91 98765 43210</li>

            <li>✉️ support@servicehub.com</li>

            <li>🕒 24/7 Customer Support</li>

          </ul>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 text-center py-5 text-gray-400 text-sm">

        © 2026 ServiceHub. All Rights Reserved.

      </div>

    </footer>

  );
}

export default Footer; 