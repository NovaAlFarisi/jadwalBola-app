const request = require('request')
const cheerio = require('cheerio');


const loadSchedule = (liga) => {
    let target = `https://sport.detik.com/sepakbola/jadwal/${liga}`;
    return new Promise((resolve, reject) => {
        try {
            request.get(target, (error, response, body)=>{

                let result = []
                const $ = cheerio.load(body);
                for(var i = 0; i <= $('div[class=team]').length-1; i++){
        
                    let homeLogo = $('div[class=team] > .home > a > img')[i].attribs['src']
                    let awayLogo = $('div[class=team] > .away > a > img')[i].attribs['src']
                    let homeClubName = $('div[class=team] > .home > a > img')[i].next.data;
                    let awayClubName = $('div[class=team] > .away > a > img')[i].next.data;
                    let schedule = $('div[class=time]')[i].children[1].children[0].data
                    let scheduleTime = $('div[class=time]')[i].children[3].children[0].data;
        
                    result.push({
                        home:{
                            homeLogo,
                            homeClubName
                        },
                        away:{
                            awayLogo,
                            awayClubName
                        },
                        info:{
                            schedule,
                            scheduleTime
                        }
                    })
                }
                resolve(result);
            })
        } catch (error) {
            reject(error);
        }    
    })
}

module.exports = {loadSchedule}