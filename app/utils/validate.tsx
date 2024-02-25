export const checkValidData = (email:string,password:string) =>{
    console.log("Validating data")
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    
    const isEmailValid = emailRegex.test(email);
    if(!isEmailValid) return "Email ID is not valid";
    
    const isPasswordValid = passwordRegex.test(password);
    if(!isPasswordValid) return "Password is not valid";

    return null;

}