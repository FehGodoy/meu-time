import React, { useEffect, useState } from "react";
import * as Styled from "./styles";
import useFormHook from "@/hooks/useForm";

const SeasonLeagueCountry = () => {
  const {
    step,
    handleNextStep,
    handlePreviousStep,
    seasonsList,
    setSeasonsSelect,
    seasonsSelect,
    fetchTeams,
  } = useFormHook();

  const [stepButton, setStepButton] = useState<Boolean>(false);
  const [classActive, setClassActive] = useState<number>();

  const handleSeasonClick = (year: number, id: number) => {
    setSeasonsSelect(year);
    setStepButton(!stepButton);
    setClassActive(id);
  };

  useEffect(() => {
    if (seasonsSelect) {
      fetchTeams();
    }
  }, [seasonsSelect]);

  return (
    <>
      {step === 3 && (
        <Styled.SeasonLeagueCountry>
          <div className="container">
            <div className="titulo">
              <h1>Selecione uma temporada:</h1>
            </div>
            <div className="boxSeasons">
              {seasonsList[0].seasons?.map((seasons: any, index: number) => {
                return (
                  <div
                    className={`boxSeason ${
                      index === classActive ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => handleSeasonClick(seasons?.year, index)}
                  >
                    <div className="yearSeason">
                      <h1>{seasons?.year}</h1>
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
                  Avançar
                </button>
              )}
            </div>
          </div>
        </Styled.SeasonLeagueCountry>
      )}
    </>
  );
};

export default SeasonLeagueCountry;
