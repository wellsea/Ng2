import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdclistComponent } from './rdclist.component';

describe('RdclistComponent', () => {
  let component: RdclistComponent;
  let fixture: ComponentFixture<RdclistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdclistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
