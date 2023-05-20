import React, { useEffect, useState } from "react";
import * as Styled from "./styles";
import useFormHook from "@/hooks/useForm";
import Image from "next/image";

const LeagueCountry = () => {
  const {
    step,
    handleNextStep,
    handlePreviousStep,
    leagueList,
    setLeagueSelect,
    leagueSelect,
    fetchSeasons,
    loading,
  } = useFormHook();
  const [visibleCountries, setVisibleCountries] = useState<number>(40);
  const [stepButton, setStepButton] = useState<Boolean>(false);
  const [classActive, setClassActive] = useState<number>();

  const handleLoadMore = () => {
    setVisibleCountries((prevCount) => prevCount + 40);
  };
  const handleLeagueClick = (id: number, idItem: number) => {
    setLeagueSelect(id);
    setStepButton(!stepButton);
    setClassActive(idItem);
  };

  useEffect(() => {
    if (leagueSelect) {
      fetchSeasons();
    }
  }, [leagueSelect]);

  return (
    <>
      {step === 2 && (
        <Styled.LeagueCountry>
          <div className="container">
            <div className="titulo">
              <h1>Selecione uma liga pertencente ao país selecionado:</h1>
            </div>
            <div className="boxLigas">
              {leagueList?.map((league: any, index: number) => {
                return (
                  <div
                    className={`boxLiga ${
                      index === classActive ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => handleLeagueClick(league?.league?.id, index)}
                  >
                    <div className="boxFlagLiga">
                      <Image
                        src={league?.league?.logo}
                        alt={league?.league?.name}
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="nameLiga">
                      <h1>{league?.league?.name}</h1>
                    </div>
                  </div>
                );
              })}
            </div>
            <>
              <div className="buttonFooter">
                {visibleCountries < leagueList?.length && (
                  <div className="boxButtonLoad">
                    <button onClick={handleLoadMore}>Carregar mais</button>
                  </div>
                )}
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
            </>
          </div>
        </Styled.LeagueCountry>
      )}
    </>
  );
};

export default LeagueCountry;
