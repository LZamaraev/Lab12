import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MyWorker, MyWorkerType} from "../../shared/worker.model";

@Component({
  selector: 'app-editform-worker',
  templateUrl: './editform-worker.component.html',
  styleUrls: ['./editform-worker.component.css']
})
export class EditformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  id:number;
  name:string = '';
  surname:string = '';
  type:number = 0;
  constructor() { }
  @Output() editWorker = new EventEmitter<MyWorker>();
  ngOnInit(): void {}
  onEditWorker = ()=>{
    this.editWorker.emit({
      id: +this.id,
      name:this.name,
      surname:this.surname,
      type:this.type
    })
  }
}
