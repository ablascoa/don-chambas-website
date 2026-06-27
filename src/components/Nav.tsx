import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="wrap">
        <div className="nav-inner">
          <Link href="/" className="brand plain">
            <Image
              src="/images/logo-don.svg"
              alt="Don Chambas"
              width={36}
              height={36}
            />
            <span className="brand-name">
              DON <span className="accent">CHAMBAS</span>
            </span>
          </Link>
          <div className="nav-links">
            <Link href="/contacto">Contacto</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
