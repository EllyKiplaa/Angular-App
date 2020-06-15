import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input () quote: Quote;
  @Output () isComplete =new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }


  upvote(quote){
    quote.upvote=quote.upvote+1;
  }

  downvote(quote){
    quote.downvote=quote.downvote+1;
  }
  constructor() { }

  ngOnInit(){
  }

}
