// import React, { useContext, useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { assets } from "../assets/assets";
// import RelatedDoctors from "../components/RelatedDoctors";

// const Appointments = () => {
//   const { docId } = useParams();
//   const { doctors, currencySymbol } = useContext(AppContext);
// const daysOfWeek=['SUN','MON','TUE','WED','THU','FRI','SAT']
//   const [docInfo, setDocInfo] = useState(null);
//   const [docSlots, setDocSlots] = useState([]);
//   const [slotIndex, setSlotIndex] = useState(0);
//   const [slotTime, setSlotTime] = useState("");


//   // ✅ Fetch doctor
//   const fetchDocInfo = () => {
//     const doc = doctors.find((doc) => doc._id === docId);
//     setDocInfo(doc);
//   };

//   // ✅ Generate slots
//   const getAvailableSlots = () => {
//     setDocSlots([]);

//     let today = new Date();

//     for (let i = 0; i < 7; i++) {
//       let currentDate = new Date(today);
//       currentDate.setDate(today.getDate() + i);

//       let endTime = new Date(today);
//       endTime.setDate(today.getDate() + i);
//       endTime.setHours(21, 0, 0, 0);

//       if (today.getDate() === currentDate.getDate()) {
//         currentDate.setHours(
//           currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
//         );
//         currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
//       } else {
//         currentDate.setHours(10);
//         currentDate.setMinutes(0);
//       }

//       let timeSlots = [];

//       while (currentDate < endTime) {
//         let formattedTime = currentDate.toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         });

//         timeSlots.push({
//           datetime: new Date(currentDate), // ✅ FIXED
//           time: formattedTime,
//         });

//         currentDate.setMinutes(currentDate.getMinutes() + 30);
//       }

//       setDocSlots((prev) => [...prev, timeSlots]);
//     }
//   };

//   // ✅ Effects
//   useEffect(() => {
//     fetchDocInfo();
//   }, [doctors, docId]);

//   useEffect(() => {
//     getAvailableSlots();
//   }, [docInfo]); // ✅ FIXED

//   return (
//     docInfo && (
//       <div className="px-4 md:px-10 py-8">

//         {/* DOCTOR INFO */}
//         <div className="flex flex-col sm:flex-row gap-6">
          
//           <img
//             className="bg-[#5f6fff] w-full sm:max-w-72 rounded-lg"
//             src={docInfo.image}
//             alt=""
//           />

//           <div className="flex-1 border rounded-lg p-6 bg-white">
            
//             <p className="flex items-center gap-2 text-2xl font-semibold">
//               {docInfo.name}
//               <img className="w-5" src={assets.verified_icon} alt="" />
//             </p>

//             <p className="text-gray-600 mt-1">
//               {docInfo.degree} - {docInfo.speciality}
//             </p>

//             <button className="mt-2 px-3 py-1 border rounded-full text-sm">
//               {docInfo.experience}
//             </button>

//             <p className="mt-4 text-gray-700">
//               {docInfo.about}
//             </p>

//             <p className="mt-4 font-medium">
//               Appointment fee:{" "}
//               <span className="text-gray-700">
//                 {currencySymbol}{docInfo.fees}
//               </span>
//             </p>
//           </div>
//         </div>

//         {/* BOOKING SLOTS */}
//      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">

//   <p>Booking slots</p>

//   {/* DAYS */}
//   <div className="flex gap-3 items-center w-full overflow-x-auto mt-4">
//     {
//       docSlots.length > 0 && docSlots.map((item, index) => (
//         <div
//           onClick={() => setSlotIndex(index)}
//           key={index}
//           className={`text-center py-4 min-w-[65px] rounded-full cursor-pointer transition-all border
//           ${slotIndex === index 
//             ? 'bg-[#5f6fff] text-white shadow-md border-[#5f6fff]' 
//             : 'border-gray-200 text-gray-600 hover:bg-gray-100'}`}
//         >
//           <p className="text-xs font-medium">
//             {item[0] && daysOfWeek[item[0].datetime.getDay()]}
//           </p>
//           <p className="text-sm font-semibold">
//             {item[0] && item[0].datetime.getDate()}
//           </p>
//         </div>
//       ))
//     }
//   </div>

//   {/* TIME SLOTS */}
//   <div className="flex items-center gap-3 w-full overflow-x-auto mt-4">
//     {
//       docSlots.length > 0 && docSlots[slotIndex]?.map((item, index) => (
//         <p
//           key={index}
//           onClick={() => setSlotTime(item.time)}
//           className={`text-sm flex-shrink-0 px-5 py-2 rounded-full cursor-pointer border transition-all
//           ${slotTime === item.time 
//             ? 'bg-[#5f6fff] text-white border-[#5f6fff]' 
//             : 'text-gray-600 border-gray-300 hover:bg-gray-100'}`}
//         >
//           {item.time.toLowerCase()}
//         </p>
//       ))
//     }
//   </div>
// <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
// </div>

//        </div>
//     )
//   );
// };

// export default Appointments;



import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointments = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  //  Fetch doctor
  const fetchDocInfo = () => {
    const doc = doctors.find((doc) => doc._id === docId);
    setDocInfo(doc);
  };

  //  Generate slots
  const getAvailableSlots = () => {
    let today = new Date();
    let allSlots = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(today);
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate
          .toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
          })
          .toLowerCase();

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      allSlots.push(timeSlots);
    }

    setDocSlots(allSlots);
  };

  // ✅ Effects
  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);

  return (
    docInfo && (
      <div className="px-4 md:px-10 py-8">

        {/* DOCTOR INFO */}
        <div className="flex flex-col sm:flex-row gap-6">
          <img
            className="bg-[#5f6fff] w-full sm:max-w-72 rounded-lg"
            src={docInfo.image}
            alt=""
          />

          <div className="flex-1 border rounded-lg p-6 bg-white shadow-sm">
            <p className="flex items-center gap-2 text-2xl font-semibold">
              {docInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>

            <p className="text-gray-600 mt-1">
              {docInfo.degree} - {docInfo.speciality}
            </p>

            <button className="mt-2 px-3 py-1 border rounded-full text-sm">
              {docInfo.experience}
            </button>

            <p className="mt-4 text-gray-700">{docInfo.about}</p>

            <p className="mt-4 font-medium">
              Appointment fee:{" "}
              <span className="text-gray-700">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* BOOKING SLOTS */}
        <div className="mt-10">

          <p className="font-medium text-gray-700 mb-4">
            Booking slots
          </p>

          {/* DAYS */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {docSlots.map((item, index) => {
              const date = item[0]?.datetime;

              return (
                <div
                  key={index}
                  onClick={() => setSlotIndex(index)}
                  className={`flex flex-col items-center justify-center px-4 py-3 min-w-[70px] rounded-full cursor-pointer border transition-all
                  ${
                    slotIndex === index
                      ? "bg-[#5f6fff] text-white shadow-md border-[#5f6fff]"
                      : "bg-white text-gray-600 border-gray-200"
                  }`}
                >
                  <p className="text-xs font-medium">
                    {daysOfWeek[date?.getDay()]}
                  </p>
                  <p className="text-sm font-semibold">
                    {date?.getDate()}
                  </p>
                </div>
              );
            })}
          </div>

          {/* TIME SLOTS */}
          <div className="flex gap-3 flex-wrap mt-5">
            {docSlots[slotIndex]?.map((item, index) => (
              <p
                key={index}
                onClick={() => setSlotTime(item.time)}
                className={`px-4 py-2 rounded-full text-sm cursor-pointer border transition-all
                ${
                  slotTime === item.time
                    ? "bg-[#5f6fff] text-white border-[#5f6fff]"
                    : "text-gray-600 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {item.time}
              </p>
            ))}
          </div>

          {/* BUTTON */}
          <button className="mt-8 bg-[#5f6fff] text-white px-8 py-3 rounded-full shadow-md hover:scale-105 transition-all">
            Book an appointment
          </button>

          {/* RELATED DOCTORS */}
          <div className="mt-12">
            <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
          </div>

        </div>
      </div>
    )
  );
};

export default Appointments;