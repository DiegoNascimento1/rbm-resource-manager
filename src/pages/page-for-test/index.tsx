import ExampleAtom from "components/atoms/example-atom/example-index";
import InputContainer from "../.././components/atoms/input-container";
import React from "react";
import AlertAtom from "components/atoms/alert-notification-atom/alert-notification-index";

export default function MateusTestPage() {
  return (
    <>
      <AlertAtom alert text="Exemplo de alerta da API"/>
      <AlertAtom danger text="Exemplo de alerta da API"/>
      <AlertAtom sucess text="Exemplo de alerta da API"/>
      <AlertAtom info text="Exemplo de alerta da API"/>
      <AlertAtom bell text="Exemplo de alerta da API"/>
    </>
  )

}
