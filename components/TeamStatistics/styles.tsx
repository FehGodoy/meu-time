import styled from "styled-components";

export const TeamStatistics = styled.div`
  padding: 40px 0px;
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 10px;

    .titulo {
      margin: 10px 0px;
    }
    .tabelaJogos {
      caption {
        margin: 10px 0px;
        text-align: left;
        font-size: 18px;
        font-weight: 500;
        @media (max-width: 991px) {
          text-align: center;
        }
      }
      table {
        width: 100%;

        tr {
          background-color: #02b041;

          th,
          td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #ddd;
            color: #fff;
          }
        }

        @media (max-width: 600px) {
          border: 0;

          thead {
            border: none;
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;

            tr {
              border-bottom: 3px solid #ddd;
              display: block;
              margin-bottom: 0.625em;

              td {
                border-bottom: 1px solid #ddd;
                display: block;
                font-size: 0.8em;
                text-align: right;
                &::before {
                  content: attr(data-label);
                  float: left;
                  font-weight: bold;
                  text-transform: uppercase;
                }
                &:last-child {
                  border-bottom: 0;
                }
              }
            }
          }
        }
      }
    }
    .containerImageTeam {
      display: flex;
      justify-content: center;

      .imagemLogo {
        width: 160px;
        height: 160px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .boxContainerInfo {
      .dadosEquipe {
        text-align: center;
      }
      .jogadoresLista {
        .titulo {
          h1 {
            font-size: 18px;
            font-weight: 500;
            @media (max-width: 991px) {
              text-align: center;
            }
          }
        }
        .boxLista {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          @media (max-width: 991px) {
            justify-content: center;
          }
          .boxPlayer {
            display: flex;
            align-items: center;
            gap: 10px;
            width: 195px;
            background-color: #fff;
            box-shadow: 0px 1px 5px 0px rgb(103 103 103 / 63%);
            padding: 10px;
            border-radius: 2px;
            transition: ease-in 0.2s;

            @media (max-width: 991px) {
              flex-direction: column;
              width: 120px;
              justify-content: center;
              text-align: center;
            }

            .boxPhotoPlayer {
              width: 35%;

              img {
                width: 100%;
                height: 100%;
              }
            }
            .infoPlayerBox {
              .namePlayer {
                h1 {
                  font-size: 15px;
                  font-weight: 600;
                }
              }
              .nationality {
                h2 {
                  font-size: 15px;
                  font-weight: 300;
                }
              }
              .agePlayer {
                h3 {
                  font-size: 15px;
                  font-weight: 300;
                }
              }
            }
          }
        }
      }
    }
    .grafico {
      margin: 20px 0px;
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
      }
    }
  }
`;
