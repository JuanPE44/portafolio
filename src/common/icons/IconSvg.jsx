import { motion } from "framer-motion";
import styled from "styled-components";

export function IconSvg({ icon, width, height, color, href, animate = true }) {
  return (
    <Icon
      whileHover={{ scale: animate && 1.2 }}
      whileTap={{ scale: animate && 0.8 }}
      width={width}
      height={height}
      color={color}
      href={href}
      target="_blank"
    >
      {icon}
    </Icon>
  );
}

const Icon = styled(motion.a)`
  width: ${(props) => (props.width ? props.width : "4")}rem;
  height: ${(props) => (props.height ? props.height : "4")}rem;
  fill: ${(props) => props.color && props.color};
  cursor: pointer;
`;
