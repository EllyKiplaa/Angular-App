export class Quote {
    public showDetails:boolean;
    constructor(public id:number,public message:string, public details:string, public entryDate:Date ){
      this.showDetails=false
    }
  }
