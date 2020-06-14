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
    new Quote(3,'“A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author.”','~G.K. Chesterton',new Date (2010,1,16)),
    new Quote(4,'"If you have a dream, don’t just sit there. Gather courage to believe that you can succeed and leave no stone unturned to make it a reality"','~Dr Roopleen',new Date (2010,1,16)),
    new Quote(5,'“What I like in a good author is not what he says, but what he whispers.”','~ Logan Pearsall Smith',new Date (2010,1,16))
  ]
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
