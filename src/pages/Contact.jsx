import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="px-4 md:px-10 py-10">

  {/* Heading */}
  <h3 className="text-center text-2xl md:text-3xl font-semibold text-gray-700 mb-10">
    CONTACT US
  </h3>

  {/* Container (IMPORTANT) */}
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

    {/* LEFT IMAGE */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src={assets.contact_image}
        alt="contact"
        className="w-full max-w-md h-full object-cover rounded-sm border"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="w-full md:w-1/2 max-w-md">

      <h2 className="font-semibold text-lg text-gray-800 mb-3">
        OUR OFFICE
      </h2>

      <p className="mb-2 text-gray-600">
        54709 Willms Station <br />
        Suite 350, Washington, USA
      </p>

      <p className="mb-2 text-gray-600">
        Tel: (415) 555-0132
      </p>

      <p className="mb-6 text-gray-600">
        Email: greatstackdev@gmail.com
      </p>

      <h2 className="font-semibold text-lg text-gray-800 mb-3">
        CAREERS AT PRESCRIPTO
      </h2>

      <p className="mb-4 text-gray-600">
        Learn more about our teams and job openings.
      </p>

      <button className="border px-6 py-2 rounded hover:bg-[#5f6fff] hover:text-white transition">
        Explore Jobs
      </button>

    </div>

  </div>
</div>
  )
}

export default Contact