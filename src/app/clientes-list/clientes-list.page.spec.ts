import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientesListPage } from './clientes-list.page';

describe('ClientesListPage', () => {
  let component: ClientesListPage;
  let fixture: ComponentFixture<ClientesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
