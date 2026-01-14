export function DropdownBackground() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 659 241"
      className="absolute inset-0 w-full h-full"
      aria-hidden
      preserveAspectRatio="none"
    >
      <g filter="url(#a)">
        <path
          fill="#000"
          d="M5 35.052c0-10.166 10.605-18.407 23.686-18.407h601.628c13.081 0 23.686 8.241 23.686 18.407v178.542C654 223.759 643.395 232 630.314 232H28.686C15.605 232 5 223.759 5 213.594z"
        />
        <path
          fill="#000"
          d="M325.397 2.84c1.824-2.454 6.382-2.454 8.206 0l12.307 16.566c1.824 2.455-.456 5.522-4.102 5.522h-24.616c-3.646 0-5.926-3.067-4.102-5.522z"
        />
        <path
          stroke="#8a8a8a"
          d="M329.5.5c1.707 0 3.473.655 4.504 2.042l10.106 13.603h286.203c13.233 0 24.187 8.355 24.187 18.907v178.542c0 10.551-10.954 18.906-24.187 18.906H28.687c-13.233 0-24.187-8.355-24.187-18.906V35.052c0-10.552 10.954-18.906 24.187-18.906H314.89l10.106-13.604C326.027 1.155 327.793.5 329.5.5Z"
        />
      </g>
      <defs>
        <filter
          id="a"
          width="659"
          height="241"
          x="0"
          y="0"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_24_3286"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_24_3286"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
