import { COORD } from "../../configs";

const IconO = ({ num }) => (
  <svg
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 68 68"
    x={COORD[`item${num + 1}`].x + 7}
    y={COORD[`item${num + 1}`].y + 7}
  >
    <defs />
    <g filter="url(#filterO)">
      <path
        fill="#4F4F4F"
        fillRule="evenodd"
        d="M34 64c16.569 0 30-13.431 30-30C64 17.431 50.569 4 34 4 17.431 4 4 17.431 4 34c0 16.569 13.431 30 30 30zm-.17-6.34c13.16 0 23.83-10.67 23.83-23.83C57.66 20.67 46.99 10 33.83 10 20.67 10 10 20.67 10 33.83c0 13.16 10.67 23.83 23.83 23.83z"
        clipRule="evenodd"
      />
    </g>
    <path
      fill="#2F80ED"
      fillRule="evenodd"
      d="M32 62c16.569 0 30-13.431 30-30C62 15.431 48.569 2 32 2 15.431 2 2 15.431 2 32c0 16.569 13.431 30 30 30zm-.17-6.34c13.16 0 23.83-10.67 23.83-23.83C55.66 18.67 44.99 8 31.83 8 18.67 8 8 18.67 8 31.83c0 13.16 10.67 23.83 23.83 23.83z"
      clipRule="evenodd"
    />

    <defs>
      <filter
        id="filterO"
        width="68"
        height="68"
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
export default IconO;
