import { useState } from 'react';
import '../styles/heroSection.css'
import { SearchForm } from './SearchForm';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {

    const [startSearch, setStartSearch] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (startSearch === '') return;
        navigate('/games', { state: { startSearch } });
    };

    const handleChange = ({ target }) => {
        setStartSearch(target.value)
    }
    return (
        <div className="hero-section">
            <div className="hero-content container">
                <h1 className='title-hero-section'>Bienvenido a nuestra plataforma</h1>
                <p className='description-hero-section'>Descubre los mejores juegos para tus emuladores favoritos.</p>
                <SearchForm search={startSearch} handleSubmit={handleSubmit} handleChange={handleChange}></SearchForm>
                <a className='btn btn-success w-20 hide-button' href='https://www.youtube.com/@thecimber' target="_blank" >Explorar contenido</a>
            </div>
        </div>
    )

}