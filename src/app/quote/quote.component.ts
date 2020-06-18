import { Component, OnInit } from '@angular/core';
import { Quote } from  '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes =[
    new Quote(1,'Dreams never fade as long as you make them a reality', '~Steven Cuoco','',new Date(2009,7,14),0,0),
    new Quote(2,'Im quite certain that in the end none of this is going to matter"','~Chris Mentillo','',new Date (2011,10,18),0,0),
    new Quote(3,'A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author.','~G.K. Chesterton','',new Date (2000,1,6),0,0),
  ]
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.entryDate = new Date(quote.entryDate)
    this.quotes.push(quote)
  }
  toogleDetails(index){
    this.quotes[index].showDetails =!this.quotes[index].showDetails;
  }
  completeQuote(isComplete,index){
    if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].message}`)
      if(toDelete){
      this.quotes.splice(index,1);
    }
  }
}
constructor() { }

  ngOnInit() {
  }

}
