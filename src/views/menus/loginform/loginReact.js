import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CImg,
  CInput,
  CRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import $ from "jquery";
import SuccessError from "../../common/SuccessError";
import { useHistory } from "react-router-dom";
const LoginReact = () => {
  useEffect(() => {
    $(window).resize(function () {
      setZoomSize(Math.round(window.devicePixelRatio * 100));
    });
  }, []);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [zoomSize, setZoomSize] = useState(
    Math.round(window.devicePixelRatio * 100)
  ); //browser zoom level
  const [success, setSuccess] = useState([]);
  const [error, setError] = useState([]);
  let history = useHistory();

  const userNameChange = (e) => {
    setUserName(e.target.value);
  }
  const passwordChange = (e) => {
    setPassword(e.target.value);
  }
  const keyDownHandler=(e)=>{
    if(e.key=="Enter"){
        LoginClick();
        e.preventDefault();
    }
  }
  const LoginClick = () =>{
    if (userName == "admin" && password == "12345") {
      history.push(`/menus/MainMenu`);
      localStorage.setItem(`LoginProcess`, "true");
    } else {
      setError(["UserName or Password is Wrong"])
    }
  }
 
  return (
    <>
      {zoomSize < 150 && (
        <div className="login-bg">
          <CRow>
            <CCol lg="6"></CCol>
            <CCol lg="6">
              <CRow>
                <CCol lg="2"></CCol>
                <CCol lg="8">
                  <CCard style={{ marginTop: "200px" }} className="Ccard-design">
                    <CCardHeader >
                      <h3 style={{ marginTop: "15px" }} className="Ccard-design">LoginForm</h3>
                    </CCardHeader>
                    <CCardBody >
                    <SuccessError success={success} error={error} />
                      <CRow>
                        <CCol lg="4">
                          <h5 style={{ marginTop: "6px" }}>UserName</h5>
                        </CCol>
                        <CCol lg="8">
                          <CInput className="input-field-blue-background"
                          value={userName} onChange={userNameChange} onKeyDown={keyDownHandler}/>
                        </CCol>
                      </CRow>
                      <br></br>
                      <CRow>
                        <CCol lg="4">
                          <h5 style={{ marginTop: "6px" }}>Password</h5>
                        </CCol>
                        <CCol lg="8">
                          <CInput className="input-field-blue-background"
                           value={password} onChange={passwordChange} onKeyDown={keyDownHandler}/>
                        </CCol>
                      </CRow>
                      <br></br>
                      <CRow
                        style={{ justifyContent: "end", marginRight: "3px" }}
                      >
                        <CButton className="btn create-btn"
                         onClick={LoginClick}
                        >Login</CButton>
                      </CRow>
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol lg="2"></CCol>
              </CRow>
            </CCol>
          </CRow>
        </div>
      )}
      {zoomSize > 149 && (
        <div className="login-bg-mobile">
          <br></br>
          <br></br>
          <h2
            style={{ textAlign: "center", fontWeight: "800", color: "white" }}
          >
            Login Form
          </h2>
          <CRow style={{ justifyContent: "center" }}>
            <CImg src={"/image/logo.png"} width={200}></CImg>
          </CRow>
          <CRow style={{ paddingLeft: "100px", paddingRight: "100px" }}>
            <CCol lg="3"></CCol>
            <CCol lg="6">
            <SuccessError success={success} error={error} />
              <label
                style={{
                  fontWeight: "800",
                  color: "#0b3570",
                  fontSize: "15px",
                  marginTop: "20px",
                }}
              >
                Username
              </label>
              <br></br>
              <CInput type="text" className="input-field-blue-background" 
                   value={userName} onChange={userNameChange} onKeyDown={keyDownHandler}
              />
              <br></br>
              <label
                style={{
                  fontWeight: "800",
                  color: "#0b3570",
                  fontSize: "15px",
                  marginTop: "20px",
                }}
              >
                Password
              </label>
              <br></br>
              <CInput type="password" className="input-field-blue-background" 
               value={password} onChange={passwordChange} onKeyDown={keyDownHandler}
              />
              <br></br>
            </CCol>
            <CCol lg="3"></CCol>
          </CRow>
          <br></br>
          <CRow
            style={{
              paddingLeft: "100px",
              paddingRight: "100px",
              justifyContent: "center",
            }}
          >
            <CButton className="btn create-btn"
             onClick={LoginClick}     
            >
              <p style={{ marginTop: "3px" }}> Login</p>
            </CButton>
          </CRow>
          <CRow style={{ height: "100px" }}>&nbsp;</CRow>
        </div>
      )}
    </>
  );
};

export default LoginReact;
