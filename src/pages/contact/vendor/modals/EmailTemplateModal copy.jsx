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
    const intialValues = { name: "", body: "", subject: "", template_type: "email" }
    const [formData, setFormData] = useState(intialValues);
    // console.log(formData.body)
    const [id, setId] = useState("")
    const [headerButtonStatus, setHeaderButtonStatus] = useState("");
    const [checkTemplateName, setCheckTemplateName] = useState("");
    //USeEffect for get template
    useEffect(() => {
        getTemplateDataById();
        getTemplateName()
    }, [id]);



    const onChange = (e) => {
        const { value, id } = e.target
        setBody(value)
        setFormData({ ...formData, [id]: value })
        setId(value);
        setSubtemplateDetails("");

        //getSelect templatename
        var e = document.getElementById("template_type");

        var strUser = e.value&&e.options[e.selectedIndex]?.text;
        const checkTemplateNames= strUser.substring(strUser.indexOf('-') + 1);
        setCheckTemplateName(checkTemplateNames)
    }
    const onChange1 = (e) => {
        const { value, id } = e.target
        setBody(value)
        setFormData({ ...formData, [id]: value })
        // setId(value)
        setSubtemplateDetails("")
    }


    // =>Email Template Add Data
    const handleAddEmailTemplates = async () => {
        await emailServices.addEmailtemplate(formData)
        setFormData(intialValues)
        onHide();

    }
    //Send EmailData api
    const handleSendEmailTemplatesData = async () => {
        try {

            await emailServices.sendTemplateData({ contact_ids: rowSelectedData, template_id: 35 })
            //  const body = {contacts_ids:rowSelectedData,template_id:parseInt(id)}
            //  await emailServices.sendTemplateData(body)
            setFormData(intialValues)
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
    // useEffect(() => {
    //     getTemplateName()
    // }, [id]);
    return (
        <>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row className={'my-2'}>
                            <Col xs={12} >
                                <ul className="nav nav-pills mb-3 formButtons" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className={`nav-link shadow-1 theme-bg border border-0 ${checkTemplateName===""?"active":"" }`} id="pills-home-tab" onClick={() => { setDocumentButton(false); setHeaderButtonStatus("") }} data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Document</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className={`nav-link shadow-1 theme-bg border border-0 ${checkTemplateName==="email"?"active": ""}`} id="pills-profile-tab" onClick={() => { setDocumentButton(true); setHeaderButtonStatus("email") }} data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Email</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className={`nav-link shadow-1 theme-bg border border-0 ${checkTemplateName==="sms"?"active": ""}`} id="pills-contact-tab" onClick={() => { setDocumentButton(true); setHeaderButtonStatus("sms") }} data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">SMS</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className={`nav-link shadow-1 theme-bg border border-0 ${checkTemplateName==="snail"?"active": ""}`} id="pills-contact-tab" onClick={() => { setDocumentButton(true); setHeaderButtonStatus('snail') }} data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Snail</button>
                                    </li>
                                </ul>

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
                                                    <option onChange={onChange} value={templateData.id} >
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
                                headerButtonStatus == "email" && <Col xs={12} md={8} lg={8} >
                                    <input className="form-control form-control-sm" type="text" placeholder="Subject" id='subject' value={formData.subject} onChange={onChange1} aria-label=".form-control-sm example" disabled={id} />
                                </Col>
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
                                                                                <li ><a onClick={() => setSubtemplateDetails(`&&${TemplateName + "." + subtemplateDetails}&&`)}>{subtemplateDetails}</a></li>
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
                                        <EmailTemplateModalAlert show={modalShowAlert} onHide={() => setModalShowAlert(false)} countRows={countRows} formData={formData} onChange={onChange} handleAddEmailTemplates={handleAddEmailTemplates} />
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
                                    id ? <button onClick={removeTemplate} className="btn btn-danger">Delete</button>
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
