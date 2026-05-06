import React, { useEffect, useState } from "react";

function MyBookings() {

  const [bookings, setBookings] = useState([]);

  // LOAD BOOKINGS
  useEffect(() => {

    const savedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    setBookings(savedBookings);

  }, []);

  // CANCEL BOOKING
  const cancelBooking = (id) => {

    const updatedBookings =
      bookings.filter((item) => item.id !== id);

    setBookings(updatedBookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

  };

  // VIEW DETAILS
  const viewDetails = (booking) => {

    alert(
      `Service: ${booking.service}
Date: ${booking.date}
Status: ${booking.status}`
    );

  };

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        My Bookings
      </h1>

      {
        bookings.length === 0 ? (

          <p className="text-center text-gray-600">
            No bookings found.
          </p>

        ) : (

          <div className="grid gap-6">

            {
              bookings.map((booking) => (

                <div
                  key={booking.id}
                  className="bg-white p-6 rounded-xl shadow-md"
                >

                  <h2 className="text-2xl font-semibold">
                    {booking.service}
                  </h2>

                  <p className="mt-2">
                    📅 {booking.date}
                  </p>

                  <p className="mt-1">
                    ✅ {booking.status}
                  </p>

                  <div className="flex gap-4 mt-5">

                    {/* VIEW BUTTON */}
                    <button
                      onClick={() => viewDetails(booking)}
                      className="bg-blue-600 text-white px-5 py-2 rounded-lg"
                    >
                      View Details
                    </button>

                    {/* CANCEL BUTTON */}
                    <button
                      onClick={() => cancelBooking(booking.id)}
                      className="bg-red-600 text-white px-5 py-2 rounded-lg"
                    >
                      Cancel Booking
                    </button>

                  </div>

                </div>

              ))
            }

          </div>

        )
      }

    </div>

  );
}

export default MyBookings;