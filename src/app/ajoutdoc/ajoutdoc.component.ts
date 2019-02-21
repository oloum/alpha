import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-ajoutdoc',
  templateUrl: './ajoutdoc.component.html',
  styleUrls: ['./ajoutdoc.component.css']
})
export class AjoutdocComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AjoutdocComponent>) { }

  ngOnInit() {
  }
  confirmSelection() {
    this.dialogRef.close();

}
}
