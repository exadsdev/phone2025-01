import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-primary text-white shadow-sm">
      <div className="container d-flex flex-wrap justify-content-between align-items-center py-3">
        <Link href="/" className="d-flex align-items-center text-white text-decoration-none">
          <Image
            src="/img/logo.png"
            alt="PG Phone Logo"
            width={50}
            height={50}
          />
          <span className="fs-4 ms-2">PG Phone</span>
        </Link>
        <nav className="nav">
          <Link href="#products" className="nav-link text-white">สินค้า</Link>
          <Link href="#features" className="nav-link text-white">จุดเด่น</Link>
          <Link href="#contact" className="nav-link text-white">ติดต่อเรา</Link>
        </nav>
      </div>
    </header>
  );
}
