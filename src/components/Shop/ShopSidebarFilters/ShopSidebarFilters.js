import styles from "./ShopSidebarFilters.module.css";

function CheckRow({ label, checked, onChange }) {
  return (
    <label className={styles.checkRow}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={styles.fakeBox} aria-hidden="true" />
      <span className={styles.checkLabel}>{label}</span>
    </label>
  );
}

export default function ShopSidebarFilters({
  categories,
  sizes,
  colors,
  pickedCategories,
  pickedSizes,
  pickedColors,
  priceMin,
  priceMax,
  onToggleCategory,
  onToggleSize,
  onToggleColor,
  onPriceChange,
}) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.block}>
        <div className={styles.title}>Category</div>
        <div className={styles.list}>
          {categories.map((c) => (
            <CheckRow
              key={c}
              label={c}
              checked={pickedCategories.has(c)}
              onChange={() => onToggleCategory(c)}
            />
          ))}
        </div>

        <button className={styles.moreBtn} type="button">
          <span className={styles.plus} aria-hidden="true" />
          More Categories
        </button>
      </div>

      <div className={styles.divider} />

      <div className={styles.block}>
        <div className={styles.title}>Size</div>
        <div className={styles.list}>
          {sizes.map((s) => (
            <CheckRow
              key={s}
              label={s}
              checked={pickedSizes.has(s)}
              onChange={() => onToggleSize(s)}
            />
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.block}>
        <div className={styles.title}>Color</div>
        <div className={styles.colors}>
          {colors.map((c) => {
            const active = pickedColors.has(c);
            return (
              <button
                key={c}
                type="button"
                className={`${styles.colorDot} ${active ? styles.colorActive : ""}`}
                style={{ background: c }}
                aria-label={`Color ${c}`}
                onClick={() => onToggleColor(c)}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.block}>
        <div className={styles.title}>Price</div>

        <div className={styles.priceBox}>
          <div className={styles.rangeWrap}>
            <input
              className={styles.range}
              type="range"
              min={0}
              max={250}
              value={priceMin}
              onChange={(e) => {
                const v = Math.min(Number(e.target.value), priceMax);
                onPriceChange(v, priceMax);
              }}
            />
            <input
              className={styles.range}
              type="range"
              min={0}
              max={250}
              value={priceMax}
              onChange={(e) => {
                const v = Math.max(Number(e.target.value), priceMin);
                onPriceChange(priceMin, v);
              }}
            />
          </div>

          <div className={styles.priceInputs}>
            <div className={styles.money}>
              <span className={styles.dollar}>$</span>
              <input
                className={styles.moneyInput}
                value={priceMin}
                onChange={(e) =>
                  onPriceChange(Number(e.target.value || 0), priceMax)
                }
              />
            </div>
            <span className={styles.to}>-</span>
            <div className={styles.money}>
              <span className={styles.dollar}>$</span>
              <input
                className={styles.moneyInput}
                value={priceMax}
                onChange={(e) =>
                  onPriceChange(priceMin, Number(e.target.value || 0))
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
