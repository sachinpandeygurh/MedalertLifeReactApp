const bcrypt = require("bcrypt");
const hashPassword = async(password)=>{
try {
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password,saltRound);
    return hashedPassword;
} catch (error) {
    ////console.log(error)
}
}
const ComparePassword = (password,hashedPassword)=>{
    
return bcrypt.compare(password,hashedPassword);
}
module.exports = {hashPassword,ComparePassword}