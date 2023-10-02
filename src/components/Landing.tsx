/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import BodyLayout from "./BodyLayout";
import Card from "./Card";
import styles from "../Landing.module.scss";
import ToggleSwitch from "./ToggleSwitch";
import Checkbox from "./Checkbox";
import axios from "axios";

const options = [
  {
    title: 'Paragraph'
  },
  {
    title: 'Short Answer'
  },
  {
    title: 'Yes/No'
  },
  {
    title: 'Dropdown'
  },
  {
    title: 'Multiple choice'
  },
  {
    title: 'Date'
  },
  {
    title: 'Number'
  },
  {
    title: 'File Upload'
  },
  {
    title: 'Video questions'
  }
]

const Landing = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [data, setData] = useState<any | null>(null)
  const [response, setResponse] = useState<string | any>({
    firstName:'',
    lastName: '',
    email:'',
  })
  const [toggle, setToggle] =useState({
    phoneNum:false,
    residence: false,
    nationality: false,
    DOB: false,
    idNum: false,
    gender: false,
    resume: false,
    experience: false,
    education:false
  })
  
  
  const [check, setCheck] =useState({
   
    phoneNum:false,
    residence: false,
    nationality: false,
    DOB: false,
    idNum: false,
    gender: false,
    resume: false,
    experience: false,
    education:false
  })
  
  const [selectOption, setSelectOption] = useState('')
  const [question, setQuestion] = useState('')
  
  // const [showQuestion, setShowQuestion] = useState(false)
  const [showQuestion, setShowQuestion] = useState(true)
  const [choice, setChoice] = useState('')
  const [multiChoice, setMultiChoice] = useState('')
  
  
  // const [checked, setChecked] = useState(false);
  const [checkbox, setCheckbox] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);

      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };

      // add your post request here
      reader.readAsDataURL(files[0]);
    }
  };

  
  const handleQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };
  
  const handleChoice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChoice(e.target.value);
  };
  
  const handleMultiChoice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMultiChoice(e.target.value);
  };
  
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectOption(e.target.value)
    console.log(selectOption)
  }

  
  useEffect(() => {
    (
      async () => {
        try {
          const response = await axios.get('http://127.0.0.1:4010/api/812.0561643107567/programs/excepturi/application-form')
          setData(response?.data?.data.attributes)
          const updatedToggle = {
            phoneNum: data.personalInformation.phoneNumber.show,
            residence: data.personalInformation.currentResidence.show,
            nationality: data.personalInformation.nationality.show,
            DOB: data.personalInformation.dateOfBirth.show,
            idNum: data.personalInformation.idNumber.show,
            gender: data.personalInformation.gender.show,
            resume: data.profile.resume.show,
            education: data.profile.education.show,
            experience: data.profile.experience.show
          };
          
          const updatedCheck ={
            phoneNum: data.personalInformation.phoneNumber.internalUse,
            residence: data.personalInformation.currentResidence.internalUse,
            nationality: data.personalInformation.nationality.internalUse,
            DOB: data.personalInformation.dateOfBirth.internalUse,
            idNum: data.personalInformation.idNumber.internalUse,
            gender: data.personalInformation.gender.internalUse,
            resume: data.profile.resume.mandatory,
            experience: data.profile.experience.mandatory,
            education: data.profile.education.mandatory
          }
          
          setToggle(updatedToggle)
          setCheck(updatedCheck)
         console.log(toggle)
        
        } catch (error:any) {
          
        }
      }
    )()
  }, [])
  
  return (
    <>
      <BodyLayout>
        <div className={styles.landing_body}>
          <div className={styles.landing_content}>
            <form className={styles.form_upload}>
              {previewImage ? (
                <>
                  <div className={styles.preview_image_body}>
                    <label className={styles.input_file}>
                      <img
                        src={previewImage}
                        alt="Selected"
                        className={styles.preview_image}
                      />
                      <p className={styles.change}>
                        <img src="/assets/Delete.png" alt="" />
                        Change picture
                      </p>
                      <input
                        type="file"
                        id="fileInput"
                        accept=".jpg, .png, .gif"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                </>
              ) : (
                <>
                  <Card title="Upload cover image">
                    <div className={styles.upload_image_body}>
                      <label htmlFor="fileInput" className={styles.file_input}>
                        <p className={styles.upload}>
                          <img src="/assets/Upload.png" alt="" />
                          <span>Upload cover image</span>
                        </p>
                        <p className={styles.p_tag}>
                          16:9 ratio is recommended. Max image size 1mb
                        </p>
                        <input
                          type="file"
                          id="fileInput"
                          accept=".jpg, .png, .gif"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                  </Card>
                </>
              )}
            </form>

            <div className={styles.personal_info_body}>
              <Card title="Personal Information">
                <div className={styles.personal_body}>
                  <form action="" className={styles.form_body}>
                    <div className={styles.input_form}>
                      <label className={styles.label}>FirstName</label>
                      <input
                        type="text"
                        value={response.firstName}
                        name="firstName"
                        readOnly
                      />
                    </div>
                    <div className={styles.input_form}>
                      <label className={styles.label}>LastName</label>
                      <input
                        type="text"
                        value={response.lastName}
                        name="lastName"
                        readOnly
                      />
                    </div>
                    <div className={styles.input_form}>
                      <label className={styles.label}>Email</label>
                      <input
                        type="email"
                        value={response.email}
                        name="email"
                        readOnly
                      />
                    </div>
                    <div className={styles.input_checkbox}>
                      <div className={styles.input_label}>
                        <label className={styles.label}>
                          Phone <span>(without dial code)</span>
                        </label>
                        <div className={styles.custom_input}>
                          <Checkbox
                            checked={check.phoneNum}
                            // onChange={handleCheckboxPhone}
                            label="Internal"
                          />
                          <ToggleSwitch
                            id="phoneNumber"
                            label={toggle?.phoneNum ? "Show" : "Hide"}
                            checked={toggle.phoneNum}
                            // onChange={handleToggleChange}
                          />
                        </div>
                      </div>
                      <input type="text" />
                    </div>

                    <div className={styles.input_checkbox}>
                      <div className={styles.input_label}>
                        <label className={styles.label}>Nationality </label>
                        <div className={styles.custom_input}>
                          <Checkbox
                            checked={check.nationality}
                            label="Internal"
                          />
                          <ToggleSwitch
                            id="nationality"
                            label={toggle.nationality ? "Show" : "Hide"}
                            // label='Naame'
                            checked={toggle.nationality }
                          />
                        </div>
                      </div>
                      <input type="text" />
                    </div>

                    <div className={styles.input_checkbox}>
                      <div className={styles.input_label}>
                        <label className={styles.label}>
                          Current Residence{" "}
                        </label>
                        <div className={styles.custom_input}>
                          <Checkbox
                            checked={check.residence}
                            label="Internal"
                          />
                          <ToggleSwitch
                            id="residence"
                            label={toggle.residence ? "Show" : "Hide"}
                            checked={toggle.residence}
                          />
                        </div>
                      </div>
                      <input type="text" />
                    </div>

                    <div className={styles.input_checkbox}>
                      <div className={styles.input_label}>
                        <label className={styles.label}>ID Number </label>
                        <div className={styles.custom_input}>
                          <Checkbox
                            checked={check.idNum}
                            label="Internal"
                          />
                          <ToggleSwitch
                            id="idNumber"
                            label={toggle.idNum ? "Show" : "Hide"}
                            checked={toggle.idNum}
                          />
                        </div>
                      </div>
                      <input type="text" />
                    </div>

                    <div className={styles.input_checkbox}>
                      <div className={styles.input_label}>
                        <label className={styles.label}>Date of Birth</label>
                        <div className={styles.custom_input}>
                          <Checkbox
                            checked={check.DOB}
                            label="Internal"
                          />
                          <ToggleSwitch
                            id="DOB"
                            label={toggle.DOB ? "Show" : "Hide"}
                            checked={toggle.DOB}
                          />
                        </div>
                      </div>
                      <input type="text" />
                    </div>
                    
                    <div className={styles.input_checkbox}>
                      <div className={styles.input_label}>
                        <label className={styles.label}>Gender</label>
                        <div className={styles.custom_input}>
                          <Checkbox
                            checked={check.gender}
                            label="Internal"
                          />
                          <ToggleSwitch
                            id="Gender"
                            label={toggle.gender ? "Show" : "Hide"}
                            checked={toggle.gender}
                          />
                          
                         
                        </div>
                      </div>
                      <input type="text" />
                    </div>
                    
                    <div>
                      <p className={styles.change_black} onClick={() => {
                        setShowQuestion(true)
                        window.scrollBy({
                          top:
                            20 *
                            parseFloat(
                              getComputedStyle(document.documentElement).fontSize
                            ),
                          behavior: "smooth",
                        });
                      }}>
                        <img src="/assets/Add.png" alt="" />
                        Add question
                      </p>
                    </div>
                  </form>
                </div>
              </Card>
            </div>
            
            <div className={styles.personal_info_body}>
              <Card title="Profile">
                <div className={styles.personal_body}>
                  <form action="" className={styles.form_body}>
                   
                    <div className={styles.input_checkbox}>
                      <div className={styles.input_label}>
                        <label className={styles.label}>
                          Education
                        </label>
                        <div className={styles.custom_input}>
                          <Checkbox
                            checked={check.education}
                            label="Mandatory"
                          />
                          <ToggleSwitch
                            id="education"
                            label={toggle.education ? "Show" : "Hide"}
                            checked={toggle.education}
                          />
                        </div>
                      </div>
                      <input type="text" />
                    </div>
                    
                    <div className={styles.input_checkbox}>
                      <div className={styles.input_label}>
                        <label className={styles.label}>
                          Experience{" "}
                        </label>
                        <div className={styles.custom_input}>
                          <Checkbox
                            checked={check.experience}
                            label="Mandatory"
                          />
                          <ToggleSwitch
                            id="experience"
                            label={toggle.experience ? "Show" : "Hide"}
                            checked={toggle.experience}
                          />
                        </div>
                      </div>
                      <input type="text" />
                    </div>

                    <div className={styles.input_checkbox}>
                      <div className={styles.input_label}>
                        <label className={styles.label}>Resume </label>
                        <div className={styles.custom_input}>
                          <Checkbox
                            checked={check.resume}
                            label="Mandatory"
                          />
                          <ToggleSwitch
                            id="resume"
                            label={toggle.resume ? "Show" : "Hide"}
                            // label='Naame'
                            checked={toggle.resume}
                          />
                        </div>
                      </div>
                      <input type="text" />
                    </div>

                 

                    <div>
                      <p className={styles.change_black} onClick={() => {
                        setShowQuestion(true)
                        window.scrollBy({
                          top:
                            20 *
                            parseFloat(
                              getComputedStyle(document.documentElement).fontSize
                            ),
                          behavior: "smooth",
                        });
                      }}>
                        <img src="/assets/Add.png" alt="" />
                        Add question
                      </p>
                    </div>
                  </form>
                </div>
              </Card>
            </div>
            
            {
              showQuestion && (
                <>
                  <div>
                    <Card title="Questions">
                      <div className={styles.questions_body}>
                        <div className={styles.select_form}>
                          <label className={styles.label}>Email</label>
                          <select name="questions" id="questions" value={selectOption} onChange={handleSelectChange}
                         >
                            <option value="Choose a question" >Choose a question</option>
                           {options.map((data) => (
                            <>
                              <option value={data.title} key={data.title}>{data.title}</option>
                            </>
                           ))}
                          </select>
                        </div>
                        
                        <div>
                          {
                            selectOption === 'Paragraph' && (
                              <>
                                <div className={styles.select_input_form}>
                                  <label className={styles.label}>Question</label>
                                  <input
                                    type="text"
                                    value={question}
                                    name="lastName"
                                    onChange={handleQuestion}
                                  />
                                  
                                  <div className={styles.input_flex}>
                                    <p className={`${styles.change} ${styles.no_pad}`}>
                                    <img src="/assets/Delete.png" alt="" />
                                    Delete question
                                  </p>
                                  
                                  <button>Save</button>
                                  </div>
                                </div>
                              </>
                            )
                          }
                          
                          {
                            selectOption === 'Multiple choice' && (
                              <>
                                <div className={styles.select_input_form}>
                                  <label className={styles.label}>Question</label>
                                  <input
                                    type="text"
                                    value={question}
                                    name="lastName"
                                    onChange={handleQuestion}
                                  />
                                  
                                  
                                </div>
                                
                                <div className={styles.input_flex_form}>
                                  <img src="/assets/unorderedList.png" alt="" className={styles.menu}/>
                                  
                                  <div className={styles.choice_body}>
                                    <label className={styles.label}> Choice</label>
                                    <input 
                                      type="text"
                                      value={choice}
                                      onChange={handleChoice}
                                      placeholder="Type here"
                                    />
                                  </div>
                                  
                                  <img src="/assets/Add.png" alt="" className={styles.add}/>
                                </div>
                                
                                <Checkbox
                                  checked={checkbox}
                                  label="Enable “Other” option "
                                />
                                
                                <div className={`${styles.select_input_form} ${styles.form_form}`}>
                                  <label className={styles.label}>Question</label>
                                  <input
                                    type="text"
                                    value={multiChoice}
                                    name="multiChoice"
                                    onChange={handleMultiChoice}
                                  />
                                  
                                  
                                </div>
                                
                                <div className={styles.input_flex}>
                                  <p className={`${styles.change} ${styles.no_pad}`}>
                                  <img src="/assets/Delete.png" alt="" />
                                  Delete question
                                </p>
                                
                                <button>Save</button>
                              </div>
                              

                              </>
                            )
                          }
                          
                          {
                             selectOption === 'Dropdown' && (
                              <>
                                <div className={styles.select_input_form}>
                                  <label className={styles.label}>Question</label>
                                  <input
                                    type="text"
                                    value={question}
                                    name="lastName"
                                    onChange={handleQuestion}
                                  />
                                  
                                  
                                </div>
                                
                                <div className={styles.input_flex_form}>
                                  <img src="/assets/unorderedList.png" alt="" className={styles.menu}/>
                                  
                                  <div className={styles.choice_body}>
                                    <label className={styles.label}> Choice</label>
                                    <input 
                                      type="text"
                                      value={choice}
                                      onChange={handleChoice}
                                      placeholder="Type here"
                                    />
                                  </div>
                                  
                                  <img src="/assets/Add.png" alt="" className={styles.add}/>
                                </div>
                                
                                <Checkbox
                                  checked={checkbox}
                                  label="Enable “Other” option "
                                />
                                
                                <div className={styles.input_flex}>
                                  <p className={`${styles.change} ${styles.no_pad}`}>
                                  <img src="/assets/Delete.png" alt="" />
                                  Delete question
                                </p>
                                
                                <button>Save</button>
                              </div>
                              

                              </>
                            )
                          }
                          
                          {
                             selectOption === 'Yes/No' && (
                              <>
                                <div className={styles.select_input_form} style={{marginBottom:'2rem'}}>
                                  <label className={styles.label}>Question</label>
                                  <input
                                    type="text"
                                    value={question}
                                    name="lastName"
                                    onChange={handleQuestion}
                                  />
                                  
                                  
                                </div>
                                
                                <Checkbox
                                  checked={checkbox}
                                  label="Enable “Other” option "
                                />
                                
                                <div className={styles.input_flex}>
                                  <p className={`${styles.change} ${styles.no_pad}`}>
                                  <img src="/assets/Delete.png" alt="" />
                                  Delete question
                                </p>
                                
                                <button>Save</button>
                              </div>
                              

                              </>
                            )
                          }
                          
                        </div>
                        
                       
                      </div>
                    </Card>
                    
                    {
                      selectOption === 'Video questions' && (
                        <>
                          <div style={{marginTop:'4rem'}}>
                            <Card title="Video based questions">
                              <div className = {styles.video_body}>
                                <div className={styles.video_input_body}>
                                  <small>4 minute</small>
                                  <div className={styles.edit_section}>
                                    <label className={styles.label}> 
                                      Tell us about yourself?
                                    </label>
                                    <img src="/assets/Edit.png" alt=""/>
                                  </div>
                                  <input type="text"/>
                                </div>
                                
                                <div className={styles.video_input_body}>
                                  <small>2 minute</small>
                                  <div className={styles.edit_section}>
                                    <label className={styles.label}> 
                                      Why did you apply for this program?
                                    </label>
                                    <img src="/assets/Edit.png" alt=""/>
                                  </div>
                                  <input type="text"/>
                                </div>
                                
                                
                                <div className={styles.video_input_body}>
                                  <label className={styles.label}>Question</label>
                                  <input 
                                    type="text" 
                                    value='Q: Tell us about yourself?'
                                    className={styles.input_input}
                                  />
                                   <textarea
                                    value='Please talk about your achievements, goals and what you worked on as the latest project.'
                                    className={styles.input_input_form}
                                  />
                                  <div className={styles.input_grid}>
                                  <input 
                                    type="text" 
                                    placeholder=" Max duration of video"
                                    className={styles.input_time}
                                  />
                                   <input 
                                    type="text" 
                                    placeholder=" in(sec/min)"
                                    className={styles.input_num}
                                  />
                                  </div>
                                </div>
                                
                                <div className={styles.input_flex_flex}>
                                    <p className={`${styles.change} ${styles.no_pad}`}>
                                    Delete question
                                  </p>
                                  
                                  <button>Save</button>
                                </div>
                                
                                <p className={`${styles.change_purple} ${styles.no_pad}`}>
                                    + Add video interview questions
                                  </p>
                                
                               
                              </div>
                            </Card>
                          </div>
                        </>
                      )
                    }
                  </div>
                </>
              )
            }
          </div>
        </div>
      </BodyLayout>
    </>
  );
};

export default Landing;
