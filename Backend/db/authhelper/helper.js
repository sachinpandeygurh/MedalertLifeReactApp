const bcrypt = require("bcrypt");
const hashPassword = async(password)=>{
try {
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password,saltRound);
    return hashedPassword;
} catch (error) {
    throw new Error('there is an error hashing the password')
}
}
const ComparePassword = (password,hashedPassword)=>{
    
return bcrypt.compare(password,hashedPassword);
}
module.exports = {hashPassword,ComparePassword}