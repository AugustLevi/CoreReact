import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";
import React from "react";
import { useHistory } from "react-router-dom";

const Result = () => {
  let history = useHistory();

  const backClick = () => {
    history.push(`/menus/Home`);
    localStorage.clear();
  };
  return (
    <>
      <CRow>
        <CCol lg="2"></CCol>
        <CCol lg="8">
          <CCard>
            <CCardHeader>
              <CRow>
                <CCol lg="5">
                  <h1>Result</h1>
                </CCol>
                <CCol lg="6"></CCol>
                <CCol lg="1">
                  <CButton onClick={backClick} className="btn btn-danger mt-2">
                    X
                  </CButton>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol lg="1"></CCol>
                <CCol lg="3">Username</CCol>
                <CCol lg="7">{localStorage.getItem("USERNAME")}</CCol>
                <CCol lg="1"></CCol>
              </CRow>
              <br></br>
              <CRow>
                <CCol lg="1"></CCol>
                <CCol lg="3">Age</CCol>
                <CCol lg="7">{localStorage.getItem("AGE")}</CCol>
                <CCol lg="1"></CCol>
              </CRow>
              <br></br>
              <CRow>
                <CCol lg="1"></CCol>
                <CCol lg="3">Email</CCol>
                <CCol lg="7">{localStorage.getItem("EMAIL")}</CCol>
                <CCol lg="1"></CCol>
              </CRow>
              <br></br>
              <CRow>
                <CCol lg="1"></CCol>
                <CCol lg="3">Phone Number</CCol>
                <CCol lg="7">{localStorage.getItem("PHNUM")}</CCol>
                <CCol lg="1"></CCol>
              </CRow>
              <br></br>
              <CRow>
                <CCol lg="1"></CCol>
                <CCol lg="3">JapaneseSkill</CCol>
                <CCol lg="7">{localStorage.getItem("JAPSKILL")}</CCol>
                <CCol lg="1"></CCol>
              </CRow>
              <br></br>
              <CRow>
                <CCol lg="1"></CCol>
                <CCol lg="3">English Skill</CCol>
                <CCol lg="7">{localStorage.getItem("ENGSKILL")}</CCol>
                <CCol lg="1"></CCol>
              </CRow>
              <br></br>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="2"></CCol>
      </CRow>
    </>
  );
};

export default Result;
