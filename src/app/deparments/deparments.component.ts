import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap} from '@angular/router';

@Component({
  selector: 'app-deparments',
  templateUrl: './app.deparments.html',
  styleUrls: ['./app.deparments.css']
})
export class DeparmentsComponent implements OnInit {

    public departmentName = "Software";
    public selectedId ;
    departments =[
        {id:'1',name:'SpringBoot'},
        {id:'2',name:'Angular6'},
        {id:'3',name:'JSP'},
        {id:'4',name:'MySQL'},
        {id:'5',name:'Hibernate'}
    ]
    onSelect(department){
        this.router.navigate(['/projects',department.id])
    }
    isSelected(department){
        //alert("Is Selected")
        return department.id === this.selectedId;
    }
    
  constructor(private router:Router,private route:ActivatedRoute) { }
    
  ngOnInit() {
      
      this.route.paramMap.subscribe((params :paramMap)=>{
        let id = parseInt(params.get('id'))
        this.selectedId = id;
      })
  }

}
