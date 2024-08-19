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

export const Body = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f1f1;
  h1 {
    margin: 3% 0;
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: 48% 0.3% 48%;
  gap: 0.5%;
  padding: 0 15%;
`;

export const ContentColum = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img,
  div {
    margin: 3% 0;
    height: 40%;
  }
  h3 {
    text-align: right;
  }
  &:nth-child(3) {
    h3 {
      text-align: left;
    }
  }
`;

export const TextBox = styled.div`
  width: fill;
  height: 100%;
  overflow: scroll;
`;

export const VerticalDivider = styled.div`
  height: 100%;
  width: 100%;
  background-color: orange;
`;
