import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export  class AppComponent implements OnInit{ 
  title = 'BumperToBumper';
  type = "collapsed"
  open = false

  ngOnInit(){

   }

  constructor() {
   
  }
  toggleSideBar(){
    this.open = !this.open
    console.log(this.open)
    if(this.open){
      this.type = "expanded"
    }else{
      this.type = "collapsed"
    }
  }
}
