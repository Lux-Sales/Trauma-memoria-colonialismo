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
  overflow: auto;
`;

export const VerticalDivider = styled.div`
  height: 100%;
  width: 100%;
  background-color: orange;
`;

export const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  h1 {
    margin: 1.5% 0;
  }
`;

export const TeamList = styled.div`
  height: fit-content;
  display: grid;
  grid-template-columns: 18% 18% 18% 18% 18%;
  justify-content: space-around;
  width: 100%;
  padding: 0 5%;
`;

export const Member = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  img {
    border-radius: 50%;
    width: 65%;
    height: 65%;
  }
  span {
    width: 100%;
    text-align: center;
  }
`;

export const SocialMedia = styled.div`
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-top: 1%;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      &:first-child {
        width: 7%;
        height: 7%;
      }
      cursor: pointer;
      width: 15%;
      height: 15%;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  padding: 2% 2%;
  img {
    height: 13%;
    width: 13%;
  }
  div {
    margin-bottom: 1%;
    &:first-child {
      display: flex;
      div {
        margin-right: 0;
        margin-left: auto;
        a {
          &:first-child {
            margin-right: 5%;
          }
          text-decoration: underline;
        }
      }
    }
  }
  span {
    a {
      text-decoration: underline;
    }
  }
`;
