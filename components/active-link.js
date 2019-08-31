import { useRouter } from "next/router";
import Link from "next/link";

export default function ActiveLink({ children, href }) {
  const router = useRouter();
  return (
    <Link href={href}>
      <a className="nav-button">
        {children}

        <style jsx>
          {`
            a {
              cursor: pointer;
              position: relative;
              line-height: 1;
              vertical-align: top;
              color: ${router.pathname === href
                ? "var(--hue-1)"
                : "var(--primary-text)"};
            }

            .nav-button:hover {
              color: ${router.pathname === href
                ? "var(--hue-1)"
                : "var(--hue-2)"};
            }
          `}
        </style>
      </a>
    </Link>
  );
}
