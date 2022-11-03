import ScheduleContainer from "components/molecules/schedule-container/schedule-container";
import InputDateContainer from "components/atoms/input-date-container/input-date-index";
import { useAuth } from "contexts/auth-context";
import ButtonParticle from "components/particles/button-primary/button-primaty-index";

export default function MateusTestPage() {

  const { logout } = useAuth();

  return (
    <>
      <ButtonParticle light onClick={()=>logout()} tamanho="300px" text="LOGOUT"/>
      <ScheduleContainer/>
    </>
  )

}
