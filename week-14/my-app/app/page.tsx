import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center flex-col pt-5">
      <h1 className="font-bold text-2xl mb-2">Welcome to Home Page</h1>
      <p className="my-1">🖱️ Client Page: Interactive client-side rendering in action.</p>
      <p className="my-1">🚀 Server Page: Optimized static content for SEO.</p>
    </div>
  );
}
