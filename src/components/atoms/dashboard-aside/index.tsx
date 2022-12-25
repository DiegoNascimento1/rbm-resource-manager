import DivGridItenArea from "components/particles/div-grid-item-area";
import useTheme from "hooks/useTheme";


export default function DashbordAside (){
    const { theme } = useTheme();
    return (
     <>
      <DivGridItenArea tituloArea="Aside" colorBackground={theme.colors.background_dashboard2} display="grid" medidas="">
        Aside
      </DivGridItenArea>
     </>
  
    )
};