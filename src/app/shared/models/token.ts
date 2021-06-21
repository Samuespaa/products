import { Deserializable } from "../interfaces/deserializable";

export class Token implements Deserializable {
    private _id: number;
    private _token: string;
    private _expiration: Date;
    private _created_at: Date;
    private _updated_at: Date;
  
    constructor() {
        this._id = 0;
        this._token = '';
        this._expiration = new Date(1970, 0, 1, 1, 0, 0, 0);
        this._created_at = new Date(1970, 0, 1, 1, 0, 0, 0);
        this._updated_at = new Date(1970, 0, 1, 1, 0, 0, 0);
    }

    public get id(): number {
      return this._id;
    }

    public set id(value: number) {
      this._id = value;
    }
    
    public get token(): string {
      return this._token;
    }

    public set token(value: string) {
      this._token = value;
    }

    public get expiration(): Date {
      return this._expiration;
    }

    public set expiration(value: Date) {
      this._expiration = value;
    }

    public get created_at(): Date {
      return this._created_at;
    }

    public set created_at(value: Date) {
      this._created_at = value;
    }

    public get updated_at(): Date {
      return this._updated_at;
    }

    public set updated_at(value: Date) {
      this._updated_at = value;
    }

    deserialize(input: any): this {
        this.id = input.id;
        this.token = input.token;
        this.expiration = input.expiration;
        this.created_at = input.created_at;
        this.updated_at = input.updated_at;
        return this;
    }
}