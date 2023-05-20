import React, { useEffect, useState } from "react";
import * as Styled from "./styles";
import useFormHook from "@/hooks/useForm";
import Image from "next/image";

const TeamsCountry = () => {
  const {
    step,
    handlePreviousStep,
    teamsList,
    setTeamsSelect,
    fetchTeam,
    teamsSelect,
    handleNextStep,
    fetchPlayers,
  } = useFormHook();

  const [stepButton, setStepButton] = useState<Boolean>(false);
  const [classActive, setClassActive] = useState<number>();

  const handleTeamClick = (id: number, idTeam: number) => {
    setTeamsSelect(id);
    setStepButton(true);
    setClassActive(idTeam);
  };

  useEffect(() => {
    if (teamsSelect) {
      fetchTeam();
      fetchPlayers();
    }
  }, [teamsSelect]);

  return (
    <>
      {step === 4 && (
        <Styled.TeamsCountry>
          <div className="container">
            <div className="titulo">
              <h1>Selecione um time:</h1>
            </div>
            <div className="boxTeams">
              {teamsList?.map((team: any, index: number) => {
                return (
                  <div
                    className={`boxTeam ${
                      index === classActive ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => handleTeamClick(team?.team?.id, index)}
                  >
                    <div className="boxFlagTeam">
                      <Image
                        src={team?.team?.logo}
                        alt={team?.team?.name}
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="nameTeam">
                      <h1>{team?.team?.name}</h1>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="boxButtonStep">
              <button className="stepPrevious" onClick={handlePreviousStep}>
                Voltar
              </button>
              {stepButton && (
                <button className="stepNext" onClick={handleNextStep}>
                  Pegar estatísticas
                </button>
              )}
            </div>
          </div>
        </Styled.TeamsCountry>
      )}
    </>
  );
};

export default TeamsCountry;
