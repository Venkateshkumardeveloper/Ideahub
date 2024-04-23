import React from "react";
import { useFormik } from "formik";
import name from "../../assests/Name Tag Woman Horizontal.png";
import Mail from "../../assests/Mail.png";
import style from "./Ideahub.module.css";
import Phone from "../../assests/Phone.png";
import Briefcase from "../../assests/Briefcase Settings.png"

const Ideahub = () => {
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
              I<span>dea</span>H<span>ub</span>
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
              <div className={style.input_with_logo}>
                <img src={name} alt="" className={style.input_logo} />

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
                <img src={Mail} alt="" className={style.input_logo} />
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
                <img src={Phone} alt="" className={style.input_logo} />
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
                <img src={Briefcase} alt="" className={style.input_logo} />
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
            </div>
            <div>
                <label htmlFor="message" className={style.text_area_label}>Leave a coment</label>
                <textarea
        id="message"
        name="message"
        value={formik.values.message}
        onChange={formik.handleChange}
        rows="20"
        cols="187"
        style={{background:"#F3F3F3", border:"none"}}

      />
            </div>
            <input type="submit" className={style.submit_button} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Ideahub;
