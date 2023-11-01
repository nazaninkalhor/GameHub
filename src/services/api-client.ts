import axios from "axios";

 export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:  {
        key: 'e1c4ce038d7a48ddba523166dcacd436'
    }
})