import React from 'react';
import NavBar from '../components/NavBar';
const About = () => {
    return(
        <div className="ui container">
            <NavBar />
            <div className="ui segment">
                <h1>Nova Al Farisi</h1><br/>
                <img src="https://instagram.fcgk13-1.fna.fbcdn.net/v/t51.2885-15/e35/101700870_694501564684841_243727449486124386_n.jpg?_nc_ht=instagram.fcgk13-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=JPo0Qqi0YGsAX8oqDCq&oh=b1d6778d7ed2f95c55a47bb028cfb451&oe=5F12BB1A" alt="avatar"/>
                <a href="https://instagram.com/nova_alfarisi">Instagram</a><br/>
                <a href="https://github.com/novaalfarisi">GitHub</a>
            </div>
        </div>
    )
}

export default About;