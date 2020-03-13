export class user
{
    constructor(public userName:string, public age:number,public sex:string)
    {
        this.userName=userName;
        this.age=age;
        this.sex=sex;
    }

    public copy()
    {
        let copy = Object.assign({}, this);

        return copy;
    }
}