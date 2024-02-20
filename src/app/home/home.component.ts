import { Component, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  count: number =0;
  tdate:any;
  // isuserAuthenticated:boolean;
   showprofile:boolean=false;
   showRoutes=false;
  title:string ="Guest";

  constructor(private router:Router) { 
    //this.showprofile=this.mys.isAuthenticated;
  }
  ngOnChanges(changes: SimpleChanges): void {
     // this.isuserAuthenticated = this.mys.isAuthenticated;
  }

  ngOnInit() {
   setInterval(()=>{this.tdate=new Date()},550);  
   // this.mys.isloggedin.subscribe( e => { this.showprofile=e ,this.title=sessionStorage.getItem('Username')});
   
  }
  

  onIconClick(){
    this.count++;
    //this.op1.toggle(event.event);
  }

  onLogin(type:string){
    
    if(type == "login"){
      this.router.navigate(['/login']);
      this.showRoutes=true;
     // this.mys.formType.next("login");
    }  
   // sessionStorage.setItem('count',JSON.stringify(200))
  }
  onLogout(){
  //  this.mys.isAuthenticated=false;
    setTimeout(()=>{
      this.router.navigate(['/home']);
    },1000)
    
   // this.mys.isloggedin.next(false);
  }
}
