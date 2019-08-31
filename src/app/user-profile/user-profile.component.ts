// import { Component, OnInit } from '@angular/core';
// import {User}from '../user';
// import {HttpClient} from '@angular/common/http';
// import {HttpRequestService}from './repos-request';
// import { Repository } from '../repository';


// @Component({
//   selector: 'app-user-profile',
//   templateUrl: './user-profile.component.html',
//   providers:[HttpRequestService],
//   styleUrls: ['./user-profile.component.css']
 
// })
// export class UserProfileComponent implements OnInit {
//   title = 'GitSearch';
//   User:User;
//   repos:Repository;
//   addNew(user){
//     this.reposRequest.reposRequest(user)
//     this.repos=this.reposRequest.repos
//     // this.User.push(User)
//     this.Users= new User(user.name)
//     // console.log(user)
 
//   constructor(private repoRequest:HttpRequestService) { 
//     this.Users= new User("");
//     this.repos=new Repository(0,0,0,new Date(),"","");
//   }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import {User}from '../user';
import {HttpClient} from '@angular/common/http';
import {HttpRequestService}from './repos-request'
import { Repository } from '../repository';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  providers:[HttpRequestService],
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  Users:User;
  repos:Repository;
  addNew(user){
    this.reposRequest.reposRequest(user)
    this.repos=this.reposRequest.repos
    // this.User.push(User)
    this.Users= new User(user.name)
    // console.log(user)
}
  constructor(private reposRequest:HttpRequestService) { 
    this.Users= new User("");
    this.repos=new Repository(0,0,0,new Date(),"","");
  }

  ngOnInit() {
    
  }

}

