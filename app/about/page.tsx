import Link from 'next/link';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg mt-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        About ShopEasy
      </h1>
      <p className="text-gray-600 text-lg text-center mb-8">
        ShopEasy was founded in 2023 with a mission to simplify online shopping for everyone.
      </p>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Vision</h2>
        <p className="text-gray-600 leading-relaxed">
          To become the go-to platform for hassle-free shopping, offering a seamless and enjoyable experience for all our users.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What Makes Us Different?</h2>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3">
            <span className="text-blue-500 text-xl">🌍</span>
            <span>Global reach: Access products from all over the world.</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-blue-500 text-xl">🛡️</span>
            <span>Secure payments: Your data is always safe with us.</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-blue-500 text-xl">📦</span>
            <span>Easy returns: Not satisfied? Return with no hassle.</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-blue-500 text-xl">🎉</span>
            <span>Exclusive deals: Enjoy discounts and special offers every day.</span>
          </li>
        </ul>
      </section>
      <nav className="text-center mt-6">
        <Link
          href="/"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Go back to Home
        </Link>
      </nav>
    </main>
  );
}
