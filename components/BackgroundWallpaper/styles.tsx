import styled from "styled-components";

export const Background = styled.section`
  height: 90%;
  position: relative;
  display: flex;
  align-items: center;
  padding: 40px 130px;

  @media (max-width: 991px) {
    padding: 40px 20px;
    height: 100%;
  }

  .imagemFundo {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    img {
      height: 100%;
      object-fit: cover;
      object-position: center 20%;
      width: 100%;
    }
  }

  .boxContainerinfo {
    position: relative;
    z-index: 999;
    width: 50%;
    @media (max-width: 991px) {
      width: 100%;
    }
    .tagBox {
      width: 160px;
      background-color: #02b041;
      padding: 8px 18px;
      border-radius: 100px;
      h6 {
        font-size: 16px;
        text-align: center;
        color: #fff;
      }
    }
    .titulo {
      margin-top: 15px;

      h1 {
        font-size: 55px;
        line-height: 60px;
        color: #fff;
      }
    }
    .login {
      display: flex;
      align-items: center;
      gap: 10px;
      background-color: #fff;
      width: 175px;
      padding: 8px 0px;
      justify-content: center;
      margin-top: 25px;
      border: 0;
      cursor: pointer;
      h6 {
        color: #02b041;
        font-size: 17px;
        font-weight: 600;
      }
    }
  }
`;
