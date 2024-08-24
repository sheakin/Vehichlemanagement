import commonApi from "./commonApi";


export const getCustomers=()=>{
    return commonApi("","GET","http://127.0.0.1:8000/customer/","")
}