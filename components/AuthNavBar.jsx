import React from "react";
import Link from "next/link";

function AuthNavBar() {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link href="/" className="text-2xl font-bold">
        a-commerce
      </Link>
    </div>
  );
}
export default AuthNavBar;
