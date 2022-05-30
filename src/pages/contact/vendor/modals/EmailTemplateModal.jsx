import React, { useEffect, useState, useRef } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
// =>Import Files here
import { EmailTemplateModalAlert } from './EmailTemplateModalAlert'
import "../../../../index.css";
//=> Email Services
import emailServices from '../../../../services/emailServices'
import httpService from '../../../../services/httpService';
import { NAV_LIST_TITLE_COLOR } from '../../../../store/actions';

export const EmailTemplateModal = (props) => {
    const [documentButton, setDocumentButton] = useState(true);
    const { onHide, countRows, emailTemplateVariablesNames, getTemplateData, rowSelectedData, getTemplateName } = props;
    //EmailTemplateModalAlert States
    const [modalShowAlert, setModalShowAlert] = useState(false);
    //handle Template name and its keys
    const [TemplateName, setTemplateName] = useState(null);
    const [SubtemplateDetails, setSubtemplateDetails] = useState("");
    const [body, setBody] = useState("");
    const intialValues = { name: "", body: "", subject: "", template_type:"" }
    const [formData, setFormData] = useState("");
    // console.log(formData.body)
    const [id, setId] = useState("")
    const [headerButtonStatus, setHeaderButtonStatus] = useState("");
    const [checkTemplateName, setCheckTemplateName] = useState("");
    //USeEffect for get template
    useEffect(() => {
        getTemplateDataById();
        getTemplateName();

    }, [id]);

    const onChange = (e) => {
        const { value, id } = e.target
        setBody(value)
        setFormData({ ...formData, [id]: value })
        setId(value);
        setSubtemplateDetails("");
        //getSelect templatename
        var e = document.getElementById("template_type");
        var strUser = e.value && e.options[e.selectedIndex]?.text;
        const checkTemplateNames = strUser.substring(strUser.indexOf('-') + 1);
        setCheckTemplateName(checkTemplateNames)
        setHeaderButtonStatus("")
    }
    const onChange1 = (e) => {
        const { value, id } = e.target
        console.log(id, value)
        if (id === 'body') {
            setBody(value)
        }
        setFormData({ ...formData, [id]: value })
        if (id == 'body') {
            setSubtemplateDetails("")
        }
    }


    useEffect(() => {
        console.log(formData)
    }, [formData])



    // =>Email Template Add Data
    const handleAddEmailTemplates = async () => {
        try {
            // formData.template_type = "email"
            console.log(formData)
            await emailServices.addEmailtemplate(formData)
            setFormData("")
            setSubtemplateDetails("")
            getTemplateName()
            onHide();
        } catch (error) {
            console.log(error)
        }


    }
    //Send EmailData api
    const handleSendEmailTemplatesData = async () => {
        try {

            await emailServices.sendTemplateData({ contact_ids: rowSelectedData, template_id: 35 })
            //  const body = {contacts_ids:rowSelectedData,template_id:parseInt(id)}
            //  await emailServices.sendTemplateData(body)
            setFormData(intialValues)
            setCheckTemplateName("")
            setId("")
        } catch (error) {
            console.log(error)
        }
        // setFormData(intialValues)
        onHide();

    }

    //Get Specfic template data by Template Name
    const getTemplateDataById = async (data) => {
        try {
            const source = httpService.getSource();
            const templates = await emailServices.getTemplateByName(id, source)
            setFormData(templates)
        } catch (error) {
            console.log(error)
        }

    }
    //RemoveAll Values after disCard
    const disCard = () => {
        onHide()
        setFormData(intialValues)
        setId("")
    }
    //Remove Tempalte Name inDropDown
    const removeTemplate = async () => {
        try {
            const source = httpService.getSource();
            await emailServices.deleteTemplateByName(id, source)
            setFormData(intialValues)
            setId('')
        } catch (error) {
            console.log(error)
        }


    }

    useEffect(() => {
        if (headerButtonStatus && headerButtonStatus != "email") {
            console.log(headerButtonStatus)
            setFormData({ ...formData, template_type: headerButtonStatus, subject: "" })
        }
        if (headerButtonStatus == "email") {
            setFormData({ ...formData, template_type: headerButtonStatus })
        }

    }, [headerButtonStatus])


    return (
        <>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row className={'my-2'}>
                            <Col xs={12} >

                                {/* omDropdown */}
                                <div className="nav nav-pills mb-3 formButtons">
                                    {/* <li className="nav-item" role="presentation"> */}
                                        <button className={`nav-link shadow-1 theme-bg border border-0 btn btn-md ${( checkTemplateName === "" && headerButtonStatus=== "") ?"active":""}`}  onClick={() => { setDocumentButton(true); setHeaderButtonStatus("") }}  disabled={checkTemplateName}>Document</button>
                                    {/* </li> */}
                                    {/* <li className="nav-item" role="presentation"> */}
                                        <button className={`nav-link shadow-1 theme-bg border border-0 btn btn-md ${( checkTemplateName === "email" || headerButtonStatus=== "email") ?"active":""}`} id="pills-profile-tab" onClick={() => { setDocumentButton(true); setHeaderButtonStatus("email") }}  disabled={checkTemplateName}>Email</button>
                                    {/* </li> */}
                                    {/* <li className="nav-item" role="presentation"> */}
                                        <button className={`nav-link shadow-1 theme-bg border border-0 btn btn-md ${(checkTemplateName === "sms" || headerButtonStatus=== "sms") ?"active":""}`} id="pills-contact-tab" onClick={() => { setDocumentButton(true); setHeaderButtonStatus("sms") }}  disabled={checkTemplateName}>SMS</button>
                                    {/* </li> */}
                                    {/* <li className="nav-item" role="presentation"> */}
                                        <button className={`nav-link shadow-1 theme-bg border border-0 btn btn-md ${(checkTemplateName === "snail" || headerButtonStatus=== "snail") ?"active":""}`} id="pills-contact-tab" onClick={() => { setDocumentButton(true); setHeaderButtonStatus('snail') }}  disabled={checkTemplateName}>Snail</button>
                                    {/* </li> */}
                                </div>
                                
                            </Col>
                        </Row>

                        <Row className={'my-2'}>

                            <Col xs={12} md={4} lg={4} >
                                <select className="form-select form-select-sm bg-light" aria-label=".form-select-sm " id='template_type' onChange={onChange}>
                                    {id ? <option selected value={""}>New template</option>
                                        :
                                        <option selected value={""}>Select A template</option>
                                    }
                                    {
                                        getTemplateData?.map((templateData) => {
                                            return (
                                                <>
                                                    <option onChange={onChange} value={templateData.id}  >
                                                        {templateData.name + "-" + templateData.template_type}
                                                    </option>

                                                </>
                                            )

                                        }
                                        )
                                    }
                                </select>

                            </Col>

                            {
                                ((headerButtonStatus == "email" || checkTemplateName === "email") || (headerButtonStatus == "email" || checkTemplateName === "email") && headerButtonStatus === "") ? <Col xs={12} md={8} lg={8} >
                                    <input className="form-control form-control-sm" type="text" placeholder="Subject" id='subject' value={formData.subject} onChange={onChange1} aria-label=".form-control-sm example" disabled={id} />
                                </Col> : ""
                            }

                        </Row>
                        <Row className={'my-2 email_textArea'}>
                            <Col xs={12} md={12} lg={12}>
                                <textarea className="form-control" placeholder="Leave a comment here" rows={12} id='body' onChange={onChange1} value={formData.body ? formData.body + SubtemplateDetails : SubtemplateDetails} disabled={id}></textarea>
                            </Col>
                            {!id &&
                                <Row className="select_template align-items-center">

                                    <Col sm={12} md={4} lg={4}>
                                        <ul className="emailTemplateModal">
                                            <li><a>Insert a variable</a>
                                                <ul>
                                                    {
                                                        Object?.keys(emailTemplateVariablesNames)
                                                            ?.map((templateNames, index) => (

                                                                <li onMouseMove={() => setTemplateName(templateNames)}><a>{templateNames}</a>

                                                                    <ul className="ello">
                                                                        {

                                                                            emailTemplateVariablesNames[TemplateName]?.map((subtemplateDetails) => (
                                                                                <li ><a onClick={() => { setSubtemplateDetails(`&&${TemplateName + "." + subtemplateDetails}&&`) }}>{subtemplateDetails}</a></li>
                                                                            )

                                                                            )
                                                                        }


                                                                    </ul>
                                                                </li>

                                                            ))
                                                    }
                                                </ul>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col sm={12} md={8} lg={8} className={"text-end"}>
                                        <EmailTemplateModalAlert show={modalShowAlert} onHide={() => setModalShowAlert(false)} countRows={countRows} formData={formData} onChange={onChange1} handleAddEmailTemplates={handleAddEmailTemplates} />
                                        {/* //EmailTemplateModalAlert */}
                                        <button onClick={() => setModalShowAlert(true)} className="btn btn-ligth">Save as Template</button>

                                    </Col>

                                </Row>
                            }
                        </Row>

                        <Row className={'my-2 align-items-center'}>
                            <Col sm={12} md={8} lg={8}>
                                <Button onClick={handleSendEmailTemplatesData}
                                    className="shadow-1 theme-bg border border-0"
                                    style={{
                                        height: '3rem'
                                    }}
                                > Send</Button>
                                {
                                    id ? <button onClick={removeTemplate} className="shadow-1 border border-0 btn-lg btn-danger">Delete</button>
                                        :
                                        <button onClick={disCard} className="btn btn-ligth">Discard</button>
                                }

                            </Col>
                            <Col sm={12} md={4} lg={4} className={"text-end"}>
                                <p><span>{countRows}</span> Contacts Selected</p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    )
}