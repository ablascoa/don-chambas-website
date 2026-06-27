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
            <Link href="/#problema">Problema</Link>
            <Link href="/#solucion">Solución</Link>
            <Link href="/#moats">Moats</Link>
            <Link href="/#producto">Producto</Link>
            <Link href="/restaurantes">Restaurantes</Link>
            <Link href="/inversionistas">Inversionistas</Link>
          </div>
          <div className="nav-ctas">
            <Link href="/restaurantes#piloto" className="btn btn-primary">
              Únete al piloto
            </Link>
            <Link href="/inversionistas" className="btn btn-outline">
              Inversionistas
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
