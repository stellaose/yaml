import React, { useState } from "react";
import BodyLayout from "./BodyLayout";
import Card from "./Card";
import styles from "../Landing.module.scss";
import ToggleSwitch from "./ToggleSwitch";
import Checkbox from "./Checkbox";

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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectOption, setSelectOption] = useState('')
  const [question, setQuestion] = useState('')

  const [checkedPhone, setCheckedPhone] = useState(false);
  const [checkboxPhone, setCheckboxPhone] = useState(false);

  const [checkedNation, setCheckedNation] = useState(false);
  const [checkboxNation, setCheckboxNation] = useState(false);

  const [checkedResidence, setCheckedResidence] = useState(false);
  const [checkboxResidence, setCheckboxResidence] = useState(false);

  const [checkedID, setCheckedID] = useState(false);
  const [checkboxID, setCheckboxID] = useState(false);

  const [checkedDOB, setCheckedDOB] = useState(false);
  const [checkboxDOB, setCheckboxDOB] = useState(false);
  
  const [checkedGender, setCheckedGender] = useState(false);
  const [checkboxGender, setCheckboxGender] = useState(false);
  
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

  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
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

  const handleToggleChange = (checked: boolean) => {
    setCheckedPhone(checked);
  };
  
  const handleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  const handleCheckboxPhone = () => {
    setCheckboxPhone(!checkboxPhone);
  };

  const handleToggleNation = (checked: boolean) => {
    setCheckedNation(checked);
  };

  const handleCheckNation = () => {
    setCheckboxNation(!checkboxNation);
  };

  const handleToggleResidence = (checked: boolean) => {
    setCheckedResidence(checked);
  };

  const handleCheckResidence = () => {
    setCheckboxResidence(!checkboxResidence);
  };

  const handleToggleID = (checked: boolean) => {
    setCheckedID(checked);
  };

  const handleCheckID = () => {
    setCheckboxID(!checkboxID);
  };

  const handleToggleDOB = (checked: boolean) => {
    setCheckedDOB(checked);
  };

  const handleCheckDOB = () => {
    setCheckboxDOB(!checkboxDOB);
  };
  
  const handleToggleGender = (checked: boolean) => {
    setCheckedGender(checked);
  };

  const handleCheckGender = () => {
    setCheckboxGender(!checkboxGender);
  };
  
  

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
                        value={firstName}
                        name="firstName"
                        onChange={handleFirstName}
                      />
                    </div>
                    <div className={styles.input_form}>
                      <label className={styles.label}>LastName</label>
                      <input
                        type="text"
                        value={lastName}
                        name="lastName"
                        onChange={handleLastName}
                      />
                    </div>
                    <div className={styles.input_form}>
                      <label className={styles.label}>Email</label>
                      <input
                        type="email"
                        value={email}
                        name="email"
                        onChange={handleEmail}
                      />
                    </div>
                    <div className={styles.input_checkbox}>
                      <div className={styles.input_label}>
                        <label className={styles.label}>
                          Phone <span>(without dial code)</span>
                        </label>
                        <div className={styles.custom_input}>
                          <Checkbox
                            checked={checkboxPhone}
                            onChange={handleCheckboxPhone}
                            label="Internal"
                          />
                          <ToggleSwitch
                            id="phoneNumber"
                            label={checkedPhone ? "Show" : "Hide"}
                            checked={checkedPhone}
                            onChange={handleToggleChange}
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
                            checked={checkboxNation}
                            onChange={handleCheckNation}
                            label="Internal"
                          />
                          <ToggleSwitch
                            id="nationality"
                            label={checkedNation ? "Show" : "Hide"}
                            // label='Naame'
                            checked={checkedNation}
                            onChange={handleToggleNation}
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
                            checked={checkboxResidence}
                            onChange={handleCheckResidence}
                            label="Internal"
                          />
                          <ToggleSwitch
                            id="residence"
                            label={checkedResidence ? "Show" : "Hide"}
                            checked={checkedResidence}
                            onChange={handleToggleResidence}
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
                            checked={checkboxID}
                            onChange={handleCheckID}
                            label="Internal"
                          />
                          <ToggleSwitch
                            id="ID"
                            label={checkedID ? "Show" : "Hide"}
                            checked={checkedID}
                            onChange={handleToggleID}
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
                            checked={checkboxDOB}
                            onChange={handleCheckDOB}
                            label="Internal"
                          />
                          <ToggleSwitch
                            id="DOB"
                            label={checkedDOB ? "Show" : "Hide"}
                            checked={checkedDOB}
                            onChange={handleToggleDOB}
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
                            checked={checkboxGender}
                            onChange={handleCheckGender}
                            label="Internal"
                          />
                          <ToggleSwitch
                            id="Gender"
                            label={checkedGender ? "Show" : "Hide"}
                            checked={checkedGender}
                            onChange={handleToggleGender}
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
                                  onChange={handleCheckbox}
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
                                  onChange={handleCheckbox}
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
                                  onChange={handleCheckbox}
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
                                    + Delete question
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
