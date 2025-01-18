import { Link } from "@nextui-org/link";

export default function Footer() {
  return (
    <footer className="flex justify-center w-full p-8 text-base text-center border-t border-t-zinc-100">
      <p>
        &copy; {new Date().getFullYear()} Copyright by{" "}
        <Link
          href="https://github.com/rfqma"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
          color="secondary"
        >
          Rifqi Maulana
        </Link>
      </p>
    </footer>
  );
}
