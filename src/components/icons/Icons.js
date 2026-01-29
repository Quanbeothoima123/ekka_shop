// Social icons (giữ nguyên dạng fill)
export function IconFacebook(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.2-1.5 1.6-1.5H16.7V5c-.3 0-1.3-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V11H7.2v3h2.5v8h3.8z" />
    </svg>
  );
}

export function IconTwitter(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M19.9 7.7c0 .2 0 .3 0 .5 0 5.1-3.9 11-11 11-2.2 0-4.2-.6-5.9-1.7.3 0 .7.1 1.1.1 1.8 0 3.5-.6 4.8-1.7-1.7 0-3.1-1.1-3.6-2.7.2 0 .5.1.8.1.3 0 .7 0 1-.1-1.8-.4-3.1-2-3.1-3.9v-.1c.5.3 1.2.5 1.8.6-1.1-.8-1.8-2-1.8-3.4 0-.8.2-1.5.6-2.1 2 2.4 5 4 8.4 4.1-.1-.3-.1-.6-.1-.9 0-2.2 1.8-4 4-4 1.2 0 2.2.5 3 1.3.9-.2 1.8-.5 2.6-1-.3.9-.9 1.7-1.8 2.2.8-.1 1.6-.3 2.3-.6-.5.8-1.1 1.5-1.8 2.1z" />
    </svg>
  );
}

export function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9z" />
      <path d="M12 7.3A4.7 4.7 0 1 1 7.3 12 4.7 4.7 0 0 1 12 7.3zm0 2A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3z" />
      <path d="M17.6 6.4a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1z" />
    </svg>
  );
}

export function IconLinkedIn(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M6.9 6.9a1.9 1.9 0 1 1-1.9-1.9 1.9 1.9 0 0 1 1.9 1.9zM3.6 20.4h2.8V9H3.6zM9.2 9h2.7v1.6h.1c.4-.8 1.5-1.8 3.2-1.8 3.4 0 4 2.2 4 5.1v6.5h-2.8v-5.8c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.9H9.2z" />
    </svg>
  );
}

/**
 * UI outline icons (stroke)
 * - dùng stroke/currentColor để ra dạng outline giống template
 */
const outlineProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconSearch(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="6.5" {...outlineProps} />
      <path d="M16.2 16.2L21 21" {...outlineProps} />
    </svg>
  );
}

export function IconUser(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" {...outlineProps} />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" {...outlineProps} />
    </svg>
  );
}

export function IconHeart(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M12 20.5s-7.2-4.4-9.3-8.2C.8 9 2.6 6.2 5.6 6.1c1.6-.1 3.1.7 4.1 2 1-1.3 2.5-2.1 4.1-2 3 .1 4.8 2.9 2.9 6.2-2.1 3.8-9.3 8.2-9.3 8.2z"
        {...outlineProps}
      />
    </svg>
  );
}

export function IconBag(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M6 8h12l-1 13H7L6 8z" {...outlineProps} />
      <path d="M9 8V7a3 3 0 0 1 6 0v1" {...outlineProps} />
    </svg>
  );
}

/* Menu grid icon (4 squares outline) */
export function IconGrid(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="5" y="5" width="5" height="5" rx="1" {...outlineProps} />
      <rect x="14" y="5" width="5" height="5" rx="1" {...outlineProps} />
      <rect x="5" y="14" width="5" height="5" rx="1" {...outlineProps} />
      <rect x="14" y="14" width="5" height="5" rx="1" {...outlineProps} />
    </svg>
  );
}

// Social icons (giữ nguyên dạng fill)
export function IconYoutube(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M21.8 8.3s-.2-1.6-.8-2.3c-.7-.8-1.5-.8-1.9-.9C16.4 4.8 12 4.8 12 4.8h0s-4.4 0-7.1.3c-.4.1-1.2.1-1.9.9-.6.7-.8 2.3-.8 2.3S2 10.2 2 12v0c0 1.8.2 3.7.2 3.7s.2 1.6.8 2.3c.7.8 1.7.8 2.1.9 1.5.1 6.9.3 6.9.3s4.4 0 7.1-.3c.4-.1 1.2-.1 1.9-.9.6-.7.8-2.3.8-2.3s.2-1.9.2-3.7v0c0-1.8-.2-3.7-.2-3.7zM10 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  );
}

export function IconBehance(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M7.027 12.007c.374.524 1.094.494 1.094.494h2.58s1.845.03 1.845-1.785c0 0 .03-1.79-1.74-1.79H7.027v3.08zm0 5.56h2.895s1.95.06 1.95-1.89c0 0 .06-1.98-2.07-1.98H7.027v3.87zm10.036-5.56c-1.5 0-1.53 1.515-1.53 1.515h3.03s0-1.515-1.5-1.515zm1.5 2.55h-3.03s0 1.71 1.59 1.71c0 0 .96.03 1.32-.855h1.44s-.51 2.37-2.88 2.37c0 0-2.97.09-2.97-3.165 0 0-.09-3.36 3.03-3.36 0 0 2.88-.12 2.88 3.12v.18zm-1.17-4.2h-2.58V9.6h2.58v.807zM21 7.2v9.6c0 2.31-1.89 4.2-4.2 4.2H7.2C4.89 21 3 19.11 3 16.8V7.2C3 4.89 4.89 3 7.2 3h9.6C19.11 3 21 4.89 21 7.2z" />
    </svg>
  );
}

export function IconWhatsapp(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm5.8 14.5c-.2.6-1.1 1.1-1.6 1.2-.5.1-1.2.2-3.9-.8-3.3-1.4-5.4-4.8-5.6-5.1-.2-.3-1.3-1.7-1.3-3.2 0-1.5.8-2.2 1.1-2.5.3-.3.6-.4.8-.4h.6c.2 0 .5-.1.8.6.3.7 1 2.5 1.1 2.7.1.2.1.4 0 .6-.1.2-.2.4-.3.5-.2.2-.4.4-.5.6-.2.2-.4.4-.2.8.2.4.9 1.4 1.9 2.3 1.3 1.1 2.4 1.5 2.8 1.7.4.2.6.2.8-.1.2-.3.9-1.1 1.1-1.5.2-.4.4-.3.7-.2.3.1 2 .9 2.4 1.1.4.2.6.2.7.3.1.1.1.7-.1 1.3z" />
    </svg>
  );
}

/* Filter/sort icon giống kiểu thanh + chấm */
export function IconFilter(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M6 7h12" {...outlineProps} />
      <path d="M6 12h12" {...outlineProps} />
      <path d="M6 17h12" {...outlineProps} />
      <circle cx="9" cy="7" r="1.3" fill="currentColor" />
      <circle cx="15" cy="12" r="1.3" fill="currentColor" />
      <circle cx="11" cy="17" r="1.3" fill="currentColor" />
    </svg>
  );
}
