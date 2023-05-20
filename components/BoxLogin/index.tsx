import React, { useContext } from "react";
import * as Styled from "./styles";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import useFormHook from "@/hooks/useForm";
import { useForm } from "react-hook-form";
import { Poppins } from "next/font/google";
import { SoccerBall } from "@phosphor-icons/react";
import FormContext from "@/context/FormContext";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "0",
  boxShadow: 24,
  p: 4,
};

const BoxLogin = () => {
  const {
    modalLogin,
    handleClose,
    formLogin,
    loginAction,
    apiKey,
    setApiKey,
    successFetchLogin,
    errorFetchLogin,
  } = useContext(FormContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={modalLogin}
      onClose={handleClose}
      data-testid="modalLogin"
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      className={`${poppins.className}`}
    >
      <Fade in={modalLogin}>
        <Box sx={style}>
          <Styled.BoxLogin>
            <div className="tituloHeader">
              <h1 data-testid="heading1">
                A bola vai rolar! <SoccerBall size={22} />
              </h1>
              <h6 data-testid="heading6">
                Para iniciar, faça o login inserindo sua chave da API
              </h6>
            </div>
            <div className="formKey">
              <form onSubmit={handleSubmit(formLogin)}>
                <input
                  type="text"
                  placeholder="Sua chave vai aqui..."
                  value={apiKey}
                  {...register("apiKey", { required: true })}
                  onChange={handleInputChange}
                />
                {errors.apiKey && <span>Chave da API é obrigatória.</span>}
                {errorFetchLogin && <span>Chave da API incorreta.</span>}
                {successFetchLogin && (
                  <span className="sucesso">
                    Acesso correto, carregando dados.
                  </span>
                )}
                <div className="submit">
                  <button type="submit">Login</button>
                  {loginAction && (
                    <>
                      <div className="loading"></div>
                    </>
                  )}
                </div>
              </form>
            </div>
            <div className="disclaimer">
              <p>
                Caso não tenha a chave, acesse{" "}
                <a href="#" target="_blank">
                  aqui
                </a>{" "}
                para se cadastrar
              </p>
            </div>
          </Styled.BoxLogin>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BoxLogin;
