import { AuthResponse } from "../../entities/auth-response";

interface AuthDataSourceI {

  login(email :String , password : String) : Promise<AuthResponse> ;

  register(username  : String , email :String , password : String) : Promise<AuthResponse> ;


}

export class AuthLocalDataSourceImpl implements AuthDataSourceI {

    async login(email: String, password: String): Promise<AuthResponse> {
        try {
            const response = await fetch("",
            {
                headers : {
                    method : "POST"
                },
                body : JSON.stringify({
                    email : email,
                    password : password,
                })
            })
            return await response.json() as AuthResponse;
            
        } catch (error) {

            throw new Error("There was an error : " + error.message);

        }
    }

    async register(username: String, email: String, password: String): Promise<AuthResponse> {
        try {
            const response = await fetch("",
            {
                headers : {
                    method : "POST"
                },
                body : JSON.stringify({
                    username : username,
                    email : email,
                    password : password,
                })
            })
            return await response.json() as AuthResponse;
            
        } catch (error) {

            throw new Error("There was an error : " + error.message);

        }
    }


}


