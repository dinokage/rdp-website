import * as React from "react";
import type { SVGProps } from "react";

export const DatabaseLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" fill="none" viewBox="0 0 200 44" {...props}>
    {/* SVG content remains the same */}
    <text x="50" y="30" fill="currentColor" fontSize="14" fontWeight="bold">
      RDP Datacenter
    </text>
  </svg>
);
