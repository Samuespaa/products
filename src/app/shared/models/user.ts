import { Deserializable } from "../interfaces/deserializable";

export class User implements Deserializable{
    private _id: number;
    private _name: string;

    constructor() {
        this._id = 0;
        this._name = '';
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    deserialize(input: any): this {
        this.id = input.id;
        this.name = input.name;
        return this;
    }
}