
import axios from 'axios';
const jadwalBola = async (liga) => {
    const scheduleResult = await axios.get(`http://localhost:5000/api/${liga}`).then(res=>{
        if(res.status === 200){
            return res.data.result
        }
    })
    return scheduleResult
}

export default jadwalBola;