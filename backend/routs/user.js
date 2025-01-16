const router = require ("express").Router();
const User = require("../models/user") ;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")


//sign in api
router.post("/signin", async (req , res) =>{

    try{
        const { username } =  req.body ;
        const { email } =  req.body ;
        const existingUser = await User.findOne({ username: username})
        const existingEmail = await User.findOne({ email: email})
            if (existingUser)
            {
        return res.status(400).json({message:"Username is already exists"})

            } else if (username.length < 3){
        return res.status(400).json({message:"Username should have at least 4 caractairs"})
        }
        if (existingEmail)
            {
        return res.status(400).json({message:"Email is already exists"})
            }
        
            const hashPass = await bcrypt.hash(req.body.password, 10);
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashPass,
            }) ;
            await newUser.save();
            return res.status(200).json({ message: "signin successfully"})
    }
    catch(error){
console.log(error);
return res.status(400).json({message:" server error"})
    }
}) ;

//login
router.get("/login", async (req , res)=>{
    const { username, password } = req.body;
    const existingUser = await User.findOne({username: username});
    if (!existingUser) {
        return res.status(400).json({ message: "Username or password incorrect"})

    }
    bcrypt.compare(password, existingUser.password, (err, data)=>{
if(data){
    const authClaims = ({name: username},{jti: jwt.sign({}, "hatem")})
    const token = jwt.sign({authClaims }, "hatem", {expiresIn: "2d"});
    res.status(200).json({id:existingUser._id, token: token});
}
else{
    return res.status(400).json({message: "invalid credentials"})
}
    })
})
module.exports = router ;