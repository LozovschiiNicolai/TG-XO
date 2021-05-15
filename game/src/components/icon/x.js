import { COORD } from "../../configs";

const IconX = ({ num }) => (
  <svg
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 68 68"
    x={COORD[`item${num + 1}`].x + 7}
    y={COORD[`item${num + 1}`].y + 7}
  >
    <defs />
    <g filter="url(#filterX)">
      <path
        fill="#4F4F4F"
        fillRule="evenodd"
        d="M4.879 4.995a3 3 0 000 4.243L29.639 34 4.88 58.76a3 3 0 000 4.243l.116.117a3 3 0 004.243 0l24.76-24.762L58.76 63.121a3 3 0 004.242 0l.117-.117a3 3 0 000-4.243L38.36 34l24.76-24.762a3 3 0 000-4.243l-.117-.116a3 3 0 00-4.242 0L33.999 29.64 9.238 4.88a3 3 0 00-4.243 0l-.116.116z"
        clipRule="evenodd"
      />
    </g>
    <path
      fill="#9B51E0"
      fillRule="evenodd"
      d="M2.879 2.995a3 3 0 000 4.243L27.639 32 2.88 56.76a3 3 0 000 4.243l.116.117a3 3 0 004.243 0l24.76-24.762L56.76 61.121a3 3 0 004.242 0l.117-.117a3 3 0 000-4.243L36.36 32l24.76-24.762a3 3 0 000-4.243l-.117-.116a3 3 0 00-4.242 0L31.999 27.64 7.238 2.88a3 3 0 00-4.243 0l-.116.116z"
      clipRule="evenodd"
    />
    <defs>
      <filter
        id="filterX"
        width="67.998"
        height="67.999"
        x="0"
        y="0"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="2" />
      </filter>
    </defs>
  </svg>
);
export default IconX;
