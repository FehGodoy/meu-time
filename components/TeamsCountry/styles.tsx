import styled from "styled-components";

export const TeamsCountry = styled.div`
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

    .boxTeams {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 30px;

      .boxTeam {
        width: 160px;
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
          width: 120px;
          gap: 6px;
          flex-direction: column;
          text-align: center;
        }
        .boxFlagTeam {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 50px;
            height: 50px;
            object-fit: contain;
            margin: 0 auto;
          }
        }
        .nameTeam {
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          h1 {
            font-size: 11px;
            text-align: center;
            color: #575757;
            font-weight: 500;
          }
        }
        &.active {
          background-color: #02b041;

          .nameTeam {
            h1 {
              color: #fff;
            }
          }
        }
      }
    }
    .boxButtonStep {
      margin: 10px 0px;
      display: flex;
      justify-content: space-between;
      button {
        background-color: #fff;
        color: #02b041;
        border: 1px solid #02b041;
        padding: 12px 20px;
        border-radius: 4px;
        text-transform: uppercase;
        font-weight: 500;
        cursor: pointer;
        @media (max-width: 991px) {
          background-color: #02b041;
          color: #fff;
        }
      }
      @media (max-width: 991px) {
        position: fixed;
        bottom: 15px;
        right: 20px;
        gap: 20px;
      }
    }
  }
`;
