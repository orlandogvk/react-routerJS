import React from 'react';
import './hoy-styles.css';
import { faTrash,faPen,faPlus  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Hoy(){
    return(
        <div className="home-page">
            <h2>
                Todas las tareas para hoy
            </h2>

            <div className="task-element">
                <div className="checkbox">
                    <label>
                        <input type="checkbox" name="optradio" value="" />
                    </label>
                </div>
                <div className="task-description">
                <div>
                         <p>Hacer la planeación para la clase de hoy</p>
                         <p id="fecha">19 de Marzo 2020</p>
                    </div>
                    <div className="botones">
                        <div className="iconbox backgroundpen"><a href="#"><FontAwesomeIcon className="update" icon={faPen} /></a></div>
                        <div className="iconbox backgroundtrash"><a href="#"><FontAwesomeIcon className="trashk" icon={faTrash} /></a></div>
                    </div>
                </div>
            </div>
            <div className="task-element">
                <div className="checkbox">
                    <label>
                        <input type="checkbox" name="optradio2" value="" />
                    </label>
                </div>
                <div className="task-description">
                <div>
                         <p>Hacer la planeación para la clase de hoy</p>
                         <p id="fecha">19 de Marzo 2020</p>
                    </div>
                    <div className="botones">
                    <div className="iconbox backgroundpen"><a href="#"><FontAwesomeIcon className="update" icon={faPen} /></a></div>
                    <div className="iconbox backgroundtrash"><a href="#"><FontAwesomeIcon className="trashk" icon={faTrash} /></a></div>
                    </div>
                </div>
            </div>
            <div className="task-element">
                <div className="checkbox">
                    <label>
                        <input type="checkbox" name="optradio2" value="" />
                    </label>
                </div>
                <div className="task-description">
                <div>
                         <p>Hacer la planeación para la clase de hoy</p>
                         <p id="fecha">19 de Marzo 2020</p>
                    </div>
                    <div className="botones">
                    <div className="iconbox backgroundpen"><a href="#"><FontAwesomeIcon className="update" icon={faPen} /></a></div>
                    <div className="iconbox backgroundtrash"><a href="#"><FontAwesomeIcon className="trashk" icon={faTrash} /></a></div>
                    </div>
                </div>
            </div>
            <div className="task-element">
                <div className="checkbox">
                    <label>
                        <input type="checkbox" name="optradio2" value="" />
                    </label>
                </div>
                <div className="task-description">
                <div>
                         <p>Hacer la planeación para la clase de hoy</p>
                         <p id="fecha">19 de Marzo 2020</p>
                    </div>
                    <div className="botones">
                    <div className="iconbox backgroundpen"><a href="#"><FontAwesomeIcon className="update" icon={faPen} /></a></div>
                    <div className="iconbox backgroundtrash"><a href="#"><FontAwesomeIcon className="trashk" icon={faTrash} /></a></div>
                    </div>
                </div>
            </div>
        
            <div className="addtask">
                 <div className="item roundedicon"><a href="#"><FontAwesomeIcon className="agregar" icon={faPlus} /></a></div>
                <div className="item paragraph"><p>Añadir tarea</p></div>
            </div>
        </div>
    )
}
