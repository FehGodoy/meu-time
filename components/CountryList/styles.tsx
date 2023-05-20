import styled from "styled-components";

export const CountryList = styled.div`
  padding: 40px 0px;
  @media (max-width: 991px) {
    padding: 0px 0px;
  }
  .container {
    max-width: 1280px;
    margin: 0 auto;
    margin-bottom: 30px;
    padding: 10px;

    .titulo {
      margin: 10px 0px;
    }
    .boxPaises {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 30px;

      .boxCountry {
        max-width: 160px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 12px;
        background-color: #fff;
        box-shadow: 0px 1px 5px 0px rgb(103 103 103 / 63%);
        padding: 10px;
        border-radius: 2px;
        transition: ease-in 0.2s;

        @media (max-width: 991px) {
          max-width: 120px;
          flex-direction: column;
          text-align: center;
        }

        .boxFlagCountry {
          width: 50%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .nameCountry {
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          h1 {
            font-size: 11px;
            text-align: center;
            color: #575757;
            font-weight: 500;
          }
        }
        &.active {
          background-color: #02b041;

          .nameCountry {
            h1 {
              color: #fff;
            }
          }
        }
      }
    }
    .buttonFooter {
      gap: 10px;
      display: flex;
      align-items: center;
      button {
        background-color: #02b041;
        border: 0;
        padding: 12px 20px;
        color: #fff;
        border-radius: 4px;
        text-transform: uppercase;
        font-weight: 500;
        cursor: pointer;

        &.stepNext {
          background-color: #fff;
          color: #02b041;
          border: 1px solid #02b041;
          @media (max-width: 991px) {
            position: fixed;
            bottom: 15px;
            right: 20px;
            background-color: #02b041;
            color: #fff;
          }
        }
      }
    }
  }
`;
