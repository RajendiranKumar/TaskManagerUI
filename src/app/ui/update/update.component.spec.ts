import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComponent } from './update.component';
import { Task } from 'src/app/models/task';
import { SharedService } from 'src/app/services/shared.service';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/internal/Observable';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;
  let itemToUpdate : Task;
  let sampleTaskList : Observable<Task[]>;
  let testService: SharedService;

  beforeEach(async(() => {
    itemToUpdate = new Task();
sampleTaskList = new Observable<Task[]>();
    TestBed.configureTestingModule({
      declarations: [ UpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Should have updated item',async(()=>
  {
    itemToUpdate.Task_Name = 'TestAddTask';
    itemToUpdate.Start_Date = new Date('07/30/2019');
    itemToUpdate.Parent_Task ='Test5';
    itemToUpdate.Is_End_Task = false;
    itemToUpdate.Priority = 3;
    sampleTaskList = testService.UpdateTasks(itemToUpdate);
    expect(sampleTaskList.subscribe(result=> result.length)).toEqual(1);
  }
));
});
