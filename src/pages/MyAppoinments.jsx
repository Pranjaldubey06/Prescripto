// import React, { useContext } from 'react'
// import { AppContext } from '../context/AppContext'

// const MyAppoinments = () => {
//   const {doctors} = useContext(AppContext)
//   return (
//     <div>
//       <p >My appointments</p>
//       <div>
//         {doctors.slice(0,2).map((item,index)=>(
//           <div key={index}>
// <div>
//   <img src={item.image}/>
// </div>
// <div>
//   <p>{item.name}</p>
//   <p>{item.speciality}</p>
//   <p>Address:</p>
//   <p>{item.address.line1}</p>
//   <p>{item.address.line2}</p>
//   <p><span>Date & Time:</span>25,july,2024| 8:30 PM</p>
  
// </div>
// <div></div>
// <div>
//   <button>Pay Online</button>
//   <button>Cancel appointment</button>
// </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default MyAppoinments



import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppoinments = () => {
  const { doctors } = useContext(AppContext)

  return (
    <div className='px-4 md:px-10 py-8'>

      {/* Heading */}
      <p className='text-lg font-medium mb-6'>My appointments</p>

      <div className='flex flex-col gap-6'>

        {doctors.slice(0, 3).map((item, index) => (
          
          <div key={index} className='flex flex-col md:flex-row gap-6 border-b pb-6'>

            {/* LEFT IMAGE */}
            <div>
              <img
                src={item.image}
                alt=""
                className='w-24 h-24 object-cover rounded-lg bg-[#eef2ff]'
              />
            </div>

            {/* CENTER DETAILS */}
            <div className='flex-1 text-sm text-gray-700'>

              <p className='font-semibold text-gray-900 text-base'>
                {item.name}
              </p>

              <p className='text-gray-600 mb-2'>
                {item.speciality}
              </p>

              <p className='font-medium'>Address:</p>
              <p className='text-gray-600'>
                {item.address.line1}
              </p>
              <p className='text-gray-600 mb-2'>
                {item.address.line2}
              </p>

              <p>
                <span className='font-medium'>Date & Time:</span>{" "}
                25 July, 2024 | 8:30 PM
              </p>

            </div>

            {/* RIGHT BUTTONS */}
            <div className='flex flex-col gap-3 justify-center md:items-end'>

              <button className='border px-6 py-2 rounded hover:bg-gray-100 transition'>
                Pay Online
              </button>

              <button className='border px-6 py-2 rounded hover:bg-red-50 text-gray-600 transition'>
                Cancel appointment
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default MyAppoinments