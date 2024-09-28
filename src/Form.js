import React from 'react'
import {useFormik} from 'formik';
import * as yup from 'yup'
const Form = () => {
  
  const formik=useFormik({
    initialValues:{
      name:'',
      email:'',
      password:''
    },
    validationSchema:yup.object({
      name:yup.string().min(4,"Name must be at least 4 characters").required(),
      email:yup.string().email().required(),
      password:yup.string().min(6,"Password must be at least 6 characters").required(),
    }),
  
    onSubmit:(values,{resetForm})=>{
      console.log(values);
      resetForm({values:""});
    }
  });
  const namError=formik.touched.name && formik.errors.name && <span style={{color:"red"}}>{formik.errors.name}</span>;
  const emailError=formik.touched.email && formik.errors.email && <span style={{color:"red"}}>{formik.errors.email}</span>;
  const passError=formik.touched.password && formik.errors.password && <span style={{color:"red"}}>{formik.errors.password}</span>;
  return (
    <div>
      <div><h1>SignUpForm</h1></div>
          <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
        type="text"
         id="name" 
         name="name" 
         value={formik.values.name}
         onChange={formik.handleChange}
         ></input>
         <br />
         {namError}
      </div>
      <div>
        <label>Email:</label>
        <input 
        type="email" 
        id="email"
         name="email"
         value={formik.values.email}
         onChange={formik.handleChange}
          ></input>
            <br />
            {emailError}
           
      </div>
      <div>
        <label>Password:</label>
        <input 
        type="password" 
        id="password"
         name="password"
         value={formik.values.password}
         onChange={formik.handleChange}
          ></input>
            <br />
            {passError}
      </div>
      <button type="submit">submit here</button>
    </form>
    </div>
  )
}

export default Form;
