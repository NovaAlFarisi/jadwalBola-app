import React from 'react'

const Card = (props) => {
    console.log(props)
    return(
        <div className="ui placeholder segment">
            <div className="ui two column very relaxed stackable grid">
                <div className="column">
                    <div className="ui form">
                        <div className="field">
                            <label>Home</label>
                            <p><img style={{'width':'30px', 'height':'30px'}} src={props.homeLogo} alt="logo"/>{props.homeName}</p>
                        </div>
                        <div className="field">
                            <label>Away</label>
                            <p><img style={{'width':'30px', 'height':'30px'}} src={props.awayLogo} alt="logo"/>{props.awayName}</p>
                        </div>
                    </div>
                </div>
                <div className="middle aligned column">  
                    <div className="column">
                        <div className="ui form">
                            <div className="field">
                                <label>Date</label>
                                <p>{props.date}</p>
                            </div>
                            <div className="field">
                                <label>Time</label>
                                <p>{props.time}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ui vertical divider">
                Match
            </div>
        </div>


    )
}

export default Card;