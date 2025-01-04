import Cookies from 'js-cookie';
const SESSION_TOKEN = "sessionToken"

const USER_DATA = "userData";
const TASK_DATA = 'taskData'
const SESSION_EXPIRY = 1;// in days (1)

class SessionManager{
    static session = new SessionManager();

    setSessionToken(token){
 
        Cookies.set(SESSION_TOKEN,token,{expires:SESSION_EXPIRY});
    }
   
storeUserData(user){
    Cookies.set(USER_DATA,JSON.stringify(user),{expires:SESSION_EXPIRY});
}
   getSessionToken(){
    return Cookies.get(SESSION_TOKEN);
   }

   getUserData(){
    const userData = Cookies.get(USER_DATA)
    return userData ? JSON.parse(userData):null; 
   }
  
   logoutUser(){
    Cookies.remove(SESSION_TOKEN);
          Cookies.remove(USER_DATA);
   
   }
}

export default SessionManager;