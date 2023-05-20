import React, { useContext } from "react";
import * as Styled from "./styles";
import Image from "next/image";
import background from "../../assets/images/background.jpg";
import { UserSwitch } from "@phosphor-icons/react";
import useFormHook from "@/hooks/useForm";

const BackgroundWallpaper = () => {
  const { handleOpen, successFetchLogin } = useFormHook();

  return (
    <>
      {!successFetchLogin && (
        <Styled.Background>
          <div className="imagemFundo">
            <Image src={background} alt="Meu Time Background" />
          </div>
          <div className="boxContainerinfo">
            <div className="tagBox">
              <h6>Bem-vindo(a)</h6>
            </div>
            <div className="titulo">
              <h1>Plataforma Meu Time</h1>
            </div>
            <button className="login" onClick={handleOpen}>
              <h6>Acessar agora</h6>
              <UserSwitch size={20} color="#02b041" />
            </button>
          </div>
        </Styled.Background>
      )}
    </>
  );
};

export default BackgroundWallpaper;
