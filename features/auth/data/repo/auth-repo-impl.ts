import { AuthRepoI } from "../../domain/repo/auth-repo";
import { AuthLocalDataSourceImpl } from "../data_source/remote/auth_data_source";
import { AuthResponse } from "../entities/auth-response";

export class AuthRepoImpl implements AuthRepoI {

    authDataSoure = new AuthLocalDataSourceImpl();


    async login(email: String, password: String): Promise<AuthResponse | Error> {
        try {


            const reponse = await this.authDataSoure.login(email , password);

            if(reponse.status_code != 1){
                return new Error(reponse.error.message)
            }

            if(!reponse.data){
                return new Error("Data returned with null")
            }

            if(!reponse.data.user.token) {
                return new Error("token returned with null")
            }

            return reponse;
            
        }catch(error) {
            return new Error(error.message)
        }
    }


    async register(username: String, email: String, password: String): Promise<AuthResponse| Error>  {
        try {


            const reponse = await this.authDataSoure.register(username,email , password);

            if(reponse.status_code != 1){
                return new Error(reponse.error.message)
            }

            if(!reponse.data){
                return new Error("Data returned with null")
            }

            if(!reponse.data.user.token) {
                return new Error("token returned with null")
            }

            return reponse;
            
        }catch(error) {
            return new Error(error.message)
        }
    }
    

}
