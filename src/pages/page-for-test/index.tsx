import ExampleAtom from "components/atoms/example-atom/example-index";
import InputContainer from "../.././components/atoms/input-container";
import React, { useState } from "react";
import AlertAtom from "components/atoms/alert-notification-atom/alert-notification-index";
import ListParticleColumn from "components/particles/ul-list-column-particle/list-index";
import ListParticleRow from "components/particles/ul-list-row-particle/list-index";
import RecoverySucessContainer from "components/molecules/recovery-password-sucess/recovery-sucess";
import Input from "components/particles/input-field";


export default function MateusTestPage() {

  const [input, setInput] = useState("");

  return (
    <>
      <AlertAtom sucess text="Test text from API"/>
      <AlertAtom danger text="Test text from API"/>
      <AlertAtom bell text="Test text from API"/>
      <AlertAtom alert text="Test text from API"/>
      <AlertAtom info text="Test text from API"/>

    </>
  )

}
