import styled from "styled-components";

export const SeasonLeagueCountry = styled.div`
  padding: 40px 0px;
  @media (max-width: 991px) {
    padding: 0px 0px;
  }
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 10px;
    margin-bottom: 30px;

    .boxSeasons {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 30px;

      .boxSeason {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 12px;
        background-color: #fff;
        box-shadow: 0px 1px 5px 0px rgb(103 103 103 / 63%);
        padding: 10px;
        border-radius: 2px;
        transition: ease-in 0.2s;

        .yearSeason {
          h1 {
            font-size: 15px;
            text-align: center;
            color: #575757;
            font-weight: 500;
          }
        }
        &.active {
          background-color: #02b041;

          .yearSeason {
            h1 {
              color: #fff;
            }
          }
        }
      }
    }

    .titulo {
      margin: 10px 0px;
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
