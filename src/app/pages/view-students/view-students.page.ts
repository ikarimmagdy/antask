import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.page.html',
  styleUrls: ['./view-students.page.scss'],
})
export class ViewStudentsPage implements OnInit {

  constructor(private studentServices: StudentService) { }

  Students: any = [];
  classId:number

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.studentServices. getStudentListByClassId(this.classId).subscribe((res) => {
      console.log(res)
      this.Students = res._students;
    })
  }

  deleteStudent(_class, i) {
    if (window.confirm('Do you want to delete Class')) {
      this.studentServices.deleteStudent(_class._id)
        .subscribe(() => {
          this.Students.splice(i, 1);
          console.log('Student deleted!')
        }
        )
    }
  }

}
