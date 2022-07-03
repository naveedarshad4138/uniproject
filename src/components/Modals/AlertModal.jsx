import React from 'react'

export const AlertModal = (props) => {
    const {deleteItem} = props;
  return (
    <>


{/* // <!-- Modal --> */}
<div className="modal fade" id="staticBackdropAlertModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropAlertModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content newItem p-0">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropAlertModalLabel">Are you want delete this Item?</h5>
        <button type="button" className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p className='text-danger'> Please Click <b>Confirm Button</b> For Delete Item  </p>
      </div>
      <div className="modal-footer header">
        <button type="button" className="btn" data-bs-dismiss="modal">Cancle</button>
        <button  className="button btn" onClick={deleteItem} data-bs-dismiss="modal">Confirm</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
