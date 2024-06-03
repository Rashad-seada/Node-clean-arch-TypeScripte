import { AuthResponse } from "../../data/entities/auth-response";

export interface AuthRepoI {

    login(email :String , password : String) : Promise<AuthResponse | Error>;

    register(username  : String , email :String , password : String) : Promise<AuthResponse | Error> ;

    
}