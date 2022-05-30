import http from "./httpService";
// Import Endpoints
import { emailTemplateVariablesNameUrl, emailTemplateUrl,sendTemplateDataUrl} from '../config/Endpoints';

const apiEndpoint=`${emailTemplateVariablesNameUrl}`

const getEmailtemplateVariablesNames=async(source)=>{
    try {
        const {data}=await http.get(`${apiEndpoint}?format=json`,{ cancelToken: source?.token })
        return data
    } catch (error) {
        console.log(error)
        return []
    }
 
 }
 const addEmailtemplate=async(body)=>{
    try {
        console.log(body)
        const {data}=await http.post(`${emailTemplateUrl}?format=json`,body)
        return data
    } catch (error) {
        console.log(error)
        return []
    }
 
 }
 
const getEmailtemplate=async(source)=>{
    try {
        const {data}=await http.get(`${emailTemplateUrl}?format=json`,{ cancelToken: source?.token })
        return data
    } catch (error) {
        console.log(error)
        return []
    }
 
 }
  const getTemplateByName=async(id,source)=>{
    try {
        const {data}=await http.get(`${emailTemplateUrl}${id}/`,{ cancelToken: source?.token })
        return data
    } catch (error) {
        console.log(error)
        return []
    }
 
 }
 const deleteTemplateByName=async(id,source)=>{
    try {
        const {data}=await http.delete(`${emailTemplateUrl}${id}/`,{ cancelToken: source?.token })
        return data;
    } catch (error) {
        console.log(error)
        return []
    }
 
 }
 const sendTemplateData=async(body)=>{
    try {
        console.log(body)
        const {data}=await http.post(`${sendTemplateDataUrl}`,body)
        return data
    } catch (error) {
        console.log(error)
        return []
    }
 
 }
export default {
    getEmailtemplateVariablesNames,
    addEmailtemplate,
    getEmailtemplate,
    getTemplateByName,
    sendTemplateData,
    deleteTemplateByName
  
}