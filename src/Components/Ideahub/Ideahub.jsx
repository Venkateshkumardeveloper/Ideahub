import React, { useState } from "react";
import { useFormik } from "formik";
import style from "./Ideahub.module.css";

import  ideahub from "../../assests/IdeaHubideahub_logo.jpg"

import { Editor } from 'primereact/editor';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BadgeIcon from '@mui/icons-material/Badge';


import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import { MenuItem } from "@mui/material";
import FormLabel from '@mui/material/FormLabel';

import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait'

const Ideahub = () => {
  const [text, setText] = useState('');
  const [mobile, setMobile] = useState('');

  const handleMobileChange = (event) => {
    const input = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (input.length <= 10) { // Restrict input to 10 characters
      setMobile(input);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email_id: "",
      mobile: "",
      select: "Select a option",
      message: ""
    },
    onSubmit: (values) => {
      console.log("form submit", values);
    },
  });
  console.log("formValues:", formik.values);
  return (
    <>
      <div className={style.main}>
        <div className={style.nav}>
          <div className={style.idea_hub}>
            <p className={style.idea_txt}>
              <img src={ideahub} alt="ideahub_logo" />
            </p>
            <div className={style.alaram}>
              <p className={style.alaramcount}>3</p>
            </div>
            <div className={style.divider}></div>
            <div className={style.profile}>
              <div className={style.user_icon}></div>
              <div className={style.profile_details}>
                <p className={style.profile_name}>Mohan Krishna</p>
                <div className={style.profile_mailid}>
                  <p className={style.profile_mail}>
                    guntikovelamohankrishna@gmail.com{" "}
                  </p>
                  <select name="" id="">
                    <option value="">Add new account</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.forms}>
          <form action="" onSubmit={formik.handleSubmit}>
          <div className={style.form_row1}>
          <FormControl className={style.signupInput} size='medium' sx={{ width: '100%', '@media (max-width: 600px)': { width: '100%' } }} variant="standard">
              <label htmlFor="nameSignup">
                
              </label>
              <OutlinedInput
                className='borderless-input'
                sx={{ background: '#F3F3F3' }}
                id="outlined-adornment-weight"
                placeholder='Enter Your Full Name'
                endAdornment={<InputAdornment position="end"><BadgeIcon sx={{ color: '#0407446E', fontSize: 20 }} /></InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{ 'aria-label': 'Name' }}
              />
            </FormControl>
            <FormControl className={style.signupInput} size='medium' sx={{ width: '100%', '@media (max-width: 600px)': { width: '100%' } }} variant="standard">
            
              <OutlinedInput
                className='borderless-input'
                sx={{ background: '#F3F3F3' }}
                id="emailSignup"
                name="emailSignup"
                placeholder="email@gmail.com"
                endAdornment={<InputAdornment position="end"><MailOutlineIcon sx={{ color: '#0407446E', fontSize: 20 }} /></InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{ 'aria-label': 'email' }}
              />
            </FormControl>
            </div>
            <div className={style.form_row2}>
            <FormControl className={style.input_with_logo} size='medium' sx={{ width: '100%', '@media (max-width: 600px)': { width: '100%' } }} variant="standard">
     
      <OutlinedInput
        className='borderless-input'
        sx={{ background: '#F3F3F3' }}
        id="outlined-adornment-weight"
        placeholder='+91-12345-67890'
        value={mobile}
        onChange={handleMobileChange}
        endAdornment={<InputAdornment position="end"><StayCurrentPortraitIcon sx={{ color: '#0407446E', fontSize: 20 }} /></InputAdornment>}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{ 'aria-label': 'mobile' }}
      />
    </FormControl>
    <FormControl className={style.input_with_logo} size='medium' sx={{ width: '100%', '@media (max-width: 600px)': { width: '100%' } }} variant="standard">
      <FormLabel id="select-field-demo-label" htmlFor="select-field-demo-button">
      </FormLabel>
      <Select
        defaultValue="Select Option"
        slotProps={{
          button: {
            id: 'select-field-demo-button',
            // TODO: Material UI set aria-labelledby correctly & automatically
            // but Base UI and Joy UI don't yet.
            'aria-labelledby': 'select-field-demo-label select-field-demo-button',
          },
        }}
      >
                <MenuItem value="Select Option">Select Option</MenuItem>

        <MenuItem value="pursuing">Pursuing</MenuItem>
        <MenuItem value="experienced">Experienced</MenuItem>
        <MenuItem value="fresher">Fresher</MenuItem>
        
      </Select>
      <FormHelperText id="select-field-demo-helper">
      </FormHelperText>
    </FormControl>
 
</div>
            {/* <div className={style.form_row1}>
              <div className={style.input_with_logo}>
                <BadgeIcon className={style.input_logo}/>

                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  placeholder="Name"
                />
              </div>

              <div className={style.input_with_logo}>
                <MailOutlineIcon className={style.input_logo}/>
                <input
                  type="email"
                  name="email_id"
                  id="email_id"
                  value={formik.values.email_id}
                  onChange={formik.handleChange}
                  placeholder="Email Id"
                />
              </div>
            </div>
            <div className={style.form_row2}>
              <div className={style.input_with_logo}>
                <LocalPhoneIcon className={style.input_logo}/>

                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  placeholder="Mobile No"
                />
              </div>

              <div className={style.input_with_logo}>
                < WorkIcon className={style.input_logo}/>

                <select
                  name="select"
                  id="select"
                  value={formik.values.select}
                  onChange={formik.handleChange}
                >
                  <option value="select a option">Select a option</option>
                  <option value="Pursing">Pursing</option>
                  <option value="Experienced">Experienced</option>
                  <option value="Fresher">Fresher</option>
                </select>
              </div>
            </div> */}
            <div>
        <div className="card">
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }}  />
        </div>
    
            </div>
            <input type="submit" className={style.submit_button} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Ideahub;
