import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarApagarProdutoComponent } from './editar-apagar-produto.component';

describe('EditarApagarProdutoComponent', () => {
  let component: EditarApagarProdutoComponent;
  let fixture: ComponentFixture<EditarApagarProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarApagarProdutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarApagarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
