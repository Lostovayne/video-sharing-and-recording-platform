import Image from "next/image";
import Link from "next/link";

const user = {};

const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <Link href={"/"}>
          <Image src={"/assets/icons/logo.svg"} alt="Logo" width={32} height={32} />
          <h1>SnapCast</h1>
        </Link>
        {user && (
          <figure>
            <button>
              <Image
                src={"/assets/images/dummy.jpg"}
                alt="User Profile"
                width={36}
                height={36}
                className="rounded-full aspect-square"
              />
            </button>
            <button className="cursor-pointer">
              <Image
                src={"/assets/icons/logout.svg"}
                alt="Logout"
                width={24}
                height={24}
                className="rotate-180"
              />
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
};
export default Navbar;
