// components/common/NavbarWrapper.jsx

"use client";

import { usePathname }
from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {

  const pathname =
    usePathname();

  // hide navbar on admin
  if (
    pathname.startsWith("/admin")
  ) {
    return null;
  }

  return <Navbar />;
}