import { commonRequest } from "./commonRequest";
import { BASE_URL } from "./Base_url";



//register api
export const empRegister = async(body,header)=>{
  return await commonRequest("POST",`${BASE_URL}/employee/register`,body,header)
}

//Get all user api
export const getallusers = async(search)=>{
  return await commonRequest("GET",`${BASE_URL}/get-all-employees?search=${search}`,"")
}

//get a particular user 

export const viewUser = async(id)=>{
  return await commonRequest("GET",`${BASE_URL}/employee/view/${id}`,"")
}

//edit API
export const editUser = async(id,body,header)=>{
  return await commonRequest("PUT",`${BASE_URL}/employee/edit/${id}`,body,header)
}

//DELETEUSER API
export const deleteuser = async(id)=>{
  return await commonRequest("DELETE",`${BASE_URL}/employee/delete/${id}`,{})
}