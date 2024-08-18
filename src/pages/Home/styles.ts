import styled from "styled-components";
import Banner from "../../assets/banner.png";

export const Header = styled.header`
  background-image: url(${Banner});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  height: 30%;
  h1 {
    font-size: 200%;
    margin-left: 10%;
    margin-top: 2%;
  }
  h2 {
    font-size: 200%;
    margin: 10% 0 0 50%;
    color: white;
  }
  p {
    margin: 1% 0 10% 50%;
    width: 35%;
    color: white;
  }
`;
