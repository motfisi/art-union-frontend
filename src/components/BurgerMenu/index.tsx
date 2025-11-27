import { FC } from "react";
import { navItems } from "@/const";

import { BurgerMenuProps } from "./types";

import { Layer1, Layer2, MainContainer, Text, Link } from "./styles";

const BurgerMenu: FC<BurgerMenuProps> = ({ isOpen }) => {
  return (
    <>
      <Layer1 isOpen={isOpen} />
      <Layer2 isOpen={isOpen} />
      <MainContainer isOpen={isOpen}>
        {isOpen &&
          navItems.map((item, index) => (
            <Link href={item.href}>
              <Text
                key={isOpen ? `${index} open` : `${index} closed`}
                text={item.label}
                ease="elastic.out(1, 0.7)"
                splitType="chars"
                duration={1}
                delay={70}
                startDelay={(index + 1) * 0.2}
              />
            </Link>
          ))}
      </MainContainer>
    </>
  );
};

export default BurgerMenu;
