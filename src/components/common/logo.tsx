import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="#">
      <Image
        src="https://www.vestaboard.com/hs-fs/hubfs/vestaboard-logo-white-1.png?width=1366&height=120&name=vestaboard-logo-white-1.png"
        alt="Vestaboard"
        width={180}
        height={50}
      />
    </Link>
  );
}
