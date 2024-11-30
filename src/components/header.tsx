"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useBasket } from "@/stores/basket";

function Nav() {
  const basketCount = useBasket((state) => state.count);

  return (
    <nav>
      <ul className="flex flex-row gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="inline-block h-4"
            />{" "}
            {basketCount}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header className="grid grid-cols-[1fr_auto] pt-10 px-6 pb-4 shadow-lg">
      <div>
        <h2>
          <Link href="/" className="text-2xl font-bold">
            Daily Depot
          </Link>
        </h2>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
