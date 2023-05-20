import React from "react";
import * as Styled from "./styles";
import imagemPlayers from "../../assets/images/box-container.png";
import imagemTimes from "../../assets/images/box-container-2.png";
import Image from "next/image";
import useFormHook from "@/hooks/useForm";

const ContainerInfo: React.FC = () => {
  const { successFetchLogin } = useFormHook();
  return (
    <>
      {!successFetchLogin && (
        <Styled.ContainerInfo>
          <div className="box">
            <div className="tituloInfo">
              <h1>
                Encontre aqui informações sobre <br /> seu time ou jogador
              </h1>
            </div>
            <div className="boxImageTimes">
              <Image src={imagemPlayers} alt="Jogadores de Futebol" />
            </div>
            <div className="boxImageJogadores">
              <Image src={imagemTimes} alt="Times de Futebol" />
            </div>
          </div>
        </Styled.ContainerInfo>
      )}
    </>
  );
};

export default ContainerInfo;
