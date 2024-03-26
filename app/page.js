"use client";
import { useSession } from "next-auth/react";

export default function Home() {
    const { data: session } = useSession();

    return !session ? (
        <>

        
        <div className="flex justify-center items-center">Not logged in</div>

        </>
    ) : (
        <>
        <div className="flex justify-center items-center"> Logged in </div>
        </>
    );
}
