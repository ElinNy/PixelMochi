import React from "react";

const shadowColorStart = "#504B4B";
const shadowColorEnd = "#B6ACAC";
const shadowOpacity = 0.5;

const rows: { xs: number[]; y: number }[] = [
  { xs: [0, 5], y: 10 },
  {
    xs: [
      20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105,
      110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180,
      185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255,
      260, 265, 270, 275, 280, 285, 290, 295, 300, 305,
    ],
    y: 20,
  },
  { xs: [10, 15], y: 70 },
  {
    xs: [
      20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105,
      110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180,
      185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255,
      260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310, 315,
    ],
    y: 80,
  },
  {
    xs: [
      30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110,
      115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185,
      190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255, 260,
      265, 270, 275, 280, 285, 290, 295, 300, 305, 310, 315, 320, 325,
    ],
    y: 90,
  },
  { xs: [330, 335], y: 100 },
];

const positions = rows.flatMap(({ xs, y }) => xs.map((x) => ({ x, y })));

const MenuBorderShadow: React.FC = () => (
  <g id="BorderShadowMenu">
    {positions.map(({ x, y }, i) => (
      <rect
        key={i}
        x={x}
        y={y}
        width={5}
        height={5}
        fill="url(#shadowGradient)"
      />
    ))}

    <defs>
      <linearGradient
        id="shadowGradient"
        x1="0"
        y1="0"
        x2="0"
        y2="5"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset="0%"
          stopColor={shadowColorStart}
          stopOpacity={shadowOpacity}
        />
        <stop
          offset="100%"
          stopColor={shadowColorEnd}
          stopOpacity={shadowOpacity}
        />
      </linearGradient>
    </defs>
  </g>
);

export { MenuBorderShadow };
