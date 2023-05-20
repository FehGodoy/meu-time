"use client";

import React, { createContext, useState } from "react";
import {
  Country,
  League,
  Seasons,
  TeamSelect,
  TeamsLists,
  PlayersTeam,
} from "@/types/global";

const FormContext = createContext<any>({});

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [modalLogin, setModalLogin] = useState<Boolean>(false);
  const [loginAction, setLoginAction] = useState<Boolean>(false);
  const [errorFetchLogin, setErrorFetchLogin] = useState<Boolean>(false);
  const [successFetchLogin, setSuccessFetchLogin] = useState<Boolean>(false);
  const [apiKey, setApiKey] = useState<String>("");
  const [countrySelect, setCountrySelect] = useState<String>("");
  const [countriesList, setCountriesList] = useState<Country[]>([]);

  const [leagueList, setLeagueList] = useState<League[]>([]);
  const [leagueSelect, setLeagueSelect] = useState<number>(0);

  const [seasonsList, setSeasonsList] = useState<Seasons[]>([]);
  const [seasonsSelect, setSeasonsSelect] = useState<number>(0);

  const [teamsList, setTeamsList] = useState<TeamsLists[]>([]);

  const [teamSelect, setTeamSelect] = useState<TeamSelect[]>([]);
  const [teamsSelect, setTeamsSelect] = useState<number>(0);

  const [playersTeam, setPlayersTeam] = useState<PlayersTeam[]>([]);

  const handleOpen = () => setModalLogin(true);
  const handleClose = () => setModalLogin(false);
  const [step, setStep] = useState<number>(0);

  const formLogin = () => {
    setLoginAction(!loginAction);
    setTimeout(() => {
      setLoginAction(false);
    }, 2000);
    fetchCountries();
    handleNextStep();
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://v3.football.api-sports.io/countries",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": `${apiKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar países");
      }

      const data = await response.json();

      if (data.results > 0) {
        setCountriesList(data.response);
        setErrorFetchLogin(false);
        setSuccessFetchLogin(true);
        setTimeout(() => {
          setModalLogin(false);
        }, 1900);
      } else {
        console.log("ERRO: ", data.errors);
        setErrorFetchLogin(true);
        setSuccessFetchLogin(false);
      }
    } catch (error) {
      console.error("Erro ao buscar países:", error);
    }
  };

  // Fetch league
  const fetchLeague = async () => {
    try {
      const response = await fetch(
        `https://v3.football.api-sports.io/leagues?search=${countrySelect}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": `${apiKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar a liga");
      }

      const data = await response.json();

      if (data.results > 0) {
        setLeagueList(data.response);
      } else {
        console.log("ERRO: ", data.errors);
      }
    } catch (error) {
      console.error("Erro ao buscar as ligas:", error);
    }
  };

  const fetchSeasons = async () => {
    try {
      const response = await fetch(
        `https://v3.football.api-sports.io/leagues?country=${countrySelect}&id=${leagueSelect}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": `${apiKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar as temporadas");
      }

      const data = await response.json();

      if (data.results > 0) {
        setSeasonsList(data.response);
      } else {
        console.log("ERRO: ", data.errors);
      }
    } catch (error) {
      console.error("Erro ao buscar as temporadas:", error);
    }
  };

  // Fetch teams
  const fetchTeams = async () => {
    try {
      const response = await fetch(
        `https://v3.football.api-sports.io/teams?league=${leagueSelect}&season=${seasonsSelect}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": `${apiKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar o time");
      }

      const data = await response.json();

      if (data.results > 0) {
        setTeamsList(data.response);
      } else {
        console.log("ERRO: ", data.errors);
      }
    } catch (error) {
      console.error("Erro ao buscar os times ligas:", error);
    }
  };

  // Fetch team
  const fetchTeam = async () => {
    try {
      const response = await fetch(
        `https://v3.football.api-sports.io/teams/statistics?season=${seasonsSelect}&team=${teamsSelect}&league=${leagueSelect}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": `${apiKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar o time selecionado");
      }

      const data = await response.json();

      if (data.results > 0) {
        setTeamSelect(data.response);
      } else {
        console.log("ERRO: ", data.errors);
      }
    } catch (error) {
      console.error("Erro ao buscar o time", error);
    }
  };

  // Fetch players
  const fetchPlayers = async () => {
    try {
      const response = await fetch(
        `https://v3.football.api-sports.io/players?team=${teamsSelect}&season=${seasonsSelect}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": `${apiKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar os jogadores selecionado");
      }

      const data = await response.json();

      if (data.results > 0) {
        setPlayersTeam(data.response);
      } else {
        console.log("ERRO: ", data.errors);
      }
    } catch (error) {
      console.error("Erro ao buscar os jogadores", error);
    }
  };
  return (
    <FormContext.Provider
      value={{
        modalLogin,
        setModalLogin,
        handleOpen,
        handleClose,
        loginAction,
        setLoginAction,
        formLogin,
        countriesList,
        setApiKey,
        apiKey,
        errorFetchLogin,
        successFetchLogin,
        countrySelect,
        setCountrySelect,
        handleNextStep,
        step,
        setStep,
        handlePreviousStep,
        setLeagueList,
        leagueList,
        fetchLeague,
        setLeagueSelect,
        leagueSelect,
        setSeasonsSelect,
        seasonsSelect,
        seasonsList,
        setSeasonsList,
        teamsList,
        setTeamsList,
        teamsSelect,
        setTeamsSelect,
        fetchTeams,
        fetchTeam,
        setTeamSelect,
        teamSelect,
        fetchPlayers,
        playersTeam,
        fetchSeasons,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormContext;
