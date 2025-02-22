import React from 'react';
import '../styles/modal.css';
import { DownloadButtons } from './DownloadButtons';
import { DOWNLOAD_TUTORIAL, TELEGRAM_CHANEL } from '../constants';

export const ModalDetailsGame = ({ game, onClose, console }) => {
  if (!game) return null;

  const { id, name, image, format, language, size, downloadFormat, link, downloadTutorial, date, genre, pathImage, downloadMethods } = game;

  return (
    <div className="abrir-modal animacion fadeIn">
      <div className="modal modal-lg" style={{ display: 'block' }} tabIndex={"-1"}>
        <div className="modal-dialog" role="document">
          <div className="modal-content custom-modal-content">
            <div className="modal-header custom-modal-header">
              <h5 className="modal-title custom-modal-title">{name}</h5>
            </div>
            <div className="modal-body custom-modal-body">
              <div className="modal-body-content">
                <div className="modal-image">
                  <img src={pathImage + image} alt="Captain Quazar" />
                </div>
                <div className="modal-info">
                  <p><strong>Consola: </strong> {console}</p>
                  <p><strong>Idioma: </strong>{'[' + language.join(', ') + ']'} </p>
                  <p><strong>Genero: </strong> {genre.join(', ')}</p>
                  <p><strong>Formato: </strong> {'[' + format.join(', ') + ']'}</p>
                  <p><strong>Tamaño: </strong> {size}</p>
                  <div className="rating">
                    <p><strong>Descargar: </strong></p>

                    {
                      <DownloadButtons methods={downloadMethods} />
                    }
                    {/* <span>★★★★★</span> 2.55 (0 votes) */}
                  </div>
                  <div>
                    <p className='' style={{color: 'red', fontSize: '1.1rem'}}>Mucha publicidad: <span style={{color: 'white'}}>Enlace mediafire</span></p>
                    <p className='' style={{color: 'green', fontSize: '1.1rem'}}>Poca publicidad: <span style={{color: 'white'}}>Enlace terabox</span></p>
                  </div>
                  <div className="help-users">
                    <a
                      href={DOWNLOAD_TUTORIAL}
                      className={`btn btn-danger`}
                      target="_blank"
                      rel=""
                    >
                      <i className='fa-brands fa-youtube'></i> {'Tutorial de descarga'}
                    </a>

                    <a
                      href={TELEGRAM_CHANEL}
                      className={`btn btn-primary`}
                      target="_blank"
                      rel=""
                    >
                      <i className='fa-brands fa-telegram'></i> {'Reportar link caido'}
                    </a>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => onClose()}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//https://raw.githubusercontent.com/thecimber/server/refs/heads/main/ps3/sonic-the-hedgehog-ps3-300x350.webp
/*
    <div className="modal-overlay">
      <div className="modal custom-dark-modal" style={{ display: 'block' }}>
        <div className="modal-header bg-dark text-white border-secondary">
          <h5 className="modal-title">{name}</h5>
          <button type="button" className="close text-white" onClick={onClose}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body bg-dark text-white">
          <div className="text-center mb-3">
            <img
              src={pathImage + image}
              alt={name}
              className="img-fluid rounded"
              style={{ maxHeight: '200px' }}
            />
          </div>
          <div className="modal-details">
            <p><strong>Consola:</strong> {console}</p>
            <p><strong>Publicado por:</strong> {''}</p>
            <p><strong>Desarrollado por:</strong> {''}</p>
            <p><strong>Vistas:</strong> {''}</p>
            <p><strong>Descargas:</strong> {'descarga'}</p>
            <p><strong>Lanzamiento:</strong> {''}</p>
            <p><strong>Tamaño del archivo:</strong> {size}</p>
            <p><strong>Calificación:</strong> {''}</p>
          </div>
          <div className="modal-description mt-3">
            <p>{name}</p>
          </div>
        </div>
        <div className="modal-footer bg-dark border-secondary">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
*/