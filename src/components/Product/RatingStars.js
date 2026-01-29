export default function RatingStars({ value = 0 }) {
  return (
    <div aria-label={`Rating ${value}/5`} style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            fontSize: 13,
            lineHeight: 1,
            color: i < value ? "#ff6a7a" : "#ddd",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}
