import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SumaPage } from './suma.page';

describe('SumaPage', () => {
  let component: SumaPage;
  let fixture: ComponentFixture<SumaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SumaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
