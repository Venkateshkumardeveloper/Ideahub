import React, { useState } from 'react'
import style from './signup.module.css'
import Logoimg from "../../assests/image.png"
import signupImage from "../../assests/Sign_up_rightsignup.png" 
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BadgeIcon from '@mui/icons-material/Badge';
import IconButton from '@mui/material/IconButton';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className={style.signupMain}>
       <div className={style.signupLeftDiv}>
       <div className={style.signupBox}>
       <div className={style.LogoAndTxtBox}>
       <div className={style.IdeaHubDiv}>
       <div className={style.logoDiv}>
        <img src={Logoimg} alt="logo" />
       </div>
       <div className={style.txt}>
       <span className={style.thick}>I</span>
                      <span>dea </span>
                      <span className={style.thick}>H</span>
                      <span>ub</span>
       </div>
       </div>
       <div className={style.signupTxtDiv}>
       <div className={style.signupTxt}>Sign Up</div>
                  <div className={style.signupExtraTxt}>Register, Stay Linked</div>
       </div>
       </div>
       <div className={style.inputParDiv}>
       <FormControl className={style.signupInput}  size='medium' sx={{ width: '50ch','@media (max-width: 600px)': {
      width: '100%', // Change width for smaller screens
    }, }} variant="standard">
                <label htmlFor="nameSignup">
                  <span className={style.starMark}>*</span>
                  <span>Full Name</span>
                  </label>
                <OutlinedInput 
                  className='borderless-input'
                  sx={{background:'#F3F3F3'}}
                  id="outlined-adornment-weight"
                  placeholder='Enter Your Full Name'
                  endAdornment={<InputAdornment position="end"><BadgeIcon sx={{color:'#0407446E',fontSize:20}}/></InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'Name',
                    
                  }}
                />
              </FormControl>
              
       <FormControl className={style.signupInput}  size='medium' sx={{ width: '50ch','@media (max-width: 600px)': {
      width: '100%', // Change width for smaller screens
    }, }} variant="standard">
                <label htmlFor="emailSignup">
                  <span className={style.starMark}>*</span>
                  <span>Email</span>
                  </label>
                <OutlinedInput 
                  className='borderless-input'
                  sx={{background:'#F3F3F3'}}
                  id="outlined-adornment-weight"
                  placeholder='email@gmail.com'
                  endAdornment={<InputAdornment position="end"><MailOutlineIcon sx={{color:'#0407446E',fontSize:20}}/></InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'email',
                    
                  }}
                />
              </FormControl>
              <FormControl className={style.signupInput}  size='medium' sx={{ width: '50ch','@media (max-width: 600px)': {
      width: '100%', // Change width for smaller screens
    }, }} variant="standard">
                <label htmlFor="mobileSignup">
                  <span className={style.starMark}>*</span>
                  <span>Mobile Number</span>
                  </label>
                <OutlinedInput 
                  className='borderless-input'
                  sx={{background:'#F3F3F3'}}
                  id="outlined-adornment-weight"
                  placeholder='+91-12345-67890'
                  endAdornment={<InputAdornment position="end"><StayCurrentPortraitIcon sx={{color:'#0407446E',fontSize:20}}/></InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'mobile',
                    
                  }}
                />
              </FormControl>
              <FormControl className={style.signupInput}  size='medium' sx={{ width: '50ch','@media (max-width: 600px)': {
      width: '100%', // Change width for smaller screens
    },}} variant="standard">
                <label htmlFor="outlined-adornment-password">
                  <span className={style.starMark}>*</span>
                  <span>Password</span>
                </label>
                <OutlinedInput
                className='borderless-input'
                  sx={{background:'#F3F3F3'}}
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  endAdornment={
                    <InputAdornment position="end" >
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        
                        edge="end"
                        sx={{color:'#0407446E',fontSize:20}}
                      >
                        {showPassword ? <VisibilityOff  /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <FormControl className={style.signupInput}  size='medium' sx={{ width: '50ch','@media (max-width: 600px)': {
      width: '100%', // Change width for smaller screens
    },}} variant="standard">
                <label htmlFor="outlined-adornment-password">
                  <span className={style.starMark}>*</span>
                  <span>Confirm Password</span>
                </label>
                <OutlinedInput
                className='borderless-input'
                  sx={{background:'#F3F3F3'}}
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Confirm Password'
                  endAdornment={
                    <InputAdornment position="end" >
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        
                        edge="end"
                        sx={{color:'#0407446E',fontSize:20}}
                      >
                        {showPassword ? <VisibilityOff  /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                />
              </FormControl>
              <button className={style.Signupbtn}>Sign Up</button>
              <div className={style.ParOfDirectToSignIn}>
              <span>Already have an account?</span>
              <Link to={"/"}>
              <span className={style.DarkBlueTxt}>Sign In</span>
              </Link>
            </div>
       </div>
       </div>
       </div>
       <div className={style.signupRightDiv}>
        <img src={signupImage} alt="background_image" />
       </div>
    </div>
  )
}

export default Signup