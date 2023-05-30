import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseFieldComponent } from './choose-field.component';

fdescribe('ChooseFieldComponent', () => {
  let component: ChooseFieldComponent;
  let fixture: ComponentFixture<ChooseFieldComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseFieldComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#onSelectField', () => {

    it('should remove checked item from checkitems array if item already exits in the array', () => {
      const itemToRemove = { checked: false, value: 'Item 1'};
      component.selectedITFields = [
        { checked: true, value: 'Item 1'},
        { checked: true, value: 'Item 2'}
      ];

      component.onSelectField(itemToRemove);

      expect(component.selectedITFields.length)
      .withContext('An item has been removed from the array')
      .toBe(1);

      expect(component.selectedITFields)
      .withContext('Correct item has been removed')
      .toEqual([{ checked: true, value: 'Item 2'}]);
    });

    it('should add item to checkitems array if item does NOT already exits in the array', () => {
      const itemToAdd = { checked: true, value: 'Item 2'};
      component.selectedITFields = [
        { checked: true, value: 'Item 1'}
      ];

      component.onSelectField(itemToAdd);

      expect(component.selectedITFields.length)
        .withContext('An item has been added to the array')
        .toBe(2);

      expect(component.selectedITFields)
        .withContext('Correct item has been added to the array')
        .toContain(itemToAdd);
    });
  });
});
