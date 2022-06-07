import React, { useState } from 'react'
import Dropdown from '../../components/dropdown/Dropdown';
import "./login.css"
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { IconButton, InputLabel, InputAdornment, Input } from "@material-ui/core";
export default function Login() {
    const [isActivename, setIsActivename] = useState(false);
    const [isActiveemail, setIsActiveemail] = useState(false);
    const [isActivepass, setIsActivepass] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    function SubmitButton() {
        if (name && email && passwordInput) {
            return <button type="button" className="primary-btn button-lg" value="Login" onClick={handleSubmit}  >Login </button>
        } else {
            return <button type="button" className="primary-btn button-lg" value="Login" onClick={handleSubmit} disabled >Login </button>
        };
    };
    const options = [
        { label: 'I would describe my user type as admin ', value: 'admin' },
        { label: 'I would describe my user type as faculty', value: 'faculty' },
        { label: 'I would describe my user type as collaborator', value: 'collaborator' },
    ];

    const [value, setValue] = useState('I would describe my user type as');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    console.log(useState());

    const [check, setCheck] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassWord] = useState("");
    const [nameerr, setnameErr] = useState(false);
    const [emailerr, setemailErr] = useState(false);
    const [emailerrptrn, setemailErrptrn] = useState(false);
    const [passerr, setpassErr] = useState(false);
    const [passerrptrn, setpassErrptrn] = useState(false);

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    // const [switchToggled, setSwitchToggled] = useState(false);
    // const Toggle = () => {
    //     console.log("before toggle", switchToggled);
    //     setSwitchToggled(!switchToggled)
    //     // switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);

    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        // enableLoading(!loading);
        // enableLoading(true);
        // // console.log("checking email value", email);
     
        console.log("checking name value", name);
        console.log("checking email value", email);
        console.log("checking password value", passwordInput);
        if (email == "") {
            setemailErr(true);
        }
        else {
            setemailErr(false);
        }
        if (passwordInput == "") {
            setpassErr(true);
        }
        else {

            setpassErr(false);
        }
        if (name == "") {
            setnameErr(true);
        }
        else {
            setnameErr(false);
        }
        // if (password < 3) {
        //     setpassErr(true);
        // }
        // else {
        //     setpassErr(false);
        // }
        setIsSubmitted("Login Successful")


    }
    const nameHandler = (e) => {
        let item = e.target.value;



        if (item === "") {
            setnameErr(true);
            
            // setemailErrptrn(false);
        } else {
            setnameErr(false);
           
            // setemailErrptrn(false);
        }
        // if (item == "") {
        //     setemailErr(true);
        // }
        // else {
        //     setemailErr(false);
        // }
        setName(item)
        // enableLoading(false);
        if (item !== '') {
            setIsActivename(true);
          } else {
            setIsActivename(false);
          }
    }
    const emailHandler = (e) => {
        let item = e.target.value;


        var filter =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (item === "") {
            setemailErr(true);
            setemailErrptrn(false);
        } else if (!filter.test(item)) {
            // setemailErr(false);
            setemailErr(false);
            setemailErrptrn(true);
        } else {
            setemailErr(false);
            setemailErrptrn(false);
        }
        // if (item == "") {
        //     setemailErr(true);
        // }
        // else {
        //     setemailErr(false);
        // }
        setEmail(item)
        if (item !== '') {
            setIsActiveemail(true);
          } else {
            setIsActiveemail(false);
          }
        // enableLoading(false);
    }
    // const handlePasswordChange = (evnt) => {
    //     setPasswordInput(evnt.target.value);
    // }
    const handlePasswordChange = (e) => {
        let item = e.target.value;
        var passlen = item.length;
        if (item === "") {
            setpassErr(true);
            setpassErrptrn(false);
        }
        else if (passlen < 8) {

            setpassErr(false);
            setpassErrptrn(true);
        }
        else {
            setpassErr(false);
            setpassErrptrn(false);
        }
        setPasswordInput(item)
        if (item !== '') {
            setIsActivepass(true);
          } else {
            setIsActivepass(false);
          }
        // enableLoading(false);
    }
    // $('#name, #mail, #pass').bind('keyup', function() {
    //     if(allFilled()) $('#register').removeAttr('disabled');
    // });

    // function allFilled() {
    //     var filled = true;
    //     $('body input').each(function() {
    //         if($(this).val() == '') filled = false;
    //     });
    //     return filled;
    // }
    return (

        <div className="loginContainer">
            {setIsSubmitted && <div> {isSubmitted}</div>}
            <div className="loginForm">
                <div className="loginTop">
                    <h1 className="heading-1">Let's set up your account</h1>
                    <p className="text-1">Already have an account? <a href="javascript:void(0);" className='a-tag'>Sign in</a>
                    </p>
                </div>
                <div className="loginCenter">
                    <form id="login" >
                        <div className="form-outer">
                            <div className="form-input">
                                <div className="form-group">

                                    <div className="input-group">

                                        <input type="text" placeholder="" id="name" name="name" className={ ` text-3 ${ nameerr ? "Active" : ""}`}
                                            onChange={nameHandler} />
                                       <label htmlFor="name" className={ `input-label text-3 ${ isActivename ? "Active" : ""}`} >Your name</label> 
                                      
                                    </div>
                                    {nameerr && <span className="msg-error" id="nameValidation"> Enter valid User name</span>}
                                    {/* {nameerrptrn && <span className="msg-error" id="nameValidation"> Enter valid User name</span>} */}
                                </div>
                            </div>
                            <div className="form-input">
                                <div className="form-group">

                                    <div className="input-group">
                                        <input type="email" placeholder="" id="mail" name="mail" className={ ` text-3 ${ emailerr || emailerrptrn ? "Active" : ""}`}
                                            onChange={emailHandler} />
                                              <label htmlFor="mail" className={ `input-label text-3 ${ isActiveemail ? "Active" : ""}`} >Email address</label> 
                                        {/* {email.trim().length == 0 ? <label htmlFor="mail" className="text-3 input-label">Email address</label> : null} */}

                                    </div>
                                    {emailerr && <span className="msg-error" id="nameValidation"> Email field can not be empty</span>}
                                    {emailerrptrn && <span className="msg-error" id="nameValidation"> Enter valid Email Address</span>}
                                </div>
                            </div>
                            <div className="form-input">
                                <div className="form-group">

                                    <div className="input-group">
                                        <div>
                                            <Dropdown
                                                // label="What do we eat?"
                                                options={options}
                                                value={value}
                                                onChange={handleChange}
                                                aria-required="true" data-ok="false"

                                            />

                                            {/* <p>We eat {value}!</p> */}
                                        </div>
                                    </div>
                                    {/* {passerr && <span className="msg-error" >Password field can not be empty</span>}
                                    {passerrptrn && <span className="msg-error" > Minimum 8 charcaters</span>} */}
                                </div>
                            </div>
                            <div className="form-input">
                                <div className="form-group">

                                    <div className="input-group">
                                        <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="pass" 
                                        className= { ` form-control text-3 ${ passerr || passerrptrn ? "Active" : ""}`}
                                        placeholder="" id="pass" />
                                        <label htmlFor="pass" className={ `input-label text-3 ${ isActivepass ? "Active" : ""}`} >Password</label> 
                                        {/* {passwordInput.trim().length == 0 ? <label htmlFor="mail" className="text-3 input-label">Password</label> : null} */}
                                        <div className="input-group-btn">
                                            <button className="btn btn-outline-primary" onClick={togglePassword}>
                                                {passwordType === "password" ? <VisibilityOff /> : <Visibility />}
                                            </button>
                                        </div>

                                    </div>
                                    {passerr && <span className="msg-error" >Password field can not be empty</span>}
                                    {passerrptrn && <span className="msg-error" > Minimum 8 charcaters</span>}
                                </div>
                            </div>
                            {/* <div className="form-input">
                                <div className="form-group">

                                    <div className="input-group">
                                        <input type="password" placeholder="Password" id="pass" name="pass" className="text-3"
                                            onChange={passHandler} />
                                        <label htmlFor="pass" className="text-2">Enter Password</label>
                                    </div>
                                    {passerr && <span className="msg-error" >Password field can not be empty</span>}
                                    {passerrptrn && <span className="msg-error" > Minimum 8 charcaters</span>}
                                </div>
                            </div> */}

                            {/* <div className="form-input">
                                <div className="form-group checking" >
                                    <input type="checkbox" className="check-input" id="remember" name="remember" value=""
                                        defaultChecked={true} onChange={() => setCheck(!check)}
                                    />
                                    <label htmlFor="remember" className="check-label"> Remember my login details</label>
                                    <label htmlFor="c-check" class ="check-container">
                                    <input type ="checkbox"  name="c-check" />
                                    <span class ="checkmark"></span>
                                    </label>
                                </div>
                            </div> */}
                            {/* <div className="form-input">
                                <div className="form-group checking" >
                                    <input type="checkbox" onClick={Toggle} />

                                </div>
                            </div> */}

                            <div className="form-input">
                                <div className="form-group">
                                    {/* <button type="button" className="primary-btn button-lg" value="Login" onClick={handleSubmit}  aria-disabled="true" aria-describedby="nameerr passerr emailerr" >Login </button> */}
                                    <SubmitButton />
                                </div>
                            </div>
                            <div className="form-input">
                                <div className='form-group'>
                                    <p className="text-3">By clicking the "Next" button, you agree to creating a free accounting, and to <a href="javascript:void(0);" className='a-tag'>Terms of Service</a> and <a href="javascript:void(0);" className='a-tag'>Privacy Policy.</a></p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    )
}
