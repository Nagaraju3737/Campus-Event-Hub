import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginpage } from './loginpage';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('Loginpage', () => {
  let component: Loginpage;
  let fixture: ComponentFixture<Loginpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Loginpage,
        FormsModule,          //  ADD THIS
        RouterTestingModule   // ADD THIS
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loginpage);
    component = fixture.componentInstance;
<<<<<<< HEAD
    fixture.detectChanges();   //  ADD THIS
=======
    // await fixture.whenStable();
    fixture.detectChanges();
>>>>>>> main
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
