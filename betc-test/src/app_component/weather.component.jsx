import React from 'react';

import icon from '../Pluie.png';
import icon_fleche from '../Pluie_fleche.png';
import fleche from '../Fleche.png';
import fleche_fleche from '../Fleche_Fleche.png';

const Weather = (props) => {
    return(
        <div className="container">
            <div className="meteo">
                <h2>Météo</h2>
                <p>( {props.latitude} , {props.longitude} )</p>
            </div>
            <div className="cards">
                <h1 className="city">{props.city}</h1>
                <h2 className="py-2 temp">{props.temp_celsius}&deg;</h2>

                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card text-center">
                                <div className="card-body text-dark">
                                    <img src={fleche} alt="icon"/>
                                    <h4>{props.wind_direction} km/h</h4>
                                    <p>Direction et vitesse du vent</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card text-center">
                                <div className="card-body text-dark">
                                    <img src={fleche_fleche} alt="icon"/>
                                    <h4>{props.wind_speed} km/h</h4>
                                    <p>Vitesse des rafales de vent</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card text-center">
                                <div className="card-body text-dark">
                                    <img src={icon} alt="icon"/>
                                    <h4>{props.humidity} %</h4>
                                    <p>Risque de précipitation</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card text-center">
                                <div className="card-body text-dark">
                                    <img src={icon_fleche} alt="icon"/>
                                    <h4>mm</h4>
                                    <p>Vitesse des rafales de vent</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButtom" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">LONDON</button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButtom">
                        <a className="dropdown-item" >PARIS</a>
                        <a className="dropdown-item" >BANGKOK</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Weather;