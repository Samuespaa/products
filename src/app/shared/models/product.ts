import { Deserializable } from "../interfaces/deserializable";

export class Product implements Deserializable{
    private _id: number;
    private _name: string;
    private _description: string;
    private _color: string;
    private _size: string;
    private _status: boolean;
    private _createdAt: Date;
    private _updatedAt: Date;

    constructor() {
        this._id = 0;
        this._name = '';
        this._description = '';
        this._color = '';
        this._size = '';
        this._status = false;
        this._createdAt = new Date(1970, 0, 1, 1, 0, 0, 0);
        this._updatedAt = new Date(1970, 0, 1, 1, 0, 0, 0);
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

    public get description(): string {
        return this._description;
    }
    
    public set description(value: string) {
        this._description = value;
    }

    public get color(): string {
        return this._color;
    }
    
    public set color(value: string) {
        this._color = value;
    }

    public get size(): string {
        return this._size;
    }
    
    public set size(value: string) {
        this._size = value;
    }

    public get status(): boolean {
        return this._status;
    }
    
    public set status(value: boolean) {
        this._status = value;
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
        this.name = input.name;
        this.description = input.description;
        this.color = input.color;
        this.size = input.color;
        this.status = input.status;
        this.createdAt = new Date(input.created_at);
        this.updatedAt = new Date(input.updated_at);
        return this;
    }
}