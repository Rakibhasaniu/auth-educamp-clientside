import React, { useState } from 'react';
import { SiGnuprivacyguard } from "react-icons/si";
const Register = () => {

  const [info, userInfo] = useState({
    email: "",
    password: ""
  })
  const handleEmail = (e) => {
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

    return (
        <div className="login-container">
      <div className="login-title">Register<SiGnuprivacyguard /></div>
      <form className="login-form" onSubmit={handleSubmit} >
        <input type="name" placeholder="Your Name" />
        <input type="text" placeholder="Your Email" value={info.email} onChange={handleEmail} />
        <input type="text" placeholder="Image Url" />
        <input placeholder="password" />

        <input type="password" placeholder="confirm password" />

        <button>Register</button>

      </form>
    </div>
    );
};

export default Register;
// import React, { useContext } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

// const Register = () => {
//   const { createUser, updateUserProfile } = useContext(AuthContext);
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.name.value;
//     const photoURL = form.photoURL.value;
//     const email = form.email.value;
//     const password = form.password.value;

//     createUser(email, password)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//         form.reset();
//         handleUpdateUserProfile(name, photoURL);
//       })
//       .catch((error) => console.error(error));
//   };
//   const handleUpdateUserProfile = (name, photoURL) => {
//     const profile = {
//       displayName: name,
//       photoURL: photoURL,
//     };
//     updateUserProfile(profile)
//       .then(() => {})
//       .catch((error) => console.error(error));
//   };
//   return (
//     <div>
//       <Form onSubmit={handleSubmit} className="my-5">
//         <Form.Group className="mb-3">
//           <Form.Label>Full Name</Form.Label>
//           <Form.Control name="name" type="text" placeholder="Your Full Name" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Photo URL</Form.Label>
//           <Form.Control
//             name="photoURL"
//             type="text"
//             placeholder="Your Photo URL"
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control name="email" type="email" placeholder="Enter email" />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             name="password"
//             type="password"
//             placeholder="Password"
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//       <p className="my-5">
//         If You Have Already An Account Please <Link to={"/SignIn"}>Log in</Link>
//       </p>
//     </div>
//   );
// };

// export default Register;
