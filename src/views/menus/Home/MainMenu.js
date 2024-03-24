import { CButton, CCol, CInput, CRow, CSelect, CSidebarNavDropdown } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import SuccessError from "../../common/SuccessError";
import { emailChk, nullChk, numberChk, validateName } from "../../common/CommonValidation";
import Confirmation from "../../common/Confirmation";
import Loading from "../../common/Loading";
import Dropzone from "react-dropzone";


const MainMenu = () => {
  let history = useHistory();
  let a = useRouteMatch();
  const [files, setFiles] = useState([]);
  const [loading,setLoading]=useState(false);
  const [confirmationModal,setConfirmationModal] = useState(false);
  const [content,setContent]=useState("");
  const [confirmType,setConfirmType]=useState("");
  const [userName,setUserName] = useState("");
  const [phoneNumber,setPhoneNumber] = useState("");
  const [age,setAge] = useState("");
  const [email,setEmail] = useState("");
  const [success,setSuccess]=useState([]);
  const [error,setError]=useState([]);

  useEffect(()=>{
    let flag = localStorage.getItem(`LoginProcess`);

    if (flag=="true"){
      console.log("Login Process Successful!")
    }else{
      history.push(`/loginReact`);
    }
  })
  const [englishLevel,setEnglishLevel] = useState([
    {id:"1",name:"Beginner"},
    {id:"2",name:"Intermediate"},
    {id:"3",name:"Upper Intermediate"},
    {id:"4",name:"Advanced"},
    {id:"5",name:"Master"}
  ]);
  const [japaneseLevel,setJapaneseLevel] = useState([
    {id:"1",name:"N1"},
    {id:"2",name:"N2"},
    {id:"3",name:"N3"},
    {id:"4",name:"N4"},
    {id:"5",name:"N5"}
  ]);
  const[selectedLevel,setSelectedLevel] = useState("");
  const[selectedJapaneseLevel,setSelectedJapaneseLevel] = useState("");
  const userNameChange = (user) =>{
    setUserName(user.target.value);
  }
  const phoneNumberInsert = (phone)=>{
    setPhoneNumber(phone.target.value);
  }
  const ageChange = (ages)=>{
    setAge(ages.target.value);
  }
  const emailChange = (emails)=>{
    setEmail(emails.target.value);
  }
  const saveClick = () => {
    let errMsg = [];
    if (!nullChk(userName)) {
      errMsg.push("Please fill  username");
    }else if (!validateName(userName)){
      errMsg.push("Please fill character only in username");
    }
    if (!nullChk(age)) {
      errMsg.push("Please fill your age");
    }else if(!numberChk(age)){
      errMsg.push("Please fill number only in age");
    }else if(parseInt(age)>100){
      errMsg.push("Please fill Valid in age");
    }

    if (!nullChk(email)) {
      errMsg.push("Please fill Email");
    }else if(!emailChk(email)){
      errMsg.push("Please fill email character in email")
    }
    if (!nullChk(phoneNumber)) {
      errMsg.push("Please fill phoneNumber");
    }else if(parseInt(phoneNumber)>10){
      errMsg.push("Please fill format in phoneNumber");
    }
    if (!nullChk(selectedLevel)) {
      errMsg.push("Please fill choose EnglishSkill");
    }
    if (!nullChk(selectedJapaneseLevel)) {
      errMsg.push("Please fill choose Japanese Skill");
    }
    if (errMsg.length <= 0) {
      history.push("/menus/Result");
      setSuccess(["Successfully "])
      localStorage.setItem("USERNAME", userName);
      localStorage.setItem("AGE", age);
      localStorage.setItem("PHNUM", phoneNumber);
      localStorage.setItem("EMAIl", email);
      localStorage.setItem("ENGLISHSKILL", selectedLevel);
      localStorage.setItem("JAPNESESKILL", selectedJapaneseLevel);
    } else {
      setError(errMsg);
    }
  };
  const handleDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };
  
  const removeFile = () => {
    setFiles([]);
  }
  const deleteClick=()=>{
    setConfirmationModal(true);
    setContent("Are you sure you want to delete?");
    setConfirmType("delete");
  }
  const deleteOK=()=>{
    alert('Delete')
  }
  const updateClick=()=>{
    setConfirmationModal(true);
    setContent("Are you sure you want to update?");
    setConfirmType("update");
  }
  const updateOK=()=>{
    alert('Update')
  }
  const resignClick=()=>{
    setConfirmationModal(true);
    setContent("Are you sure you want to resign?");
    setConfirmType("resign")
  }
  const resignOK=()=>{
    alert('resign')
  }
  const resetClick = () =>{
    setConfirmationModal(true);
    setContent("Are you sure you want to reset all data?");
    setConfirmType("edit");
  }
  const editOK=()=>{
    setUserName("");
    setPhoneNumber("");
    setAge("");
    setEmail("");
    setSelectedJapaneseLevel("");
    setSelectedLevel("");
    setConfirmationModal(false);

  }
  const loadingClick = () =>{
    setLoading(true);
  }
  const englishLevelChange = (e) =>{
    setSelectedLevel(e.target.value);
    console.log("You Choose"+ selectedLevel)
  }
  const japaneseLevelChange = (e) =>{
    setSelectedJapaneseLevel(e.target.value);
    console.log("You Choose"+ selectedJapaneseLevel)
  }

  return (
    <>
    <div><h1>This is main menu!</h1></div>
    <SuccessError success={success} error={error}/>
    <CRow>
      <CCol lg="6">
        <CRow>
          <CCol lg="1"></CCol>
          <CCol lg="3">Username</CCol>
          <CCol lg="8"><CInput type='text' onChange={userNameChange} value={userName}/></CCol>
        </CRow>
        <br></br>
        <CRow>
          <CCol lg="1"></CCol>
          <CCol lg="3">Email</CCol>
          <CCol lg="8"><CInput type='text' onChange={emailChange} value={email} /></CCol>
        </CRow>
        <br></br>
        <CRow>
          <CCol lg="1"></CCol>
          <CCol lg="3">English Skill</CCol>
          <CCol lg="8">
            <CSelect value={selectedLevel} onChange={englishLevelChange}>
              <option value={""}>--Select--</option>
              {englishLevel.map((data,index)=>{
                return(
                  <option key={index} value={data.name}>
                    {data.name}
                  </option>
                )
              })}
            </CSelect>
          </CCol>
        </CRow>
      </CCol>
      <CCol lg="6">
        <CRow>
          <CCol lg="1"></CCol>
          <CCol lg="3">Phone Number</CCol>
          <CCol lg="8"><CInput type='text' onChange={phoneNumberInsert} value={phoneNumber}/></CCol>
        </CRow>
        <br></br>
        <CRow>
          <CCol lg="1"></CCol>
          <CCol lg="3">Age</CCol>
          <CCol lg="8"><CInput type='text' onChange={ageChange} value={age}/></CCol>
        </CRow>
        <br></br>
        <CRow>
          <CCol lg="1"></CCol>
          <CCol lg="3">Japanese Skill</CCol>
          <CCol lg="8">
            <CSelect value={selectedJapaneseLevel} onChange={japaneseLevelChange}>
              <option value={""}>--Select--</option>
              {japaneseLevel.map((data,index)=>{
                return(
                  <option key={index} value={data.name}>
                    {data.name}
                  </option>
                )
              })}
            </CSelect>
          </CCol>
        </CRow>
      </CCol>
    </CRow>
    <CRow style={{justifyContent:"center",margin:20,padding:30}}>
      <CButton className="btn btn-success" onClick={saveClick}>Save</CButton>&nbsp;&nbsp;
      <CButton className="btn btn-facebook" onClick={resetClick}>Reset</CButton>&nbsp;&nbsp;
      <CButton className="btn btn-warning" onClick={deleteClick}>Delete</CButton>&nbsp;&nbsp;
      <CButton className="btn btn-facebook" onClick={updateClick}>Update</CButton>&nbsp;&nbsp;
      <CButton className="btn btn-success" onClick={resignClick}>Resign</CButton>&nbsp;&nbsp;
      <CButton className="btn btn-secondary" onClick={loadingClick}>Loading</CButton>
      
    </CRow>
      
    <Confirmation
    show={confirmationModal}
    content={content}
    type={confirmType}
    deleteOK={deleteOK}
    cancel={()=>setConfirmationModal(false)}
    cancelButton="No"
    okButton="Yes"
    updateOK={updateOK}
    resignOK={resignOK}
    editOK={editOK}
    />
    <Loading start={loading}/>
    <CRow>
        <Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <CInput type="text" readOnly 
                placeholder="Click here to attach file"/>
              </div>
            )}
          </Dropzone>

          <div style={{ display: "flex", marginTop: "20px" }}>
            {files.map((a) => (
              <>
                <li style={{ marginTop: "-14px", marginLeft: "5px"}} 
                key={a.name}>{a.name}</li>  
                  <label  style={{ marginLeft: "20px" 
                  ,color:"red", marginTop: "-14px",
                  cursor:"pointer"}} 
                  onClick={removeFile}>X</label>
              </>
            ))}
          </div>
        </CRow>
    </>
  )
}
export default MainMenu;

