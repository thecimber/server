import React from 'react';
import '../styles/modal.css';
import { DownloadButtons } from './DownloadButtons';
import { DOWNLOAD_TUTORIAL, TELEGRAM_CHANEL,PASSWORD_ZIP } from '../constants';

export const ModalDetailsGame = ({ game, onClose}) => {
  if (!game) return null;

  const { id, name, image,console, format, language, size, downloadFormat, link, downloadTutorial, date, genre, downloadMethods } = game;

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
                  <img src={image} alt="Captain Quazar" />
                </div>
                <div className="modal-info">
                  <p><strong>Consola: </strong> {console}</p>
                  <p><strong>Idioma: </strong>{'[' + language.join(', ') + ']'} </p>
                  <p><strong>Genero: </strong> {genre.join(', ')}</p>
                  <p><strong>Formato: </strong> {'[' + format.join(', ') + ']'}</p>
                  <p><strong>Tamaño: </strong> {size}</p>
                  <p translate="no"><strong>Contraseña / Password: </strong> {PASSWORD_ZIP}</p>
                  <p translate="no"><strong>Descomprimir con: </strong> RAR</p>

                  <div className="rating">
                    <p><strong>Descargar: </strong></p>

                    {
                      <DownloadButtons methods={downloadMethods} />
                    }
                    {/* <span>★★★★★</span> 2.55 (0 votes) */}
                  </div>
                  <div>
                    <p className='' style={{color: 'white', fontSize: '1.1rem'}}>Mediafire: <span style={{color: '#ffff00'}}>Mucha publicidad.</span></p>
                    <p className='' style={{color: 'white', fontSize: '1.1rem'}}>Terabox: <span style={{color: '#bfff00'}}>Poca publicidad.</span></p>
                  </div>
                  <div className="help-users row mx-1">
                    <a
                      href={DOWNLOAD_TUTORIAL}
                      className={`btn btn-danger btn-sm`}
                      target="_blank"
                      rel=""
                    >
                      <i className='fa-brands fa-youtube'></i> {'Como descargar en terabox'}
                    </a>

                    <a
                      href={TELEGRAM_CHANEL}
                      className={`btn btn-primary btn-sm`}
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
