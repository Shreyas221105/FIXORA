import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Home() {

  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {

    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setServices(data.users);
      });

  }, []);

  return (

    <div>

      {/* HERO SECTION */}
      <div
        className="h-screen bg-cover bg-center relative flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80')",
        }}
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT */}
        <div className="relative text-center max-w-4xl px-5">

          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
            Find Trusted Home Services Near You
          </h1>

          <p className="text-lg md:text-2xl text-gray-200">
            Electricians, Plumbers, AC Repair, Cleaning & more — all in one place
          </p>

          {/* SEARCH BAR */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">

            <input
              type="text"
              placeholder="Search electrician, plumber, AC repair..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-4 w-full md:w-[350px] rounded-lg text-black outline-none"
            />

            <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 px-6 py-4 rounded-lg">
              Search
            </button>

          </div>

          {/* API SEARCH RESULTS */}
          {
            search && (

              <div className="mt-6 bg-white rounded-xl p-5 text-black max-w-xl mx-auto shadow-lg">

                {
                  services
                    .filter((item) =>
                      item.firstName.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item) => (

                      <div
                        key={item.id}
                        className="p-3 border-b border-gray-300"
                      >

                        <h3 className="font-semibold text-lg">
                          {item.firstName} {item.lastName}
                        </h3>

                        <p className="text-gray-600">
                          {item.email}
                        </p>

                      </div>

                    ))
                }

              </div>

            )
          }

          {/* EXPLORE BUTTON */}
          <Link to="/services">

            <button className="mt-6 bg-blue-600 hover:bg-blue-700 transition duration-300 px-7 py-4 rounded-lg">
              Explore Services
            </button>

          </Link>

        </div>

      </div>

      {/* POPULAR SERVICES */}
      <div className="py-16 px-5 md:px-10 text-center bg-gray-50">

        <h2 className="text-3xl md:text-4xl font-bold">
          Popular Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

          {/* CARD 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-2 hover:bg-blue-100 transition duration-300 cursor-pointer">

            <h3 className="text-2xl font-semibold">
              ⚡ Electrician
            </h3>

            <p className="mt-2">
              Starting at ₹299
            </p>

            <p className="mt-1">
              ⭐ 4.8 Rating
            </p>

            <button
              onClick={() => navigate("/booking")}
              className="mt-4 bg-blue-600 hover:bg-blue-700 active:scale-95 transition duration-300 text-white px-5 py-2 rounded-lg w-full"
>
  Book Now
</button>

          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-2 hover:bg-blue-100 transition duration-300 cursor-pointer">

            <h3 className="text-2xl font-semibold">
              🚰 Plumber
            </h3>

            <p className="mt-2">
              Starting at ₹249
            </p>

            <p className="mt-1">
              ⭐ 4.7 Rating
            </p>

            <button
              onClick={() => navigate("/booking")}
              className="mt-4 bg-blue-600 hover:bg-blue-700 active:scale-95 transition duration-300 text-white px-5 py-2 rounded-lg w-full"
            >
              Book Now
            </button>

          </div>

          {/* CARD 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-2 hover:bg-blue-100 transition duration-300 cursor-pointer">

            <h3 className="text-2xl font-semibold">
              ❄️ AC Repair
            </h3>

            <p className="mt-2">
              Starting at ₹499
            </p>

            <p className="mt-1">
              ⭐ 4.9 Rating
            </p>

            <button
              onClick={() => navigate("/booking")}
              className="mt-4 bg-blue-600 hover:bg-blue-700 active:scale-95 transition duration-300 text-white px-5 py-2 rounded-lg w-full"
            >
              Book Now
            </button>

          </div>

          {/* CARD 4 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-2 hover:bg-blue-100 transition duration-300 cursor-pointer">

            <h3 className="text-2xl font-semibold">
              🧹 Cleaning
            </h3>

            <p className="mt-2">
              Starting at ₹399
            </p>

            <p className="mt-1">
              ⭐ 4.6 Rating
            </p>

            <button
              onClick={() => navigate("/booking")}
              className="mt-4 bg-blue-600 hover:bg-blue-700 active:scale-95 transition duration-300 text-white px-5 py-2 rounded-lg w-full"
            >
            Book Now
            </button>

          </div>

          {/* CARD 5 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-2 hover:bg-blue-100 transition duration-300 cursor-pointer">

            <h3 className="text-2xl font-semibold">
              🔨 Carpenter
            </h3>

            <p className="mt-2">
              Starting at ₹349
            </p>

            <p className="mt-1">
              ⭐ 4.8 Rating
            </p>

            <button
              onClick={() => navigate("/booking")}
              className="mt-4 bg-blue-600 hover:bg-blue-700 active:scale-95 transition duration-300 text-white px-5 py-2 rounded-lg w-full"
            >
              Book Now
            </button>

          </div>

          {/* CARD 6 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-2 hover:bg-blue-100 transition duration-300 cursor-pointer">

            <h3 className="text-2xl font-semibold">
              🎨 Painting
            </h3>

            <p className="mt-2">
              Starting at ₹699
            </p>

            <p className="mt-1">
              ⭐ 4.7 Rating
            </p>

            <button
              onClick={() => navigate("/booking")}
              className="mt-4 bg-blue-600 hover:bg-blue-700 active:scale-95 transition duration-300 text-white px-5 py-2 rounded-lg w-full"
            >
              Book Now
            </button>

          </div>

        </div>

      </div>

      {/* WHY CHOOSE US */}
      <div className="bg-gray-200 py-16 px-5 md:px-10 text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          Why Choose ServiceHub?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          <div className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-2 transition duration-300">

            <h3 className="text-xl font-semibold">
              ✅ Verified Professionals
            </h3>

            <p className="mt-3 text-gray-600">
              Trusted and background-verified workers.
            </p>

          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-2 transition duration-300">

            <h3 className="text-xl font-semibold">
              ⚡ Fast Service
            </h3>

            <p className="mt-3 text-gray-600">
              Quick booking and instant response.
            </p>

          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-2 transition duration-300">

            <h3 className="text-xl font-semibold">
              💰 Affordable Pricing
            </h3>

            <p className="mt-3 text-gray-600">
              Transparent and budget-friendly rates.
            </p>

          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-2 transition duration-300">

            <h3 className="text-xl font-semibold">
              🕒 24/7 Support
            </h3>

            <p className="mt-3 text-gray-600">
              We are always here to help you.
            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Home;