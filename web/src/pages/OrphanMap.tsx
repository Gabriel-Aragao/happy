import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import logo from '../images/sqlogo.svg';

import 'leaflet/dist/leaflet.css'
import '../styles/pages/orphanMap.css';


function OrphanMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={logo} alt="happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita :)</p>
                </header>
                <footer>
                    <strong>Monteiro</strong>
                    <span>Paraíba</span>
                </footer>
            </aside>
            <Map 
                center={[-7.8994499,-37.1210059]} 
                zoom={15} 
                style={{width: '100%', height:'100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#ffffff"></FiPlus>
            </Link>

        </div>
    );
}

export default OrphanMap;