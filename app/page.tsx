// src/app/page.tsx

import React from "react";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full text-center">
                <h1 className="text-4xl font-bold mb-6 text-gray-800">
                    Welcome to My Next.js App
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Explore the different rendering methods in Next.js!
                </p>
                <div className="space-y-4">
                    <Link
                        href="/staticp"
                        className="block w-full bg-blue-500 text-white py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
                    >
                        Static Page
                    </Link>
                    <Link
                        href="/ssr"
                        className="block w-full bg-green-500 text-white py-3 rounded-lg shadow-lg hover:bg-green-600 transition"
                    >
                        Server-Side Rendered Page
                    </Link>
                    <Link
                        href="/isr"
                        className="block w-full bg-purple-500 text-white py-3 rounded-lg shadow-lg hover:bg-purple-600 transition"
                    >
                        Incremental Static Regeneration Page
                    </Link>
                </div>
                <p className="text-lg text-gray-600 mt-6 mb-5">
                    And a Page with a Random String:
                </p>
                <Link
                    href="/random-string"
                    className="block w-full bg-red-500 text-white py-3 rounded-lg shadow-lg hover:bg-red-600 transition"
                >
                    Random String Page
                </Link>
            </div>
        </div>
    );
}
