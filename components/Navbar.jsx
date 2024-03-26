"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

function Navbar() {
    const { data: session } = useSession();

    return (
        <>
            <nav className="bg-black fixed p-5">
                <div className="container mx-auto">
                    <ul className="flex justify-between h-screen flex-col">
                        <div className="one">
                            <li className="mx-4 mt-5">
                                <Link href={'/'} className="text-white font-bold">Home</Link>
                            </li>
                            <li className="mx-4 mt-5">
                                <Link href={'/dashboard'} className="text-white font-bold">Dashboard</Link>
                            </li>
                        </div>


                        <div className="auth">

                            {!session ? (
                                <>
                                    <li className="mx-4 mt-5">
                                        <Link href={'/login'} className="text-white font-bold">Login</Link>
                                    </li>
                                    <li className="mx-4 mb-[2rem]">
                                        <Link href={'/register'} className="text-white font-bold">Register</Link>
                                    </li>
                                </>
                            ) : (

                                <>

                                    <h1 className="text-yellow-200">
                                        {session.user?.email}
                                    </h1>


                                    <li>
                                        <button onClick={() => {
                                            signOut();
                                        }} className="p-2 px-5 mb-[2rem] bg-red-600 rounded">Log Out</button>
                                    </li>

                                </>
                            )}
                        </div>


                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
