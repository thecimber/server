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
            <div className="hero-content">
                <h1 className='title-hero-section'>Bienvenido a nuestra plataforma</h1>
                <p className='description-hero-section'>Descubre los mejores juegos para tus emuladores favoritos.</p>
                <SearchForm search={startSearch} handleSubmit={handleSubmit} handleChange={handleChange}></SearchForm>
                <div className="container-btn-hero-section">
                    <a className='btn-animated btn-animated-blue w-20 hide-button mx-2' href='https://www.youtube.com/@thecimber' target="_blank" >Explorar más contenido</a>
                    <a className='btn-animated btn-animated-green w-20 hide-button mx-2' href='https://docs.google.com/forms/d/e/1FAIpQLSf4Ug4sYuRQ888QbA-K7p6YI5x_cIQgbiB6xvR-ZlFi0mtWog/viewform?usp=header' target="_blank" >Solicitar Juegos</a>
                </div>
            </div>
        </div>
    )

}