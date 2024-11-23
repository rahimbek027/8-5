export default function Home() {
  return (
    <main className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg mt-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Welcome to ShopEasy!
      </h1>
      <p className="text-gray-600 text-lg text-center mb-8">
        ShopEasy is your one-stop online store for the latest gadgets, clothing, and home essentials.
      </p>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Categories</h2>
        <ul className="grid grid-cols-2 gap-4">
          <li className="bg-blue-100 p-4 rounded-lg">📱 Electronics</li>
          <li className="bg-blue-100 p-4 rounded-lg">👗 Fashion</li>
          <li className="bg-blue-100 p-4 rounded-lg">🏠 Home Essentials</li>
          <li className="bg-blue-100 p-4 rounded-lg">🎮 Gaming</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Shop with Us?</h2>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3">
            <span className="text-blue-500 text-xl">🔥</span>
            <span>Competitive prices</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-blue-500 text-xl">🚚</span>
            <span>Fast and reliable delivery</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-blue-500 text-xl">⭐</span>
            <span>Trusted by thousands of customers</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-blue-500 text-xl">💬</span>
            <span>24/7 customer support</span>
          </li>
        </ul>
      </section>
      <nav className="text-center mt-6">
        <a
          href="/about"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Learn more about us
        </a>
      </nav>
    </main>
  );
}
