export default function Static() {
    return (
        <div className="flex items-center flex-col pt-5">
            <h1 className="font-bold text-2xl">Welcome to Static Page</h1>
            <p className="text-center my-4 px-10">This paragraph right here is rendered statically using Next.js. By generating the content on the server at build time, Next.js ensures that search engines can easily crawl and index this page, boosting its SEO. Plus, serving static content leads to faster load times and a smoother user experience. And if I need interactivity, Next.js allows me to use the "use client" directive for specific components.</p>
            <p>Pretty cool, right? Now navigate to the `Client Page` to check how interactivity is added in Next.js!</p>
        </div>
    )
}