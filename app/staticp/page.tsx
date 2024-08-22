import Link from "next/link";

export default function StaticPage() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen p-12">
            <h1 className="text-3xl font-bold mb-4 text-center">Static Page</h1>
            <p className="text-lg text-gray-700 mb-4">
                Welcome to the Static Page!
            </p>
            <p className="text-lg text-gray-700 mb-4">
                This page is a demonstration of how Static Generation works in
                Next.js. Static Generation allows you to pre-render a page at
                build time. The resulting HTML is static and can be served
                quickly to users, making it ideal for content that does not
                change frequently.
            </p>
            <h2 className="text-xl font-semibold mb-2">
                How Static Generation Works
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>
                    <strong>Build Time Rendering:</strong> At build time,
                    Next.js generates the static HTML for this page. This
                    process occurs once, when you build your project, ensuring
                    that the HTML is pre-rendered and ready to be served.
                </li>
                <li>
                    <strong>Fast Delivery:</strong> Since the HTML is
                    pre-generated, it can be served quickly to users. This
                    reduces the time spent generating pages on each request and
                    improves performance.
                </li>
                <li>
                    <strong>CDN and Caching:</strong> Static pages can be easily
                    cached and delivered via a Content Delivery Network (CDN).
                    This further enhances performance by distributing the page
                    across multiple servers and reducing latency.
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                Benefits of Static Generation
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>
                    <strong>Performance:</strong> Serve static content
                    instantly, reducing server load and improving load times for
                    users.
                </li>
                <li>
                    <strong>Reliability:</strong> Static pages are less likely
                    to experience downtime since they don’t rely on server-side
                    processing for each request.
                </li>
                <li>
                    <strong>Simplicity:</strong> Pre-rendering pages at build
                    time simplifies the deployment process and reduces the
                    complexity of handling dynamic content.
                </li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
                This page was generated at build time and will remain the same
                until you rebuild your project. If you visit this page, you will
                always see the same static content, which is great for pages
                with content that does not change often.
            </p>
            <Link href="/" className="text-blue-600 hover:underline">
                Back to Home
            </Link>
        </div>
    );
}
