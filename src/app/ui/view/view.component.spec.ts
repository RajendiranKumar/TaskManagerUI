import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponent } from './view.component';
import { Task } from 'src/app/models/task';
import { SharedService } from 'src/app/services/shared.service';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/internal/Observable';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;
  let itemToView : Task;
  let sampleTaskList : Observable<Task[]>;
  let testService: SharedService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should have end the task',async(()=>
  {
    sampleTaskList = testService.EndTask(itemToView.Task_Id);
    expect(sampleTaskList.subscribe(result=> 
      result.filter(x=> x.Task_Id == itemToView.Task_Id))).toEqual(1);
  }

  
));

it('Should have delete the task',async(()=>
  {
    sampleTaskList = testService.DeleteTask(itemToView.Task_Id);
    expect(sampleTaskList.subscribe(result=> 
      result.filter(x=> x.Task_Id == itemToView.Task_Id))).toEqual(1);
  }
));

});
