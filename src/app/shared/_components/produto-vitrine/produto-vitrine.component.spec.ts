import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoVitrineComponent } from './produto-vitrine.component';

describe('ProdutoVitrineComponent', () => {
  let component: ProdutoVitrineComponent;
  let fixture: ComponentFixture<ProdutoVitrineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoVitrineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoVitrineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
