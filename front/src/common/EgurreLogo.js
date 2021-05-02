import styled from "styled-components";
import logoImage from "../assets/img/logo.png";

export const EgurreLogo = styled.img`
  width: 200px;
  margin-top: 20px;
`;

EgurreLogo.defaultProps = {
  src: logoImage,
};
