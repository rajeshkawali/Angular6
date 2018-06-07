import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router'

@Component({
  selector: 'app-projects',
  template: `
    <p>
        Selected Dept Id = {{deptId}}  
    </p>
    <input (click)="goNext()" type="button" value="Next"/><br>
    <input (click)="goPrevious()" type="button" value="Previous"/><br>
    <div><input (click)="goBack()" type="button" value="Back"/></div><br><br>
    <p>
        <button (click)="goToAddress()">Address</button>
        <button (click)="goToContact()">Contact</button><br>
    </p>
    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ProjectsComponent implements OnInit {

    public deptId;
  constructor(private route:ActivatedRoute,private router:Router) { }

    ngOnInit() {
      //let id = parseInt(this.route.snapshot.paramMap.get('id')); 
      //this.deptId = id;
      // it is not working when we call same component again so use ParamMap. Shown below
      this.route.paramMap.subscribe((params :paramMap)=>{
                                let id = parseInt(params.get('id'))
                                    this.deptId = id;
      })
    }
    goNext(){
        let nextId = this.deptId + 1;
        this.router.navigate(['/projects',nextId])
        //if u change relative path it can access the path (Relative navigation)
        //this.router.navigate([nextId],{relativeTo:this.route}) 
        
    }
    goPrevious(){
        let previousId = this.deptId - 1;
        this.router.navigate(['/projects',previousId])
    }
    goBack(){
        let selectedId = this.deptId ? this.deptId : null;
        this.router.navigate(['/departments',{id:selectedId}])
        // Relative path to go back department
        //this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route})
    }
    goToAddress(){
        this.router.navigate(['address'],{relativeTo:this.route}) 
    }
    goToContact(){
        this.router.navigate(['contact'],{relativeTo:this.route}) 
    }

}
