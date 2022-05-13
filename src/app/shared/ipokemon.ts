export interface Itype {
    Name:string;
}

export interface Ipokemon {
    Code:number;
    ChineseName:string;
    EnglishName:string;
    Description:string;
    Img:string;
    Types:Itype[];
    Height:string;
    Weight:string;
}


