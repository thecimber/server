import { Link } from 'react-router-dom';
import '../styles/emulator.css';

export const EmulatorCard = ({ emulator }) => {
  console.log(emulator.name);

  return (
    <Link to={`/emulador/${emulator.path}`} className="emulador-card">
      <img src={emulator.image} alt={emulator.name} />
      {/* <div className='container-name-emulator'>

        <h3>{emulator.name}</h3>
      </div> */}
    </Link>
  );
} 