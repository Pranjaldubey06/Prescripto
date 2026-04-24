// import React, { useState } from 'react'

// const Login = () => {
//   const [state,setState]=useState('sign Up')
//   const[email,setEmail]=useState(' ')
//   const[password,setPassword]=useState('')
//   const[name,setName]=useState('')

//   const onSubmitHandler=async(event)=>{
// event.preventDefault()
//   }

//   return (
//     <form className='min-h-[80vh] flex items-center'>
//     <div className=''>
//       <p>{state ==='Sign Up' ? "sign up" : "log in"} to book appointment</p>
//   <div>
//     <p>Full Name</p>
//     <input type="text" onChange={(e)=>setName(e.target.name)} value={name} required/>
//   </div>
//   <div>
//     <p>Email</p>
//     <input type="text" onChange={(e)=>setEmail(e.target.email)} value={email} required/>
//   </div>
//   <div>
//     <p>Password</p>
//     <input type="text" onChange={(e)=>setPassword(e.target.password)} value={password} required/>
//   </div>
  
//     </div>
//     </form>
//   )
// }

// export default Login



import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    if (state === 'Sign Up') {
      console.log('Sign Up:', { name, email, password })
    } else {
      console.log('Login:', { email, password })
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center justify-center px-4'>
      
      <div className='w-full max-w-md  p-6 shadow-xl bg-white'>

        {/* Heading */}
        <p className='text-2xl font-semibold text-gray-700 text-center mb-6'>
          {state === 'Sign Up' ? 'Create Account' : 'Login'} to Book Appointment
        </p>

        {/* Name (only for signup) */}
        {state === 'Sign Up' && (
          <div className='mb-4'>
            <p className='text-sm mb-1'>Full Name</p>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              className='w-full border px-3 py-2 rounded outline-none'
            />
          </div>
        )}

        {/* Email */}
        <div className='mb-4'>
          <p className='text-sm mb-1'>Email</p>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className='w-full border px-3 py-2 rounded outline-none'
          />
        </div>

        {/* Password */}
        <div className='mb-4'>
          <p className='text-sm mb-1'>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className='w-full border px-3 py-2 rounded outline-none'
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className='w-full bg-[#5f6fff] text-white py-2 rounded mt-2 hover:scale-105 transition'
        >
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        {/* Toggle */}
        <p className='text-sm text-center mt-4'>
          {state === 'Sign Up' ? 'Already have an account?' : "Don't have an account?"}
          <span
            onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
            className='text-[#5f6fff] cursor-pointer ml-1 font-medium'
          >
            {state === 'Sign Up' ? 'Login here' : 'Sign up here'}
          </span>
        </p>

      </div>

    </form>
  )
}

export default Login
