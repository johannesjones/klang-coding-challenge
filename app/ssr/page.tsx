import React from "react";
import Link from "next/link";

// Mock function to simulate fetching data
async function getData() {
    return new Promise((resolve): any => {
        setTimeout(() => {
            resolve({
                body: "This is some mocked content fetched on the server side.",
            });
        }, 500); // Simulate a delay
    });
}

const SSRPage: React.FC = async () => {
    const data: any = await getData();

    return (
        <div className="flex flex-col justify-center items-center min-h-screen p-12">
            <h1 className="text-3xl font-bold mb-4 text-center">
                Server-Side Rendered Page
            </h1>
            <p className="text-lg font-bold text-gray-700 my-10">{data.body}</p>
            <p className="text-lg text-gray-700 mb-4">
                Welcome to the Server-Side Rendered (SSR) Page!
            </p>
            <p className="text-lg text-gray-700 mb-4">
                This page demonstrates Server-Side Rendering in Next.js. With
                SSR, the HTML is generated on the server for each request,
                ensuring that users receive the most up-to-date content. This is
                particularly useful for dynamic content that changes frequently
                or requires real-time updates.
            </p>
            <h2 className="text-xl font-semibold mb-2">
                How Server-Side Rendering Works
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>
                    <strong>Request Handling:</strong> Each time a user requests
                    this page, Next.js generates the HTML on the server based on
                    the current data. This ensures that the content is always
                    fresh and up-to-date.
                </li>
                <li>
                    <strong>Dynamic Content:</strong> Since the HTML is
                    generated on each request, SSR is ideal for pages with
                    content that changes frequently or depends on user-specific
                    data.
                </li>
                <li>
                    <strong>Server-Side Rendering by Default:</strong> In the
                    new Next.js `app` directory, pages are server-side rendered
                    by default unless explicitly configured for static
                    generation or client-side rendering. SSR ensures that
                    content is generated on the server for every request.
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                Benefits of Server-Side Rendering
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>
                    <strong>Up-to-Date Content:</strong> Each request generates
                    fresh content, ensuring that users always see the latest
                    data.
                </li>
                <li>
                    <strong>Improved SEO:</strong> Full HTML content is
                    available for search engines, helping with better indexing
                    and ranking.
                </li>
                <li>
                    <strong>Better Initial Load Performance:</strong> Since the
                    HTML is generated on the server, the initial load time can
                    be faster for users, especially for pages with heavy
                    content.
                </li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
                This page demonstrates SSR in action. The content displayed is
                dynamically generated each time you visit or refresh the page,
                providing up-to-date information and enhancing the user
                experience.
            </p>
            <Link href="/" className="text-blue-600 hover:underline">
                Back to Home
            </Link>
        </div>
    );
};

export default SSRPage;
