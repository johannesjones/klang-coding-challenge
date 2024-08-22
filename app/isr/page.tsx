import Link from "next/link";

// Mock function to simulate fetching dynamic data
async function fetchData() {
    // Simulate a dynamic change with the current timestamp
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                body: `This content was fetched on ${new Date().toLocaleString()}.`,
            });
        }, 500); // Simulate a delay
    });
}

export const revalidate = 10; // Revalidate the page every 10 seconds

const ISRPage: React.FC = async () => {
    const data: any = await fetchData();
    return (
        <div className="flex flex-col justify-center items-center min-h-screen p-12">
            <h1 className="text-3xl font-bold mb-4 text-center">
                Incremental Static Regeneration Page
            </h1>
            <p id="dynamic-date" className="text-lg font-bold text-gray-700 my-12">
                {data.body}
            </p>
            <p className="text-lg text-gray-700 mb-4">
                Welcome to the Incremental Static Regeneration (ISR) Page!
            </p>
            <p className="text-lg text-gray-700 mb-4">
                This page demonstrates Incremental Static Regeneration in
                Next.js. ISR allows you to update static content after the site
                has been built, without rebuilding the entire site. It enables
                you to set a revalidation interval, so the page content can be
                regenerated at specified intervals while still serving static
                content.
            </p>
            <h2 className="text-xl font-semibold mb-2">
                How Incremental Static Regeneration Works
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>
                    <strong>Static Generation:</strong> At build time, Next.js
                    generates static HTML for this page. The HTML is served to
                    users quickly.
                </li>
                <li>
                    <strong>Revalidation Interval:</strong> You can specify a
                    revalidation interval, which determines how often the page
                    content should be regenerated. After the specified time, the
                    page will be regenerated in the background, and the updated
                    content will be served to future requests.
                </li>
                <li>
                    <strong>Server-Side Rendering by Default:</strong> In
                    Next.js, every page is server-side rendered by default
                    unless explicitly configured for static generation or
                    client-side rendering. ISR combines the benefits of static
                    generation and server-side rendering by allowing periodic
                    updates without a full rebuild.
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                Benefits of Incremental Static Regeneration
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>
                    <strong>Dynamic Updates:</strong> Update static content
                    periodically without rebuilding the entire site, providing
                    fresh content while maintaining fast load times.
                </li>
                <li>
                    <strong>Improved Performance:</strong> Serve static HTML
                    quickly to users, with updates happening in the background
                    based on the revalidation interval.
                </li>
                <li>
                    <strong>Flexibility:</strong> Combine the benefits of static
                    generation with the ability to refresh content periodically,
                    making it ideal for content that changes but does not need
                    real-time updates.
                </li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
                This page showcases ISR in action. It demonstrates how static
                content can be updated in the background while serving static
                HTML to users, ensuring both performance and freshness.
            </p>
            <Link href="/" className="text-blue-600 hover:underline">
                Back to Home
            </Link>
        </div>
    );
};

export default ISRPage;
