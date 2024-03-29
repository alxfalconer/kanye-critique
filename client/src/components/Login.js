// import React, { useState } from "react"
// import { useHistory } from "react-router-dom"

// export const Login = ({ setUser, setLoggedIn }) => {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const history = useHistory()

//   const handleChange = (e) => {
//     if (e.target.name === "email") setEmail(e.target.value)
//     if (e.target.name === "password") setPassword(e.target.value)
//   }

//   const handleLogin = (e) => {
//     e.preventDefault()
//     // Send Login request to our backend
//     const loginObj = {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     }
//     fetch("/login", loginObj)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data)
//         if (!!data.id) {
//           // set the current user to some higher state
//           setUser(data)
//           setLoggedIn(true)
//           history.push("/profile")
//         } 
//       })
//       .catch((err) => console.log(err))
//   }

//   // console.log(email, password)
//   return (
//     <div className='login-form'>
//       <h1>Welcome Back!</h1>
//       <Form onSubmit={handleLogin}>
//         <Form.Group className='mb-4' controlId='formBasicEmail'>
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type='email'
//             placeholder='Enter email'
//             onChange={handleChange}
//             name='email'
//             value={email}
//           />
//         </Form.Group>

//         <Form.Group className='mb-4' controlId='formBasicPassword'>
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type='password'
//             placeholder='Password'
//             onChange={handleChange}
//             name='password'
//             value={password}
//           />
//         </Form.Group>
//         <Button variant='primary' type='submit'>
//           Login
//         </Button>
//       </Form>
//     </div>
//   )
// }