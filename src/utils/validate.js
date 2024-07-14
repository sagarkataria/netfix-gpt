export const chackValidData = (email,password) => {

   const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
   const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

   if(!isEmailValid) return "Email address is not valid";
   if(!isPasswordValid) return "Password must contain at least 8 characters, one uppercase";

   return null;
}