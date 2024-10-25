const WeatherReducer = (state, action) =>{

    switch(action.type){

        case "Get_Weather" : 
        return {
            ...state,
            weather : action.payload
        }
    }

}

export default WeatherReducer