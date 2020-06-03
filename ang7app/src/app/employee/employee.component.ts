import { Employee } from './../shared/employee.model';
import { NgForm } from '@angular/forms';
import { EmployeeService } from './../shared/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService:EmployeeService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshEmployeeList();
  }

  resetForm(form?: NgForm){
    if(form)
      form.reset();
      this.employeeService.selectedEmployee={
        _id:"",
        name:"",
        position:"",
        office:"",
        salary:null 
      }      
  }
  onSubmit(form){ 
    if(form.value._id ==""){
      this.employeeService.postEmployee(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.refreshEmployeeList();
        alert("Successfully submitted data")
       })
    }
    else{
      this.employeeService.putEmployee(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.refreshEmployeeList();
        alert("Successfully submitted data")
       })
    }
    
  }


  refreshEmployeeList(){
    this.employeeService.getEmployeeList().subscribe((res)=>{
      this.employeeService.employees=res as Employee[];
    })
  }

  OnEdit(emp :Employee){
    this.employeeService.selectedEmployee=emp;
  }

  onDelete(_id:string,form:NgForm){
    if(confirm('Are you sure to delete this record ?')==true){
      this.employeeService.deleteEmployee(_id).subscribe((res)=>{
        this.refreshEmployeeList();
        this.resetForm(form);
        console.log("deleted successfully.")
      })
    }
  }
}
