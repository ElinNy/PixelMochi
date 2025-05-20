import React from "react";
import { InsideMenu } from "./svgParts/ColorInsideMenu";
import { BorderMenu } from "./svgParts/ColorMenuBorder";
import { MenuBorderShadow } from "./svgParts/ColorMenuBorderShadow";

interface MenuProps {
  label: string;
}

const Menu: React.FC<MenuProps> = ({ label }) => {
  const centerX = 170;
  const centerY = 52.5;

  return (
    <div>
      <svg
        width="340"
        height="105"
        viewBox="0 0 340 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <InsideMenu />
        <BorderMenu />
        <MenuBorderShadow />

        <text
          x={centerX}
          y={centerY}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="24"
          fill="#252627"
        >
          {label}
        </text>
      </svg>
    </div>
  );
};

export default Menu;
