import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  @ViewChild('adminForm') adminFormValue: any;
  public question: string = '';
  public option1: string = '';
  public option2: string = '';
  public option3: string = '';
  public option4: string = '';
  public description: string = '';

  public url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  async onSubmit() {
   
    let data = {
      question: this.question,
      option1: this.option1,
      option2: this.option2,
      option3: this.option3,
      option4: this.option4,
      description: this.description,
    };
    this.http.post(this.url + 'save', data).subscribe((res: any) => {
      if (res.msg === 'success') {
        this.question = '';
        this.option1 = '';
        this.option2 = '';
        this.option3 = '';
        this.option4 = '';
        this.description = '';
      }
      alert(res['msg']);
    });
  }
}
