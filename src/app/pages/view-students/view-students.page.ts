import { IStudent } from './../../shared/models/student.model';
import { DataService } from './../../shared/services/data-services.service';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.page.html',
  styleUrls: ['./view-students.page.scss'],
})
export class ViewStudentsPage implements OnInit {

  classId: any
  Students: any[];

  constructor(private studentServices: StudentService, private data: DataService, private route: ActivatedRoute, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.classId = this.router.getCurrentNavigation().extras.state.class_id;
      console.log("selected Class Id:" + this.classId)
    }
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // this.studentServices.getStudentListByClassId(this.classId).subscribe((res) => {
    //   console.log(res)
    //   this.Students = res._students;
    // })
    this.Students = this.data.getStudent();
    if (this.classId != undefined) {
      console.log("before filter :" + this.Students.length)
      this.Students = this.Students.filter(s => s.classId == 1)
      console.log("Afterr filter :" + this.Students.length)
    }
  }

  deleteStudent(_class, i) {
    if (window.confirm('Do you want to delete Student')) {
      this.studentServices.deleteStudent(_class._id)
        .subscribe(() => {
          this.Students.splice(i, 1);
          console.log('Student deleted!')
        }
        )
    }
  }

}
