import Link from "next/link";

export function Logo() {
  return (
    <Link href="#">
      <div className="w-32">
        <img src="/images/logo.png" alt="Vestaboard" />
      </div>
    </Link>
  );
}
