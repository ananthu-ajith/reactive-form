import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reactive';
  form !:FormGroup;
  booklist:any[]=[];

  constructor(private fb:FormBuilder)
  {}
    ngOnInit()
    {
    this.form=this.fb.group({
      Book_Name:[''],
      Author:[''],
      Price:[''],
      Genre:[''],
      Published_Date:[''],
      Country:[''],
      Description:['']
    })

    
    
    }

    submit()
    {
      this.booklist.push(this.form.value);     
      console.log(this.booklist);
      this.form.reset();
    }
  
}
