import {WP_URL} from './constants';
import axios from 'axios';


export const Blogpost = async () => {
    try{
        const {data} = await axios.get(WP_URL);
        return(data);
    } catch(err){
        console.log(err);
    }
   
}