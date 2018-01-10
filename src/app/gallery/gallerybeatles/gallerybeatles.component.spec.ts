import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerybeatlesComponent } from './gallerybeatles.component';

describe('GallerybeatlesComponent', () => {
  let component: GallerybeatlesComponent;
  let fixture: ComponentFixture<GallerybeatlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerybeatlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerybeatlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
