import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image
            alt="logo"
            src={
              "/images/event-parties-logo-design-vector_647881-1150-removebg-preview.png"
            }
            width={100}
            height={75}
          />
          <nav>
            <ul>
              <li>
                <Link href="/" passHref legacyBehavior>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/events" passHref legacyBehavior>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref legacyBehavior>
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <h1 className="title"> ipsum dolor sit amet</h1>
      </div>
    </header>
  );
};
