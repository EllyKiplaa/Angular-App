import { Component, OnInit } from '@angular/core';
import { Quote } from  '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes =[
    new Quote(1,'Dreams never fade as long as you make them a reality', '~Steven Cuoco',new Date(2020,1,14)),
    new Quote(2,'I’m quite certain that in the end none of this is going to matter','~Chris Mentillo',new Date (2010,1,16)),
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

  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].message}`)
      if(toDelete){
      this.quotes.splice(index,1);
    }
  }
}
  constructor() { }

  ngOnInit(){
  }

}
