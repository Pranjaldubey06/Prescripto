import React, { useContext } from "react";
// import { doctors } from '../assets/assets'
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctor = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-10 md:my-16 text-gray-900 px-4 md:px-10">
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-semibold text-center">
        Top Doctors to Book
      </h1>

      {/* Subtitle */}
      <p className="text-center text-sm md:text-base max-w-md">
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-6">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            key={index}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
          >
            {/* Image */}
            <img
              className="bg-blue-50 w-full h-64 object-cover"
              src={item.image}
              alt=""
            />

            {/* Content */}
            <div className="p-4">
              {/* Availability */}
              <div className="flex items-center gap-2 text-sm text-green-500 mb-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p>Available</p>
              </div>

              {/* Name */}
              <p className="font-medium text-base ">{item.name}</p>

              {/* Speciality */}
              <p className="text-sm text-gray-600">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="mt-6 px-6 py-2 bg-[#5f6fff] text-white rounded-full text-sm md:text-base hover:scale-105 transition"
      >
        More...
      </button>
    </div>
  );
};

export default TopDoctor;
