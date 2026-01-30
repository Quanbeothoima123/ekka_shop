import Link from "next/link";
import styles from "./BreadcrumbBar.module.css";

export default function BreadcrumbBar({ title, crumbs = [] }) {
  return (
    <div className={styles.bar}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.left}>{title}</div>

          <nav className={styles.right} aria-label="Breadcrumb">
            {crumbs.map((c, idx) => {
              const isLast = idx === crumbs.length - 1;
              return (
                <span key={`${c.href}-${idx}`} className={styles.crumb}>
                  {idx > 0 ? (
                    <span className={styles.sep} aria-hidden="true">
                      »
                    </span>
                  ) : null}
                  {isLast ? (
                    <span className={styles.current}>{c.label}</span>
                  ) : (
                    <Link className={styles.link} href={c.href}>
                      {c.label}
                    </Link>
                  )}
                </span>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
