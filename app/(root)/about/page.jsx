import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About A-Com</h1>
        <p className="text-gray-600 text-lg">
          Welcome to A-Com, your one-stop destination for high-quality products
          at unbeatable prices. We are committed to delivering a seamless
          shopping experience with a wide range of products to meet your needs.
        </p>
        <p className="text-gray-600 text-lg mt-4">
          At A-Com, customer satisfaction is our top priority. Our team works
          around the clock to bring you the best deals and latest trends in
          fashion, electronics, home essentials, and more. Thank you for
          choosing A-Com – happy shopping!
        </p>
      </div>
    </div>
  );
}

export default About;
