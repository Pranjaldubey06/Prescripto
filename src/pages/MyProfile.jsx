// import React, { useState } from 'react'

// const MyProfile = () => {
//   const[userData,setUserData]=useState({
//     name:"Edward Vincent",
//     image:assets.profile_pic,
//     email:"richardjameswap2gmail.com",
//     phone:"+1 123 456 7890",
//     address:{
//       line1:"57th cross, richmond",
//       line2:"Circle, Church Road,london"
//     },
//     gender:"Male",
//     dob:"2000-01-20"
//   })
//   const[isEdit,setIsEdit]=useState(false)
//   return (
//     <div>
//       <img src={userData.image} alt=""/>
//       {
//         isEdit
//         ?<input types="text" value={} onChange{e=>setUserData(prev=>({...prev,name:e.target}))}/>
//         :<p>{userData.name}</p>
//       }
//       <hr/>
//       <div>
//       <p>
//       CONTACT INFORMATION
//       </p>
//       <div>
//       <p>Email id:</p>
//       <p>{userData.email}</p>
//       <p>Phone:</p>
//       { isEdit
//         ?<input types="text" value={} onChange{e=>setUserData(prev=>({...prev,name:e.target}))}/>
//         :<p>{userData.name}</p>

//       }
//       </div>
//       </div>
//     </div>
//   )
// }

// export default MyProfile


import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjames@gmail.com",
    phone: "+1 123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London"
    },
    gender: "Male",
    dob: "2000-07-20"
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='max-w-2xl mx-auto p-6'>

      {/* PROFILE IMAGE */}
      <div className='flex items-center gap-4'>
        <img className='w-24 rounded' src={userData.image} alt="" />
      </div>

      {/* NAME */}
      {
        isEdit ? (
          <input
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData(prev => ({ ...prev, name: e.target.value }))
            }
            className='text-2xl font-semibold mt-4 border p-2 w-full'
          />
        ) : (
          <p className='text-2xl font-semibold mt-4'>{userData.name}</p>
        )
      }

      <hr className='my-4' />

      {/* CONTACT INFO */}
      <p className='text-gray-500 font-medium mb-2'>CONTACT INFORMATION</p>

      <div className='grid grid-cols-2 gap-4 text-sm'>

        <p>Email id:</p>
        <p className='text-blue-600'>{userData.email}</p>

        <p>Phone:</p>
        {
          isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData(prev => ({ ...prev, phone: e.target.value }))
              }
              className='border p-1'
            />
          ) : (
            <p>{userData.phone}</p>
          )
        }

        <p>Address:</p>
        {
          isEdit ? (
            <div className='flex flex-col gap-1'>
              <input
                type="text"
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData(prev => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value }
                  }))
                }
                className='border p-1'
              />
              <input
                type="text"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData(prev => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value }
                  }))
                }
                className='border p-1'
              />
            </div>
          ) : (
            <p>
              {userData.address.line1} <br />
              {userData.address.line2}
            </p>
          )
        }

      </div>

      {/* BASIC INFO */}
      <p className='text-gray-500 font-medium mt-6 mb-2'>BASIC INFORMATION</p>

      <div className='grid grid-cols-2 gap-4 text-sm'>

        <p>Gender:</p>
        {
          isEdit ? (
            <select
              value={userData.gender}
              onChange={(e) =>
                setUserData(prev => ({ ...prev, gender: e.target.value }))
              }
              className='border p-1'
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )
        }

        <p>Birthday:</p>
        {
          isEdit ? (
            <input
              type="date"
              value={userData.dob}
              onChange={(e) =>
                setUserData(prev => ({ ...prev, dob: e.target.value }))
              }
              className='border p-1'
            />
          ) : (
            <p>{new Date(userData.dob).toDateString()}</p>
          )
        }

      </div>

      {/* BUTTONS */}
      <div className='flex gap-4 mt-6'>
        <button
          onClick={() => setIsEdit(!isEdit)}
          className='px-6 py-2 border rounded-full hover:bg-gray-100'
        >
          {isEdit ? 'Cancel' : 'Edit'}
        </button>

        {isEdit && (
          <button
            onClick={() => setIsEdit(false)}
            className='px-6 py-2 bg-[#5f6fff] text-white rounded-full'
          >
            Save information
          </button>
        )}
      </div>

    </div>
  )
}

export default MyProfile