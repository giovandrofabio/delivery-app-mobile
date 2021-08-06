import { User } from "../model/user/User";

class AuthService {
    recoverPassword(email: string) : Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email == "error@email.com"){
                    reject({message: "Email not found"})
                } else {
                    resolve();
                }
            }, 3000)
        })
    }
    login(email: string, password: string) : Promise<User> {
        return new Promise<User>((resolve, reject) => {
            setTimeout(() => {
                if (email == "error@email.com"){
                    reject({message: "User not found"});
                } else {
                    const user: User = {
                        email,
                        id: "userId"
                    }
                    resolve(user);
                }
            }, 3000)
        })
    }
}

export default new AuthService;