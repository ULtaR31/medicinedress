export interface Iadress{
    street:string;
    city:string;
    zipcode:string;
}

export interface IUser{
    id:number;
    name:string;
    email:string;
    adress:Iadress;

}