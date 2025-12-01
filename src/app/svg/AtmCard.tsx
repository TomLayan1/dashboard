export default function AtmCard() {
  return(
    <svg width="100%" height="220" viewBox="0 0 420 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Main red gradient using Tailwind red-700 (#b91c1c) */}
        <linearGradient id="cardGradient" x1="0" y1="0" x2="420" y2="260" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#7F1D1D" />
          <stop offset="0.4" stop-color="#B91C1C" />
          <stop offset="1" stop-color="#0B0B0B" />
        </linearGradient>

        {/* Soft radial glow */}
        <radialGradient id="glow" cx="0" cy="0" r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(340 10) rotate(90) scale(220 220)">
          <stop stop-color="#FFFFFF" stop-opacity="0.22" />
          <stop offset="1" stop-color="#FFFFFF" stop-opacity="0" />
        </radialGradient>

        {/* Subtle pattern for top-right accent */}
        <linearGradient id="stripeGrad" x1="260" y1="0" x2="420" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.12" />
          <stop offset="1" stop-color="#FFFFFF" stop-opacity="0" />
        </linearGradient>

        {/* Mask for rounded card */}
        <clipPath id="cardClip">
          <rect x="0" y="0" width="420" height="260" rx="28" ry="28" />
        </clipPath>
      </defs>

      {/* Card base */}
      <g clip-path="url(#cardClip)">
        <rect x="0" y="0" width="420" height="260" fill="url(#cardGradient)" />

        Glow
        <circle cx="350" cy="0" r="200" fill="url(#glow)" />

        {/* Diagonal accent stripes */}
        <g opacity="0.45">
          <path d="M260 -40 L460 160 L460 260 L340 260 L180 100 Z" fill="url(#stripeGrad)" />
        </g>

        {/* Subtle noise-like overlay (just faint shapes) */}
        <g opacity="0.18">
          <circle cx="40" cy="220" r="90" fill="#000000" />
          <circle cx="390" cy="240" r="70" fill="#000000" />
        </g>

        {/* Top section: brand + tier */}
        <g transform="translate(26, 26)">
          {/* TOVAH brand */}
          <text x="0" y="0"
            fill="rgba(255,255,255,0.7)"
            font-size="10"
            letter-spacing="6"
            font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
            TOVAH
          </text>

          <text x="0" y="22"
            fill="#FFFFFF"
            font-size="16"
            font-weight="600"
            font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
            Digital Banking
          </text>

          {/* Premium pill */}
          <g transform="translate(260,-10)">
            <rect x="0" y="0" rx="999" ry="999" width="96" height="30"
              fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.35)" stroke-width="1" />
            <text x="48" y="19"
              text-anchor="middle"
              fill="#FFFFFF"
              font-size="11"
              font-weight="600"
              letter-spacing="2"
              font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
              PREMIUM
            </text>
          </g>
        </g>

        {/* Chip and contactless */}
        <g transform="translate(32, 86)">
          {/* Chip outer */}
          <rect x="0" y="0" width="60" height="44" rx="8" ry="8"
            fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.5)" stroke-width="1" />
          {/* Chip inner lines */}
          <rect x="9" y="8" width="42" height="28" rx="4" ry="4"
            fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.4" />
          <line x1="30" y1="8" x2="30" y2="36" stroke="rgba(255,255,255,0.7)" stroke-width="1" />
          <line x1="9" y1="22" x2="51" y2="22" stroke="rgba(255,255,255,0.7)" stroke-width="1" />

          {/* Contactless waves */}
          <g transform="translate(76, 14)" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.2">
            <path d="M0 6 C4 4, 4 8, 0 6" />
            <path d="M5 3 C10 0, 10 12, 5 9" />
            <path d="M10 1 C16 -3, 16 15, 10 11" />
          </g>
        </g>

        {/* Card number */}
        <g transform="translate(32, 160)">
          <text x="0" y="-10"
            fill="rgba(255,255,255,0.65)"
            font-size="11"
            letter-spacing="1.5"
            font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
            CARD NUMBER
          </text>
          <text x="0" y="18"
            fill="#FFFFFF"
            font-size="21"
            font-weight="500"
            letter-spacing="5"
            font-family="SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace">
            5243  ••••  ••••  9012
          </text>
        </g>

        {/* Bottom information row */}
        <g transform="translate(32, 204)">
          {/* Card holder */}
          <g>
            <text x="0" y="0"
              fill="rgba(255,255,255,0.65)"
              font-size="10"
              letter-spacing="1.5"
              font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
              CARD HOLDER
            </text>
            <text x="0" y="20"
              fill="#FFFFFF"
              font-size="14"
              font-weight="600"
              font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
              CHIAMAKA NWAFOR
            </text>
          </g>

          {/* Expiry */}
          <g transform="translate(195, 0)">
            <text x="0" y="0"
              fill="rgba(255,255,255,0.65)"
              font-size="10"
              letter-spacing="1.5"
              font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
              EXPIRES
            </text>
            <text x="0" y="20"
              fill="#FFFFFF"
              font-size="14"
              font-weight="600"
              font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
              08 / 28
            </text>
          </g>

          {/* Network badge */}
          <g transform="translate(275, -8)">
            <circle cx="22" cy="24" r="22" fill="rgba(0,0,0,0.65)" />
            <circle cx="16" cy="24" r="14" fill="#F97316" fill-opacity="0.95" />
            <circle cx="28" cy="24" r="14" fill="#E11D48" fill-opacity="0.95" />
            <text x="22" y="54"
              text-anchor="middle"
              fill="#FFFFFF"
              font-size="9"
              letter-spacing="2"
              font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
              TOVAH PAY
            </text>
          </g>
        </g>
      </g>
    </svg>
  )
}