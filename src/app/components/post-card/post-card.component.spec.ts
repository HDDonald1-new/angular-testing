import { DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { postMock, posts } from 'mocks/response.mocks'
import { PostCardComponent } from './post-card.component'

describe('PostCardComponent', () => {
  let component: PostCardComponent
  let fixture: ComponentFixture<PostCardComponent>
  let el: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostCardComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardComponent)
    component = fixture.componentInstance
    el = fixture.debugElement
    fixture.detectChanges()
  })

  it('should create the post', () => {
    const post = fixture.debugElement.componentInstance
    expect(post).toBeTruthy()
  })

  it('should display the post', () => {
    component.post = posts[0]
    const post = el.query(By.css('.card'))
    expect(post).toBeTruthy()
  })

  it('should display the post', () => {
    component.post = posts[0]
    const post = el.query(By.css('.card'))
    expect(post).toBeTruthy()
  })

  it('should show title', () => {
    component.post = postMock
    expect(component.title).toBe('fakeTitle')
  })

  it('should show body', () => {
    component.post = postMock
    expect(component.body).toBe('fakeBody')
  })
})
