import { stationLines } from "./metroLines";
import { SiMoscowmetro } from "react-icons/si";
const MetroIcon = ({ station }) => {
    const lineColor = stationLines[station] || 'gray';
    return <SiMoscowmetro className="icon-metro" size={20} style={{ color: lineColor }} />;
  };
  
export default MetroIcon;