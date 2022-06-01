import React from 'react'
import { Container, Modal } from 'react-bootstrap'
export const ImagePreview = (props) => {
    const {imageOrPdfUrl,imageORFileName,imageORpdf,onHide}=props;
   
    return (
        <>
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body className="show-grid">
                    <Container>
                      
                    <div class="modal-header">
                            <h5 class="modal-title text-danger" id="exampleModalLabel">{imageORFileName}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onHide}></button>
                        </div>
                        <div class="modal-body">
                            {
                                                  
                               <iframe
                                src={imageOrPdfUrl}
                                frameBorder="0"
                                scrolling="auto"
                                height="100%"
                                width="100%"
                            ></iframe>
                                
                            }
                            
                            
                        </div>
                        
                    </Container>
                </Modal.Body>
        </Modal>
        
       

    </>

  )
}
