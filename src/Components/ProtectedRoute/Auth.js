class auth{
    constructor(){
        this.authenticated = false;
    }
    logIn(cb) {
        this.authenticated = true;
        cb();
    }
    logOut(cb){
        this.authenticated = false
        cb();
    }
    isAuthenticated(){
        return this.authenticated;
    }

}
export default new auth();