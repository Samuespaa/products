import { Deserializable } from "../interfaces/deserializable";

export class Token implements Deserializable {
    private _id: number;
    private _token: string;
    private _expiration: Date;
    private _createdAt: Date;
    private _updatedAt: Date;
  
    constructor() {
        this._id = 0;
        this._token = '';
        this._expiration = new Date(1970, 0, 1, 1, 0, 0, 0);
        this._createdAt = new Date(1970, 0, 1, 1, 0, 0, 0);
        this._updatedAt = new Date(1970, 0, 1, 1, 0, 0, 0);
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

    public get createdAt(): Date {
      return this._createdAt;
    }

    public set createdAt(value: Date) {
      this._createdAt = value;
    }

    public get updatedAt(): Date {
      return this._updatedAt;
    }

    public set updatedAt(value: Date) {
      this._updatedAt = value;
    }

    deserialize(input: any): this {
        this.id = input.id;
        this.token = input.token;
        this.expiration = input.expiration;
        this.createdAt = new Date(input.created_at);
        this.updatedAt = new Date(input.updated_at);
        return this;
    }
}