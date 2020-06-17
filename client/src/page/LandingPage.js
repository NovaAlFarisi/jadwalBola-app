import React, {useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import jadwalBola from '../api/jadwalBola';
const LandingPage = ()=>{
    const [jadwal, setJadwal] = useState([]);
    let {id} = useParams()
    function getName(name){
        var cleanName = name.replace('-',' ');
        return cleanName
    }
    useEffect(()=>{
        async function retrieveData(){
            let result = await jadwalBola(id);
            setJadwal(result)
        }
        retrieveData()
    }, [id]);
    return(
        <div className="ui container">
            <NavBar/>
            <h1>{(id)? getName(id) : null}</h1>
            <section className="ui">
                {jadwal.map((result)=>{
                    return (<Card homeName={result.home.homeClubName} homeLogo={result.home.homeLogo} awayName={result.away.awayClubName} awayLogo={result.away.awayLogo} date={result.info.schedule} time={result.info.scheduleTime}/>);
                })
                } 
            </section>
        </div>
    )
}

export default LandingPage;