import React from "react";

function logo(props) {
  const fill = `var(${props.fill})` || `var(--colour-gravel)`;
  const width = props.width || 300;
  const height = props.height || 300;
  const classname = props.classname || "icon";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 42 46.5"
      width={width}
      height={height}
      className={classname}
    >
      <defs />
      <g>
        <path
          fill={fill}
          d="M39.05 9.42L23.94.7a6.57 6.57 0 0 0-5.89 0L3 9.42a6.56 6.56 0 0 0-3 5.11V32a6.53 6.53 0 0 0 3 5.1l15.1 8.73a6.57 6.57 0 0 0 5.89 0L39.1 37.1A6.53 6.53 0 0 0 42 32V14.53a6.56 6.56 0 0 0-2.95-5.11zm-18.4 23.63h-1.86v5.83l-2.9-1.76-1.18-.71-4.07-2.48V11.65a1.9 1.9 0 0 1 1.89-1.9h8.12a11.65 11.65 0 0 1 0 23.3z"
        />
        <path
          fill={fill}
          d="M20.86 17h-.74v-3.82l-3.22 2v10.24a.75.75 0 0 0 .75.74h3.21a4.6 4.6 0 0 0 0-9.2z"
        />
      </g>
    </svg>
  );
}

export default logo;
