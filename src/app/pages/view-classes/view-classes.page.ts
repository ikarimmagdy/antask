import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/shared/services/class-service.service';
import { StudentService } from 'src/app/shared/services/student.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-view-classes',
  templateUrl: './view-classes.page.html',
  styleUrls: ['./view-classes.page.scss'],
})
export class ViewClassesPage implements OnInit {

  constructor(private classService: ClassService, private studentServices: StudentService, private router: Router) { }
  Classes: any = [];

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.classService.getClassesList().subscribe((res) => {
      console.log(res)
      this.Classes = res._classes;
    })
  }

  deleteClass(_class, i) {
    if (window.confirm('Do you want to delete Class')) {
      this.classService.deleteClass(_class._id)
        .subscribe(() => {
          this.Classes.splice(i, 1);
          console.log('Class deleted!')
        }
        )
    }
  }

  viewStudents(_class, i) {
    let navigationExtras: NavigationExtras = {
      state: {
        class_id: _class.id
      },
    };
    this.router.navigate(["students"], navigationExtras);

  }

  viewAllStudents() {
    this.router.navigate(["students"]);

  }
}
