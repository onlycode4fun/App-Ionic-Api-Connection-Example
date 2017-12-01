export class Car{
    
      public id:number;
      public color:string;
    
      constructor(object:any){
        this.id = object.id;
        this.color = object.color;
      }
    }
    