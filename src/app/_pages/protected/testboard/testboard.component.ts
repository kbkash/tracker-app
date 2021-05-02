import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-testboard',
  templateUrl: './testboard.component.html',
  styleUrls: ['./testboard.component.scss']
})
export class TestboardComponent implements OnInit {

  
  serverURL = "http://127.0.0.1:5000/testFile"
  uploadForm: FormGroup

  onFileSelect(event){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.uploadForm.get('file').setValue(file);
    }
  }


  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('file').value)
    
    this.httpClient.post<any>(
      this.serverURL,
      formData
    ).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }


  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      file:['']
    })
  }

}
