import { DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { PostResolver } from '../../services/post.resolver'

import { PostComponent } from './post.component'

describe('PostComponent', () => {
  let component: PostComponent
  let fixture: ComponentFixture<PostComponent>
  let el: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        PostResolver
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
