import React from "react";
import Link from "next/link";

const Header = () => {
  //props are object which are used to flow data from parent to child!
  return (
    <>
      <div className="flex gap-3 justify-between py-5 px-10 align-middle">
        <Link href="/About">about</Link>
        <Link href="/Product">product</Link>
      </div>
    </>
  );
};
export default Header;
