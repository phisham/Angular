import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleanimalComponent } from './singleanimal.component';

describe('SingleanimalComponent', () => {
  let component: SingleanimalComponent;
  let fixture: ComponentFixture<SingleanimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleanimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleanimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
