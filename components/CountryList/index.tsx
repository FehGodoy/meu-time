import React, { useEffect, useState } from "react";
import * as Styled from "./styles";
import useFormHook from "@/hooks/useForm";

const CountryList = () => {
  const {
    countriesList,
    successFetchLogin,
    setCountrySelect,
    countrySelect,
    handleNextStep,
    fetchLeague,
  } = useFormHook();
  const [visibleCountries, setVisibleCountries] = useState<number>(40);
  const [stepButton, setStepButton] = useState<Boolean>(false);
  const [classActive, setClassActive] = useState<number>();

  const handleLoadMore = () => {
    setVisibleCountries((prevCount) => prevCount + 40);
  };

  const handleCountryClick = (name: string, id: number) => {
    setCountrySelect(name);
    setStepButton(true);
    setClassActive(id);
  };

  useEffect(() => {
    if (countrySelect.length > 0) {
      fetchLeague();
    }
  }, [countrySelect]);

  return (
    successFetchLogin && (
      <Styled.CountryList>
        <div className="container">
          <div className="titulo">
            <h1>Selecione um país de sua preferência</h1>
          </div>
          <div className="boxPaises">
            {countriesList
              ?.slice(0, visibleCountries)
              ?.map((country: any, index: number) => (
                <div
                  className={`boxCountry ${
                    index === classActive ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => handleCountryClick(country?.name, index)}
                >
                  <div className="boxFlagCountry">
                    <img src={country?.flag} alt={country?.name} />
                  </div>
                  <div className="nameCountry">
                    <h1>{country?.name}</h1>
                  </div>
                </div>
              ))}
          </div>
          <div className="buttonFooter">
            {visibleCountries < countriesList?.length && (
              <button onClick={handleLoadMore}>Carregar mais</button>
            )}
            {stepButton && (
              <button className="stepNext" onClick={handleNextStep}>
                Avançar
              </button>
            )}
          </div>
        </div>
      </Styled.CountryList>
    )
  );
};

export default CountryList;
