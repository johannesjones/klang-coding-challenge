"use client"; // This marks the file as a Client Component

import { useEffect, useState } from "react";
import Link from "next/link";

export default function RandomStringPage() {
    const [randomString, setRandomString] = useState<string | null>(null);

    useEffect(() => {
        async function fetchRandomString() {
            const response = await fetch("/api/random-string", {
                cache: "no-store",
            });
            const data = await response.json();
            setRandomString(data.randomString);
        }
        fetchRandomString();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">
                    This Page creates a random string
                </h1>
                <p className="text-xl my-10">
                    {randomString ? randomString : "Loading..."}
                </p>
            </div>
            <Link href="/" className="text-blue-600 hover:underline">
                Back to Home
            </Link>
        </div>
    );
}
