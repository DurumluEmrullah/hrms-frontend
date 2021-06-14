
import axios from "axios";
const apiUrl ="http://localhost:8080/api/Advertisements/";
export default class AdvertisementService{

    
    getAdvertisements(){
        let newUrl =apiUrl+"getAll";
        return axios.get(newUrl);
    }

   

}