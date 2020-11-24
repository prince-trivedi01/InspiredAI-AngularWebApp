import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOpenedComponent } from './blog-opened.component';

describe('BlogOpenedComponent', () => {
  let component: BlogOpenedComponent;
  let fixture: ComponentFixture<BlogOpenedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogOpenedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogOpenedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
