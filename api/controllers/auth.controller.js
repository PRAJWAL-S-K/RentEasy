import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signUp =async (req, res, next)=>{
    const {username, email, pass}=req.body;

    const hashedPass = bcryptjs.hashSync(pass,10); //to encrypt the pass with some salt variable 10
    try{ //to handle duplicate key error
        const newUser = new User({username,email,password:hashedPass});
        await newUser.save(); //it will take some time so made await
        res.status(201).json("The info got saved succesefully!"); //status 201 means something has got saved.
    }
    catch(error)
    {
        next(error)//status 500 means some error has occured
    }
}