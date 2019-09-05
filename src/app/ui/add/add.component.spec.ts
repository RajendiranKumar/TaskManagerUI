import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import { Task } from 'src/app/models/task';
import { SharedService } from 'src/app/services/shared.service';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/internal/Observable';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;
  let itemToAdd : Task;
  let sampleTaskList : Observable<Task[]>;
  let testService: SharedService;

  beforeEach(async(() => {
    itemToAdd = new Task();
sampleTaskList = new Observable<Task[]>();
    TestBed.configureTestingModule({
      declarations: [ AddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should have newly added item',async(()=>
  {
    itemToAdd.Task_Name = 'TestAddTask';
    itemToAdd.Start_Date = new Date('07/30/2019');
    itemToAdd.Parent_Task ='Test5';
    itemToAdd.Is_End_Task = false;
    itemToAdd.Priority = 3;
    sampleTaskList = testService.AddTasks(itemToAdd);
    expect(sampleTaskList.subscribe(result=> result.length)).toEqual(1);
  }
));
});
