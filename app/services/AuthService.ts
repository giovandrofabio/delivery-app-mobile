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
}

export default new AuthService;