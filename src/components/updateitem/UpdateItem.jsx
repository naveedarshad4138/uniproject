import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../context/StateProvider';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
//=>Icons
import { MdOutlineFastfood, MdCloudUpload, MdFoodBank, MdAttachMoney } from 'react-icons/md'
import { GiOpenedFoodCan } from 'react-icons/gi'
import { Locader } from '../Locader';
//=>Import fireBase
import { saveItem, fetchFoodItems, uploadImage, deleteUpload, getItemById, updateItemById } from '../../utils/FirebseFunctions';
import { AlertBox } from '../AlertBox';
import { CategoryModal } from '../Modals/CategoryModal';



export const UpdateItem = () => {
  const initialState = {
    fields: false,
    alertStatus: 'danger',
    msg: null,
    isLoading: false
  }
  const [conditions, setConditions] = useState(initialState);
  const initialStateInput = {
    title: '',
    category: '',
    calories: '',
    price: '',
    imageAsset: '',
  }


  const [inputData, setInputData] = useState(initialStateInput);
  const params =useParams();
  let navigate = useNavigate()
  useEffect(() => {
    fetchDataById();
  }, []);
  const fetchDataById = async() => {
    const singleData =   await getItemById('foodItems','itemId',params.id);
    conditions.imageAsset = `${singleData[0].imageAsset}`;
    inputData.imageAsset = `${singleData[0].imageAsset}`;
    setInputData(singleData[0]);
  }
  
  //ButtonDisabled Condition
  const buttonDisabledCondition = !inputData.title || !inputData.category || !inputData.calories || !inputData.price || !conditions.imageAsset || !inputData.imageAsset;
  //All Foods Items from reducer State
  const [{ foodItems,categoryItems}, dispatch] = useStateValue();
  // => ////////////////////// CHangeFormValue ////////////////////
  const formValueChange = (e) => {

    const { value, id } = e.target;
    console.log(value)
    setInputData({ ...inputData, [id]: value })
  }
  // => ////////////////////// Handle UploadImage ///////////////////////
  const handleChangeImage = e => {
    setConditions({ isLoading: true })

    const imageFile = e.target.files[0];
    //Upload Image onFirebase
    uploadImage(imageFile, setConditions)
  }
  //=> ///////////Delete Uploaded Image from Firebase /////////////////// 
  const deleteUploadImage = () => {
    setConditions({ isLoading: true })
    deleteUpload(conditions, setConditions)
  }
  //=> ///////////////////////Save item on Firebase ////////////////////
  const SubmitDataHandler = async () => {
    setConditions({ isLoading: true })
    inputData.imageAsset = conditions.imageAsset;
    //  console.log(inputData)
    try {
      await updateItemById('foodItems',params.id,inputData);
      await setConditions({
        // imageAsset: "",
        fields: true,
        isLoading: false,
        msg: "Item Updated Successfully",
        alertStatus: "Success"
      });
      await setTimeout(() => {
        setConditions({
          fields: '',
        })
      }, 4000);
      setInputData(initialStateInput);
      fetchFoodItems(foodItems, dispatch);
      fetchDataById();
      navigate('/allitems')
    } catch (error) {
      await setConditions({
        fields: true,
        isLoading: false,
        msg: "Item do not Updated, Try Again",
        alertStatus: "danger"
      });
      await setTimeout(() => {
        setConditions({
          fields: '',
        })
      }, 4000);
    }
  }

  return (
    <div>
      {
        conditions.fields && (
          <AlertBox alertStatus={conditions.alertStatus} msg={conditions.msg} />
        )
      }
      <div className="row">
        <div className='col align-self-center'>
          <div className="container newItem overflow-hidden">
            <div className="dots">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="row gx-5">
              <div className="col-sm-12 col-md-6 col-lg-6">
                {/* //Title */}
                <div className="p-1 ">
                  <div className="input-group mb-4">
                    <span className="input-group-text"><MdFoodBank /></span>
                    <input type="text" id='title' value={inputData.title} onChange={formValueChange} className="form-control" placeholder="Add Title" aria-label="title" />
                  </div>
                </div>
                {/* //Calories */}
                <div className="p-1 ">
                  <div className="input-group mb-4">
                    <span className="input-group-text"><MdOutlineFastfood /></span>
                    <input type="number" id='calories' value={inputData.calories} onChange={formValueChange} className="form-control" placeholder="Add Calories" aria-label="calories" />
                  </div>
                </div>

              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="p-1">
                  <div className="input-group mb-4">
                    <span className='input-group-text'><GiOpenedFoodCan /></span>
                    <input className="form-control" value={inputData.category} id='category' list="mylist" placeholder='Add Category' onChange={formValueChange} />
                     {/* <!-- Button trigger modal --> */}
                     <button type="button" class="btn button" data-bs-toggle="modal" data-bs-target="#staticBackdropCategory">
                        +
                      </button>
                    <datalist id="mylist">
                     
                      
                      {
                        categoryItems && categoryItems?.map(n => (
                          <option value={n.categoryName}>{n.categoryName}</option>
                        ))
                      }
                    </datalist>

                  </div>
                </div>
                {/* //Price */}
                <div className="p-1 ">
                  <div className="input-group mb-4">
                    <span className="input-group-text"><MdAttachMoney /></span>
                    <input type="number" id='price' value={inputData.price} onChange={formValueChange} className="form-control" placeholder="Add price" aria-label="price" />
                  </div>
                </div>

              </div>
              {/* //Image Section */}
              <div className='col align-self-center'>
                <div className="p-1 position-relative  mb-4">

                  {
                    conditions.isLoading ? <div className=" imageBox"> <Locader /></div> :

                      !conditions.imageAsset ? <div className=" imageBox">
                        <div className="position-absolute  uploadImage imageAsset" >
                          <label htmlFor='imageAsset'>
                            <MdCloudUpload />
                            <span className="text-warning">Click here to Upload</span>
                          </label>
                          <input type="file" name='imageAsset' id='imageAsset' accept='image/*' hidden onChange={handleChangeImage} />
                        </div>
                      </div>
                        :
                        <div className=" imageAsset position-relative" >
                          <button className='position-absolute'
                            onClick={deleteUploadImage}
                          >X</button>
                          <img src={conditions.imageAsset} className="img-thumbnail mx-auto rounded" alt="" />
                        </div>

                  }

                </div>
                <motion.button whileTap={{ scale: 0.6 }} className="button btn mt-4 float-end"
                  disabled={buttonDisabledCondition}
                  onClick={SubmitDataHandler}>Update Item</motion.button>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* {Category Modal} */}
      <CategoryModal setConditions= {setConditions} />
    </div>
  )
}
