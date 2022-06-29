import React, { useState } from 'react'
import { GiOpenedFoodCan } from 'react-icons/gi'
import { useStateValue } from '../../context/StateProvider';
import { fetchCategory, saveItem } from '../../utils/FirebseFunctions';

export const CategoryModal = (props) => {
    const {setConditions } = props;
    //getCategory
    const [{categoryItems},dispatch] = useStateValue();
    const [formInputFields, setformInputFields] = useState({
        categoryName:''
    });
    // => ////////////////////// CHangeFormValue ////////////////////
    const formValueChange = (e) => {
        const { value, id } = e.target;
        setformInputFields({...formInputFields, [id]: value })
    }
    const saveCategory = async() => {
        try {
            formInputFields.categoryId = `${Date.now()}`;
            await saveItem('categoryItems', formInputFields);
            await setConditions({
              imageAsset: "",
              fields: true,
              isLoading: false,
              msg: "Category Added Successfully",
              alertStatus: "Success"
            });
            await setTimeout(() => {
              setConditions({
                fields: '',
              })
            }, 4000);
            fetchCategory(categoryItems, dispatch);
            
          } catch (error) {
            await setConditions({
              imageAsset: "",
              fields: true,
              isLoading: false,
              msg: "Category do not Added, Try Again",
              alertStatus: "danger"
            });
            await setTimeout(() => {
              setConditions({
                fields: '',
              })
            }, 4000);
          }
          setformInputFields({categoryName:''});

    }
    return (
        // <!-- Modal -->
        <div className="modal fade" id="staticBackdropCategory" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropCategoryLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" >
                <div className="modal-content newItem">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropCategoryLabel">Add New Category</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body row gx-5">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="p-1">
                                <div className="input-group mb-1">
                                    <span className='input-group-text'><GiOpenedFoodCan /></span>
                                    <input className="form-control" value={formInputFields.categoryName} id='categoryName'  placeholder='Add New Category' onChange={formValueChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                        <button type="button" className="btn button" data-bs-dismiss="modal" onClick={saveCategory}>Save Category</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
