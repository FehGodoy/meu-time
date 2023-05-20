import styled from "styled-components";

export const ContainerInfo = styled.div`
  display: block;
  position: relative;
  margin: -40px auto 0px auto;
  background-color: #02b041;
  max-width: 1280px;
  padding: 18px 25px;
  box-shadow: 0px 0px 5px 0px rgb(205 205 205 / 75%);
  @media (max-width: 991px) {
    display: none;
  }

  .box {
    display: grid;
    grid-template-columns: 40% 30% 30%;
    align-items: center;

    .tituloInfo {
      h1 {
        font-size: 22px;
        color: #fff;
      }
    }

    .boxImageTimes {
      border-right: 2px solid #eee;
      border-left: 2px solid #eee;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .boxImageJogadores {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
