import React from 'react'

export const ImagePreview = (props) => {
    const {imageOrPdfUrl,imageORFileName,imageORpdf}=props;
    return (
        <>
        
            <div class="modal fade imagePreviewORfilePreview" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content" style={{ height: "500px" }}>
                        <div class="modal-header">
                            <h5 class="modal-title text-danger" id="exampleModalLabel">{imageORFileName}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                        {/* <div class="modal-footer">
                            <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
                        </div> */}
                    </div>
                </div>
            </div>
       

    </>

  )
}
