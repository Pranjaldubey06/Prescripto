import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT<span className='text-gray-700 font-medium'>US</span></p>
      </div>
      
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className="w-full md:max-w-[360px]"  src={assets.about_image}/>
 <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
   <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
   <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
   <b className='text-gray-800'>Our Vision</b>
   <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
 </div>

      </div>
      <div>
        <p>WHY<span className='text-gray-700 font-semibold'> CHOOSE US</span></p>
      </div>
{/* <div>
  <div>
<b>EFFICIENCY:</b>
<p>Streamlined Appointment Scheduling Thaat Fits Into Your Busy Lifestyle.</p>
  </div>
  <div>
<b>CONVENIENCE:</b>
<p>Access To A Network Of Trusted HealthCare Professional in Your Area.</p>
  </div>
  <div>
<b>PERSONALIZATION:</b>
<p>Tailored Recommendation ANd Reminders To Help You Stay on Top Of Your Health</p>
  </div>
</div> */}
<div className="grid grid-cols-1 md:grid-cols-3 border rounded-lg overflow-hidden mt-10">

  {/* BOX 1 */}
  <div className="p-6 border-b md:border-b-0 md:border-r text-center">
    <p className="font-semibold text-gray-800 mb-2">EFFICIENCY:</p>
    <p className="text-sm text-gray-600">
      Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle.
    </p>
  </div>

  {/* BOX 2 */}
  <div className="p-6 border-b md:border-b-0 md:border-r text-center">
    <p className="font-semibold text-gray-800 mb-2">CONVENIENCE:</p>
    <p className="text-sm text-gray-600">
      Access To A Network Of Trusted Healthcare Professionals In Your Area.
    </p>
  </div>

  {/* BOX 3 */}
  <div className="p-6 text-center">
    <p className="font-semibold text-gray-800 mb-2">PERSONALIZATION:</p>
    <p className="text-sm text-gray-600">
      Tailored Recommendations And Reminders To Help You Stay On Top Of Your Health.
    </p>
  </div>

</div>


    </div>
  )
}

export default About
