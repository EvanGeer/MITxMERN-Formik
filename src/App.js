import { useFormik } from "formik";
import React from "react";
import './App.css';

/*
Your form should include the following:
[x] Email field
[x] Password field
[x] Submit button

Your form should implement the following input validation rules:
[x] If the username or password inputs are empty, display the message "Field required" under the text input.
[x] If the username is not in an email format, display the message "Username should be an email" under the text input.
[x] If the username and password pass the above validations, then display the message "Login Successful" in an alert box.

Your form should implement the following specific details:
[x] The email input field should have the ID emailField
[x] The email error message should be within a div element that has the ID emailError
[x] The password input field should have the ID pswField
[x] The password error message should be within a div element that has an ID pswError
[x] The submit button should have an ID submitBtn
*/

function ValidateEmail(text) 
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return text.match(mailformat);
}

function App() {
  const formik = useFormik({
    initialValues: {
      name:'',
      email:'',
      password:'',
    },
    onSubmit: (values) => {
      alert("Login Successful");
      console.log(values);
    },
    validate: (values) => {
      let errors = {}
      if(!values.name) errors.name = 'Field Required';
      
      if(!values.email) errors.email = 'Field Required';
      else if(!ValidateEmail(values.email)) errors.email = 'Username should be an email';
      
      if(!values.password) errors.password = 'Field Required';
      
      console.log(errors);
      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
       <div className="grid-container">

          <div className="label">Name</div>
          <input className="textinput" type="text" name="name" onChange={formik.handleChange} value={formik.values.name} />
          {formik.errors.name ? <div id="emailError" className="error">{formik.errors.name}</div> : null}
          
          <div className="label">Email</div>
          <input id="emailField" className="textinput" type="text" name="email" onChange={formik.handleChange} value={formik.values.email} />
          {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
          
          <div className="label">Password</div>
          <input id="pswField" className="textinput" type="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
          {formik.errors.password ? <div  id="pswError" className="error">{formik.errors.password}</div> : null}
        
          <button id="submitBtn" className="label" type="submit" onClick={formik.handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
