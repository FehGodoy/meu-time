import React from "react";
import * as Styled from "./styles";
import useFormHook from "@/hooks/useForm";
import Image from "next/image";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

const TeamStatistics = () => {
  const { step, handlePreviousStep, teamSelect, playersTeam } = useFormHook();

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const mostPlayedFormation = teamSelect?.lineups?.reduce(
    (prev: { played: number }, current: { played: number }) =>
      prev.played > current.played ? prev : current,
    { played: 0 }
  );

  const minutes = teamSelect?.goals?.for?.minute; // n foi possível desestruturar

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  const labels = Object?.keys(minutes).map((key) => {
    return key;
  });
  const minutesGoals = Object?.values(minutes).map((item: any) => {
    return item.total;
  });

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Gols Marcados por Minuto",
        backgroundColor: "#02b04166",
        borderColor: "#02b041",
        borderWidth: 1,
        hoverBackgroundColor: "#02b04199",
        hoverBorderColor: "#02b041",
        data: minutesGoals,
      },
    ],
  };

  const translation: { [key: string]: string } = {
    played: "Jogos",
    wins: "Vitórias",
    draws: "Empates",
    loses: "Derrotas",
  };

  return (
    <>
      {step === 5 && (
        <Styled.TeamStatistics>
          <div className="container">
            <div className="containerImageTeam">
              <div className="imagemLogo">
                <Image
                  src={teamSelect?.team?.logo}
                  alt={teamSelect?.team?.name}
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className="boxContainerInfo">
              <div className="dadosEquipe">
                <div className="tituloDados">
                  <h2>Formação mais utilizada: </h2>
                </div>
                <div className="valorDados">
                  <h2>{mostPlayedFormation?.formation}</h2>
                </div>
              </div>
              <div className="jogadoresLista">
                <div className="titulo">
                  <h1>Lista de Jogadores</h1>
                </div>
                <div className="boxLista">
                  {playersTeam?.map((player: any, index: number) => {
                    return (
                      <div className="boxPlayer" key={index}>
                        <div className="boxPhotoPlayer">
                          <div className="boxFlagPlayer">
                            <Image
                              src={player?.player?.photo}
                              alt={player?.player?.name}
                              width={50}
                              height={50}
                            />
                          </div>
                        </div>
                        <div className="infoPlayerBox">
                          <div className="namePlayer">
                            <h1>{player?.player?.name}</h1>
                          </div>
                          <div className="nationality">
                            <h2>{player?.player?.nationality}</h2>
                          </div>
                          <div className="agePlayer">
                            <h3>{player?.player?.age} anos</h3>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="tabelaJogos">
              <table>
                <caption>Estatísticas de jogos</caption>
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Casa</th>
                    <th scope="col">Fora</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {Object?.keys(teamSelect?.fixtures).map((key) => (
                    <tr key={key}>
                      <th scope="row">{translation[key]}</th>
                      <td>{teamSelect?.fixtures[key].home}</td>
                      <td>{teamSelect?.fixtures[key].away}</td>
                      <td>{teamSelect?.fixtures[key].total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grafico">
              <Bar options={options} data={chartData} />
            </div>
            <div className="boxButtonStep">
              <button className="stepPrevious" onClick={handlePreviousStep}>
                Voltar
              </button>
            </div>
          </div>
        </Styled.TeamStatistics>
      )}
    </>
  );
};

export default TeamStatistics;
