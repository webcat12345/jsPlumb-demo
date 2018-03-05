import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoDiagramEditorComponent } from './go-diagram-editor.component';

describe('GoDiagramEditorComponent', () => {
  let component: GoDiagramEditorComponent;
  let fixture: ComponentFixture<GoDiagramEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoDiagramEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoDiagramEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
