"use client";
import { useMemo, useState } from "react";
import styles from "./CategoryAccordion.module.css";

function IconPlus(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMinus(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function CategoryAccordion({ data = [] }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [itemStates, setItemStates] = useState({});

  const handleToggle = (idx) => {
    if (openIndex === null) {
      // No items open - expand downward
      setItemStates({ [idx]: { isOpen: true, direction: "down" } });
      setOpenIndex(idx);
    } else if (openIndex === idx) {
      // Close the current item
      setItemStates({});
      setOpenIndex(null);
    } else {
      // Switch from one item to another
      const newStates = {};

      if (idx > openIndex) {
        // New item is BELOW current
        // New item expands UPWARD (panel grows from bottom to top)
        newStates[idx] = { isOpen: true, direction: "up" };
        // Old item collapses DOWNWARD (panel shrinks from top to bottom)
        newStates[openIndex] = { isOpen: false, direction: "down" };
      } else {
        // New item is ABOVE current
        // New item expands DOWNWARD (panel grows from top to bottom)
        newStates[idx] = { isOpen: true, direction: "down" };
        // Old item collapses UPWARD (panel shrinks from bottom to top)
        newStates[openIndex] = { isOpen: false, direction: "up" };
      }

      setItemStates(newStates);
      setOpenIndex(idx);
    }
  };

  const computed = useMemo(() => {
    return data.map((cat) => {
      if (!cat.children || cat.children.length === 0) {
        return {
          ...cat,
          children: [
            { label: `${cat.title} Item 1`, count: 12 },
            { label: `${cat.title} Item 2`, count: 8 },
            { label: `${cat.title} Item 3`, count: 5 },
          ],
        };
      }
      return cat;
    });
  }, [data]);

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>Category</div>
      <div className={styles.list}>
        {computed.map((cat, idx) => {
          const isOpen = idx === openIndex;
          const state = itemStates[idx] || { isOpen: false, direction: "down" };
          const children = cat.children || [];

          return (
            <div key={`${cat.title}-${idx}`} className={styles.item}>
              <button
                type="button"
                className={styles.row}
                onClick={() => handleToggle(idx)}
                aria-expanded={isOpen}
              >
                <span className={styles.name}>{cat.title}</span>
                <span className={styles.icon}>
                  {isOpen ? <IconMinus /> : <IconPlus />}
                </span>
              </button>

              <div
                className={`${styles.panel} ${
                  state.isOpen ? styles.opening : styles.closing
                } ${styles[`dir-${state.direction}`]}`}
              >
                <div className={styles.panelInner}>
                  {children.map((c, i) => (
                    <div
                      key={`${cat.title}-${c.label}-${i}`}
                      className={styles.childRow}
                    >
                      <span className={styles.childName}>{c.label}</span>
                      <span className={styles.childCount}>{c.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.divider} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
