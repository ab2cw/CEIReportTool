import { Component } from '@angular/core';
import { TinyEditor } from './tools/tiny-editor';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  year = 2017;
  type = "Quarter"; //0 means quarterly, 1 means annually
  quarterNumber = 1;
  content = "";
  urlPaths = [{"urlPath": "https://public.tableau.com/views/CEIStudentRegistration/V1?:embed=y&:display_count=yes"}];
  showTool = true;

  public constructor(private router: Router){}

  ngOnInit(){
    let d = new Date();
    this.year = d.getFullYear();
  }

  editorChange(e){
    this.content = e;
  }

  removeURL(index){
    this.urlPaths.splice(index, 1);
  }

  addURL(){
    this.urlPaths.push({"urlPath": ""});
  }

  toggleView(){
    if(this.type == "Quarter"){
      console.log(this.type + " " + this.quarterNumber + " " + this.year);
      console.log(this.content);
      console.log(this.urlPaths);
    }
    else{
      console.log(this.type + " " + this.year);
      console.log(this.content);
      console.log(this.urlPaths);
    }
    this.router.navigate(['generated']);
    //this.showTool = !this.showTool;
  }
}
