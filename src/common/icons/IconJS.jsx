import styled from "styled-components";

export default function IconJS({ width, height }) {
  return (
    <Icono>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        viewBox="0 0 48 48"
      >
        <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
        <path
          fill="none"
          stroke="#000001"
          strokeMiterlimit="10"
          strokeWidth="3.3"
          d="M23.783,22.352v9.819 c0,3.764-4.38,4.022-6.283,0.802"
        ></path>
        <path
          fill="none"
          stroke="#000001"
          strokeMiterlimit="10"
          strokeWidth="3.3"
          d="M34.69,25.343 c-1.739-2.727-5.674-2.345-5.84,0.558c-0.214,3.757,6.768,2.938,6.247,7.107c-0.365,2.92-4.874,3.858-7.193-0.065"
        ></path>
      </svg>
    </Icono>
  );
}

const Icono = styled.div``;
