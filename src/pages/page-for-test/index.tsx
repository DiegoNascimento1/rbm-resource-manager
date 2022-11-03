import ScheduleContainer from "components/molecules/schedule-container/schedule-container";
import ButtonParticle from "components/particles/button-primary/button-primaty-index";
import { useAuth } from "contexts/auth-context";

export default function MateusTestPage() {

  const { logout } = useAuth();

  return (
    <>
      <ScheduleContainer/>
      <ButtonParticle light onClick={()=>logout()} tamanho={'300px'} text='LOGOUT'/>
    </>
  )

}
