// components/AtmCard.tsx
import React from "react";

type Props = {
  className?: string;
};

export default function StackCards({ className }: Props) {
  return (
    <svg
      className={className}
      width="100%"
      height="220"
      viewBox="0 0 420 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="cardGradient"
          x1="0"
          y1="0"
          x2="420"
          y2="260"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#7F1D1D" />
          <stop offset="0.4" stopColor="#B91C1C" />
          <stop offset="1" stopColor="#0B0B0B" />
        </linearGradient>

        <radialGradient
          id="glow"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(340 10) rotate(90) scale(220 220)"
        >
          <stop stopColor="#FFFFFF" stopOpacity="0.22" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        <linearGradient
          id="stripeGrad"
          x1="260"
          y1="0"
          x2="420"
          y2="160"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.12" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        <clipPath id="cardClip">
          <rect x="0" y="0" width="420" height="260" rx="28" ry="28" />
        </clipPath>
      </defs>

      <g clipPath="url(#cardClip)">
        <rect x="0" y="0" width="420" height="260" fill="url(#cardGradient)" />

        <circle cx="350" cy="0" r="200" fill="url(#glow)" />

        <g opacity="0.45">
          <path
            d="M260 -40 L460 160 L460 260 L340 260 L180 100 Z"
            fill="url(#stripeGrad)"
          />
        </g>

        <g opacity="0.18">
          <circle cx="40" cy="220" r="90" fill="#000000" />
          <circle cx="390" cy="240" r="70" fill="#000000" />
        </g>

        <g transform="translate(26, 26)">
          <text
            x="0"
            y="0"
            fill="rgba(255,255,255,0.7)"
            fontSize="10"
            letterSpacing="6"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          >
            TOVAH
          </text>

          <text
            x="0"
            y="22"
            fill="#FFFFFF"
            fontSize="16"
            fontWeight="600"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          >
            Digital Banking
          </text>

          <g transform="translate(260,-10)">
            <rect
              x="0"
              y="0"
              rx="999"
              ry="999"
              width="96"
              height="30"
              fill="rgba(0,0,0,0.4)"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="1"
            />
            <text
              x="48"
              y="19"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="11"
              fontWeight="600"
              letterSpacing="2"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            >
              PREMIUM
            </text>
          </g>
        </g>

        <g transform="translate(32, 86)">
          <rect
            x="0"
            y="0"
            width="60"
            height="44"
            rx="8"
            ry="8"
            fill="rgba(255,255,255,0.12)"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
          />
          <rect
            x="9"
            y="8"
            width="42"
            height="28"
            rx="4"
            ry="4"
            fill="none"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="1.4"
          />
          <line x1="30" y1="8" x2="30" y2="36" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />
          <line x1="9" y1="22" x2="51" y2="22" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />

          <g transform="translate(76, 14)" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2">
            <path d="M0 6 C4 4, 4 8, 0 6" />
            <path d="M5 3 C10 0, 10 12, 5 9" />
            <path d="M10 1 C16 -3, 16 15, 10 11" />
          </g>
        </g>

        <g transform="translate(32, 160)">
          <text
            x="0"
            y="-10"
            fill="rgba(255,255,255,0.65)"
            fontSize="11"
            letterSpacing="1.5"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          >
            CARD NUMBER
          </text>
          <text
            x="0"
            y="18"
            fill="#FFFFFF"
            fontSize="21"
            fontWeight="500"
            letterSpacing="5"
            fontFamily="SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
          >
            5243 •••• •••• 9012
          </text>
        </g>

        <g transform="translate(32, 204)">
          <g>
            <text
              x="0"
              y="0"
              fill="rgba(255,255,255,0.65)"
              fontSize="10"
              letterSpacing="1.5"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            >
              CARD HOLDER
            </text>
            <text
              x="0"
              y="20"
              fill="#FFFFFF"
              fontSize="14"
              fontWeight="600"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            >
              CHIAMAKA NWAFOR
            </text>
          </g>

          <g transform="translate(195, 0)">
            <text
              x="0"
              y="0"
              fill="rgba(255,255,255,0.65)"
              fontSize="10"
              letterSpacing="1.5"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            >
              EXPIRES
            </text>
            <text
              x="0"
              y="20"
              fill="#FFFFFF"
              fontSize="14"
              fontWeight="600"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            >
              08 / 28
            </text>
          </g>

          <g transform="translate(275, -8)">
            <circle cx="22" cy="24" r="22" fill="rgba(0,0,0,0.65)" />
            <circle cx="16" cy="24" r="14" fill="#F97316" fillOpacity="0.95" />
            <circle cx="28" cy="24" r="14" fill="#E11D48" fillOpacity="0.95" />
            <text
              x="22"
              y="54"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="9"
              letterSpacing="2"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            >
              TOVAH PAY
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
}