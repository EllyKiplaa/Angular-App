export class Quote {
    public showDetails:boolean;
    constructor(public id:number,public message:string, public details:string, public submittedBy:string, public entryDate:Date,public upvote:number, public downvote:number){
      this.showDetails=false;
      this.upvote = 0;
      this.downvote = 0;

    }
  }
