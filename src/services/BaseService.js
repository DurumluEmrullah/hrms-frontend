import axios from "axios";

const apiUrl ="http://localhost:8080/api/";
export class BaseService{

    name;
    constructor(name) {
        this.name=name;
    }
    getAll(){
      let newUrl=apiUrl+this.name+"/getAll";
        return axios.get(newUrl);
    }

}
