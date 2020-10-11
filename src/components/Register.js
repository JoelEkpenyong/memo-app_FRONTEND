import React, {useState} from 'react'
import Axios from 'axios'
import './Register.css'


const axios = Axios.create({baseURL: "https://checkme-backend.herokuapp.com/auth"})

const Register = () => {
  // const [fullname, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
 
  // const handleInput = (e, setter) => {
  //   let {target} = e
  //   let {value} = target
  //   setter(value)
  // }

  // const handleSubmit = async () => {
  //   const user = {fullname, email, password}
  //   console.log(user)
  //   let res = await axios.post("/register", user )
  //   console.log(res)
  // } 

  const [userData, setUserData] = useState({});
  const handleInput = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(userData)
    const res = await axios.post("/register", {data: userData})
    console.log(res.data)
  }


  return (
    <section id="sign_up" className="d-flex flex-column justify-content-center align-items-center">
      <svg className="mt-5" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="10" fill="#2D9CDB" />
        <rect x="6" y="6.00002" width="48" height="48" rx="10" fill="#56CCF2" />
        <path d="M18 26.864L27.9574 36.7702L42 22.8" stroke="#F2F2F2" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p className="py-5">Lets Create An Account</p>
        <form className="signUp_form d-flex flex-column justify-content-center align-items-center w-100" onSubmit={handleSubmit}>
          <div className="input_wrapper">
            <label htmlFor="name">
              Full name
            </label>
            <input className="form_input" id="name" type="text" name="fullname" /* value={fullname} */ onChange={handleInput} />
          </div>

          <div className="input_wrapper">
            <label htmlFor="email">
              Email
            </label>
            <input className="form_input" id="email" type="email" name="email" /* value={email} */ onChange={handleInput}/>
          </div>

          <div className="input_wrapper">
            <label htmlFor="password">
              Password
            </label>
            <input className="form_input" id="password" type="password" name="password" /* value={password} */ onChange={handleInput} />
          </div>

          <button type="submit" className="form_btn btn_primary mt-4">Create account</button>

          <span className="my-4 mt-5">OR</span>

          <button type="button" className="form_btn btn_secondary mt-4">
            <svg className="mr-3" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.9905 10.4259C19.9905 9.58728 19.9224 8.97532 19.7752 8.34071H10.1992V12.1257H15.8201C15.7068 13.0663 15.0948 14.4829 13.7349 15.4348L13.7159 15.5615L16.7436 17.907L16.9534 17.928C18.8798 16.1488 19.9905 13.5309 19.9905 10.4259Z" fill="#4285F4"/>
              <path d="M10.1992 20.3984C12.953 20.3984 15.2648 19.4918 16.9534 17.928L13.7349 15.4348C12.8737 16.0354 11.7177 16.4547 10.1992 16.4547C7.50211 16.4547 5.21297 14.6755 4.39695 12.2164L4.27734 12.2266L1.12906 14.663L1.08789 14.7775C2.76508 18.1092 6.21016 20.3984 10.1992 20.3984Z" fill="#34A853"/>
              <path d="M4.39695 12.2164C4.18164 11.5818 4.05703 10.9018 4.05703 10.1992C4.05703 9.49656 4.18164 8.81664 4.38562 8.18203L4.37992 8.04687L1.19219 5.57124L1.08789 5.62085C0.396641 7.00343 0 8.55601 0 10.1992C0 11.8424 0.396641 13.3949 1.08789 14.7775L4.39695 12.2164Z" fill="#FBBC05"/>
              <path d="M10.1992 3.94367C12.1144 3.94367 13.4062 4.77094 14.1429 5.46227L17.0213 2.6518C15.2535 1.00859 12.953 0 10.1992 0C6.21016 0 2.76508 2.28914 1.08789 5.62086L4.38562 8.18203C5.21297 5.72289 7.50211 3.94367 10.1992 3.94367Z" fill="#EB4335"/>
            </svg>
            Continue With Google
          </button>
        </form>
    </section>
  )
}

export default Register
