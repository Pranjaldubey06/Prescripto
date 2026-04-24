// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'
// const Doctors = () => {

//   const {speciality}=useParams()
//   const {doctors} = useContext(AppContext)
//   const[filterDoc,setFilterDoc]=useState([])
//   const navigate=useNavigate()
//   const applyFilter=()=>{
//     if(speciality){
//       setFilterDoc(doctors.filter(doc=>doc.speciality === speciality))
//     }else{
//       setFilterDoc(doctors)
//     }
//   }

//   useEffect(()=>{
//  applyFilter()
//   },[doctors,speciality])

//   return (
//     <div>
//       <p>Browse through the doctors specialist.</p>
//       <div>
//         <div>
//           <p>General physician</p>
//           <p> Gynecologist</p>
//           <p>Dermatologist</p>
//           <p>Pediatricians</p>
//           <p>Neurologist</p>
//           <p>Gestroenterologist</p>
//         </div>
//         <div>
//           {
// filterDoc.map((item, index) => (
//           <div
//             onClick={() => navigate(`/appointment/${item._id}`)}
//             key={index}
//             className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
//           >
//             {/* Image */}
//             <img
//               className="bg-blue-50 w-full h-48 object-cover"
//               src={item.image}
//               alt=""
//             />

//             {/* Content */}
//             <div className="p-4">
//               {/* Availability */}
//               <div className="flex items-center gap-2 text-sm text-green-500 mb-1">
//                 <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//                 <p>Available</p>
//               </div>

//               {/* Name */}
//               <p className="font-medium text-base ">{item.name}</p>

//               {/* Speciality */}
//               <p className="text-sm text-gray-600">{item.speciality}</p>
//             </div>
//           </div>
//         ))
//           }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Doctors

import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const specialities = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  return (
    <div className="px-4 md:px-10 py-8">
      {/* Heading */}
      <p className="text-gray-700 mb-6 text-lg">
        Browse through the doctors specialist.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        {/* LEFT FILTER */}
        <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
          {specialities.map((spec, index) => (
            <p
              key={index}
              onClick={() => navigate(`/doctors/${spec}`)}
              className={`px-4 py-2 border rounded-full md:rounded-lg cursor-pointer text-sm whitespace-nowrap 
                ${speciality === spec ? "bg-[#5f6fff] text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
            >
              {spec}
            </p>
          ))}
        </div>

        {/* RIGHT GRID */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointments/${item._id}`)}
              key={index}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <img
                className="bg-blue-50 w-full h-48 object-cover"
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
                <p className="font-medium text-base">{item.name}</p>

                {/* Speciality */}
                <p className="text-sm text-gray-600">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
