import React from "react";
import * as Styled from "./styles";
import useFormHook from "@/hooks/useForm";
import CountryList from "@/components/CountryList";
import LeagueCountry from "@/components/LeagueCountry";
import SeasonLeagueCountry from "@/components/SeasonLeagueCountry";
import TeamsCountry from "@/components/TeamsCountry";
import TeamStatistics from "@/components/TeamStatistics";

const FormTeamSelect = () => {
  const { step } = useFormHook();

  return (
    <>
      <Styled.TeamSelect>
        {step === 1 && <CountryList />}
        {step === 2 && <LeagueCountry />}
        {step === 3 && <SeasonLeagueCountry />}
        {step === 4 && <TeamsCountry />}
        {step === 5 && <TeamStatistics />}
      </Styled.TeamSelect>
    </>
  );
};

export default FormTeamSelect;
