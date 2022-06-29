import { doc, setDoc, collection, getDocs, query, orderBy } from "firebase/firestore";
import { actionType } from "../context/reducer";
import { firestore,storage } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';


export const saveItem = async (table, data) => {
  await setDoc(doc(firestore, table, `${Date.now()}`), data, {
    merge: true
  })
}



////////////////////// Upload Image on firebase ///////////////////////////////

export const uploadImage = (imageFile,setConditions)=> {
const storageRef = ref(storage, `images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error)
        // Handle unsuccessful uploads
        setConditions({
          fields: true,
          msg: "Error While Upload, Try Again",
          alertStatus: 'danger'
        })
        setTimeout(() => {
          setConditions({
            fields: false,
            isLoading: false
          })
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setConditions({
            imageAsset: downloadURL,
            fields: true,
            isLoading: false,
            msg: "Image Successfully Uploaded",
            alertStatus: "Success"
          });
          setTimeout(() => {
            setConditions({
              imageAsset: downloadURL,
              fields: '',

            })
          }, 4000);

        });

      }
    );
}

///////////////////////////// Deleted Uploaded Image ////////////////////////
export const deleteUpload = (conditions,setConditions) => {
  const deleteRef = ref(storage, conditions.imageAsset);
  // Delete the file
  deleteObject(deleteRef).then(() => {
    // File deleted successfully
    setConditions({
      imageAsset: "",
      fields: true,
      isLoading: false,
      msg: "Image Deleted Successfully",
      alertStatus: "Success"
    });
    setTimeout(() => {
      setConditions({
        fields: '',

      })
    }, 4000);
  })
}
//Get Collection from fireStore 
export const getItem = async (itemsId,items) => {
  const Items = await getDocs(query(collection(firestore, items), orderBy(itemsId, "desc")));
  return (Items.docs.map(doc => doc.data()));
}
//fetchFoodItems firesotre and Save into Reducer
export const fetchFoodItems = async (foodItems, dispatch) => {
  try {
    const data = await getItem('itemId','foodItems');
    dispatch({
      type: actionType.GET_FOODITEMS,
      foodItems: data
    })
  } catch (error) {
    console.log(error)
  }
}
//fetchCategory firesotre and Save into Reducer
export const fetchCategory = async (categoryItems, dispatch) => {
  try {
    const data = await getItem('categoryId','categoryItems');
    dispatch({
      type: actionType.GET_CATEGORYITEMS,
      categoryItems: data
    })
  } catch (error) {
    console.log(error)
  }
}


