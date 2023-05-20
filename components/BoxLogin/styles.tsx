import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const BoxLogin = styled.div`
  span {
    color: rgb(255, 26, 26);
    width: 100%;
    position: relative;
    display: block;
    font-size: 12px;
    text-align: center;
    padding: 5px 0px;
    &.sucesso {
      color: #02b041;
    }
  }
  .tituloHeader {
    margin: 15px 0px;

    h1 {
      font-size: 28px;
      text-align: center;
      font-weight: 700;
    }
    h6 {
      font-weight: 400;
      text-align: center;
    }
  }

  .formKey {
    form {
      gap: 12px;
      width: 100%;

      input {
        padding: 8px 10px;
        border-radius: 5px;
        width: 100%;
        border: 1px solid #eee;
        &:focus,
        &:focus-within {
          border: 1px solid #02b041;
          outline: #02b041;
        }
      }
      .submit {
        position: relative;
        margin-top: 18px;
        button {
          background-color: #02b041;
          border: 0;
          padding: 8px 10px;
          color: #fff;
          font-weight: 700;
          text-transform: uppercase;
          border-radius: 7px;
          cursor: pointer;
          width: 100%;
        }

        .loading {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 3px solid #fff;
          border-right-color: transparent;
          position: relative;
          animation: ${spin} 1s infinite linear;
          position: absolute;
          top: 5px;
          right: 35%;
        }
      }
    }
  }
  .disclaimer {
    margin: 10px 0px 0px 0px;

    p {
      font-size: 11px;
      text-align: center;

      a {
        color: #02b041;
        text-decoration: underline;
      }
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
