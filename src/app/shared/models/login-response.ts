import { Deserializable } from "../interfaces/deserializable";
import { User } from "./user";
import { Token } from "./token";

export class LoginResponse implements Deserializable{
    private _user: User;
    private _token: Token;

    constructor() {
        this._user = new User();
        this._token = new Token();
    }

    public get user(): User {
        return this._user;
    }

    public set user(value: User) {
        this._user = value;
    }

    public get token(): Token {
        return this._token;
    }

    public set token(value: Token) {
        this._token = value;
    }

    deserialize(input: any): this {
        this.user = new User().deserialize(input.user);
        this.token = new Token().deserialize(input.token);
        return this;
    }
}