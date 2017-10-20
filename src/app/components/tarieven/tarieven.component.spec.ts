import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarievenComponent } from './tarieven.component';

describe('TarievenComponent', () => {
  let component: TarievenComponent;
  let fixture: ComponentFixture<TarievenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarievenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarievenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
