import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexStudent } from './index-student';

describe('IndexStudent', () => {
  let component: IndexStudent;
  let fixture: ComponentFixture<IndexStudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexStudent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexStudent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
