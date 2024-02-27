import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BindingPage } from './binding.page';

describe('BindingPage', () => {
  let component: BindingPage;
  let fixture: ComponentFixture<BindingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BindingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
