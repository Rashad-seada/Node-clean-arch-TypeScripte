import { AuthRepoImpl } from "../../data/repo/auth-repo-impl";

class LoginUseCase {

    auth = new AuthRepoImpl()

    async call(email :String , password : String) : Promise<AuthResponse | Error> {
        const respone = await this.auth.login(email,password);

        if(respone instanceof Error){
            return respone
        } else {
            // chache token 

            const cacheResponse = new CacheTokenUseCase().call(respone.data.user.token)

            if(cacheResponse instanceof Error){
                return cacheResponse as Error
            } else {

                return respone

            }

        }
    }

}

