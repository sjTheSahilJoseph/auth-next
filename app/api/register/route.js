import User from "@/models/User";
import connectDB from "@/config/db";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";


export const POST = async(req, _) => {
    const {username, email, password, confirmPassword} = await req.json();

    if (password !== confirmPassword) {
        return new NextResponse(JSON.stringify({error: "Passwords don't match"}, {status: 400}));
    }

    await connectDB();

    const existingUser = await User.findOne({email});

    if (existingUser) {
        return new NextResponse(JSON.stringify({error: "User already exists"}), {status: 400});
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = new User({
        username, email, password: hashedPassword
    });

    try {
        await newUser.save();
        return new NextResponse({message: "User successfully registered", status: 201});
    } catch (error) {
        return new NextResponse(error, {status: 500});
    }
}

