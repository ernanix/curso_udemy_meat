export class User {
    constructor(public email: string,
                public name: string,
                private password: string){}
    matches(another: User): boolean {
        console.log("matches: "+ another)
        return  another !== undefined &&
                another.email === this.email &&
                another.password === this.password
    }
}

export const users = {
    "eduardo@gmail.com": new User('eduardo@gmail.com','Eduardo','edu03'),
    "milena@gmail.com": new User('milena@gmail.com','Milena','mimi00')
}