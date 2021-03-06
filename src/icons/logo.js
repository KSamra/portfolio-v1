import React from "react"
import { colors } from "../components/styles/theme";

const IconLogo = () => (
  <svg
    viewBox="0 0 532 532"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5,
    }}
  >
    <g transform="matrix(2.08333,0,0,2.08333,-670.531,-640.26)">
      <g transform="matrix(1,0,0,0.999473,0,0.164447)">
        <path
          d="M571.841,373.603C571.841,339.783 544.397,312.325 510.594,312.325L388.101,312.325C354.298,312.325 326.855,339.783 326.855,373.603L326.855,496.175C326.855,529.996 354.298,557.454 388.101,557.454L510.594,557.454C544.397,557.454 571.841,529.996 571.841,496.175L571.841,373.603Z"
          style={{
            fill: "rgb(255,249,249)",
            fillOpacity: 0,
            stroke: `${colors.primary}`,
            strokeWidth: "10px",
          }}
        />
      </g>
      <g transform="matrix(1.66958,0,0,1.66958,-296.341,-317.986)">
        <g transform="matrix(113.923,0,0,113.923,385.582,486.674)">
          <path
            d="M0.275,-0.443L0.514,-0.754L0.756,-0.754L0.457,-0.397L0.784,0L0.53,0L0.275,-0.327L0.275,0L0.079,0L0.079,-0.754L0.275,-0.754L0.275,-0.443Z"
            style={{ fill: `${colors.primary}`, fillRule: "nonzero" }}
          />
        </g>
      </g>
    </g>
  </svg>
)

export default IconLogo
