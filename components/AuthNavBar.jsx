import React from "react";
import Link from "next/link";

function AuthNavBar() {
  return (
    <div className="flex justify-between items-center p-4 bg-green-500 text-white">
      <Link href="/" className="text-2xl ">
        A-com
      </Link>
    </div>
  );
}
export default AuthNavBar;
