import {Injectable} from '@angular/core'
@Injectable()
export class DataService {
    private data:any = {}; 
    setLoginCredential(loginData) {      
        this.data = loginData;  
      }  
      
      getLoginCredential() {  
        return this.data;  
      }


}