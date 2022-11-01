import { StyledButton } from "./button-primary-style";

import React from "react";
import axios from "axios";
import { Route, Router, useNavigate } from "react-router";
import path from "path";
import { useAuth } from "contexts/auth-context";

type ListButtonProps = {
  text?: string;
  loginInput?: string;
  senhaInput?: string;
}

export default function ButtonParticle(props: ListButtonProps) {

  const navigate = useNavigate();  
  const {login} = useAuth();

  async function Logando(loginInput: string | undefined, senhaInput: string | undefined) {


    if (loginInput && senhaInput) {
      if (loginInput.length > 0 && senhaInput.length > 0) {
        //login = "admin1"
        //senha = "R@12b23m34!"
        try {
          let requisicao = await axios.post('https://agendamento.carloschoma.com.br/login', {
            'login': loginInput,
            'senha': senhaInput
          });
          console.log(requisicao.data);
          navigate('/mateus-test');

          // login(loginInput, senhaInput)
        } catch {
          //SENHA INCORRETA
          console.log('login/senha incorreta');
          
        }

      }
    }
    else {
      //CASO NÂO TENHA NADA DIGITADO NO CAMPO EMAIL OU SENHA
    }
  }
  return (
    <StyledButton onClick={() => Logando(props.loginInput, props.senhaInput)}>{props.text}</StyledButton>
  );
}
