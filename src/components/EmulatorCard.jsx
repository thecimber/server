import { Link } from 'react-router-dom';
import '../styles/emulator.css';

export const EmulatorCard = ({ emulator }) => {

  return (
    <Link to={`/emulador/${emulator.path}`} className="emulador-card">
      <img src={emulator.image} alt={emulator.name} />
    </Link>
  );
} 