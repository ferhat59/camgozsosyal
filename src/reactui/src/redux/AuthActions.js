import {kayit, login} from "../api/apiCalls";

export const  logoutSuccess = ()=>{
    return {
        type:"logout-success"
    };
}
export const  loginSuccess = authData=>{
    return {
        type:"login-success",
        payload:authData
    };
}
export const  loginHandler = (cred) => {
   return async  dispatch =>{
       const response= await login(cred);
       const authData ={
           ... response.data,
           password:cred.password
       }
       dispatch(loginSuccess(authData) );
       return response;
    }
}
export const singupHangler= (user) =>{
    return async dispatch =>{
        const response = await kayit(user);
        const creds ={
            username:user.userName,
            password:user.password
        }
        await dispatch(loginHandler(creds));
        return response;
    }
}