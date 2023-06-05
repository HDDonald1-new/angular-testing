import { Observable } from 'rxjs'
import { RootEffects } from './effects'
import { Store } from '@ngrx/store'
import { RootStoreModule } from './root-store.module'
import { CoreService } from '../services/core/core.service'
import { TestBed, waitForAsync } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { cold, hot } from 'jasmine-marbles'
import { TestColdObservable } from 'jasmine-marbles/src/test-observables'
import { GetPostAction, GetPostDataAction, GetPostsAction, GetUserAction, SetPostAction, SetPostDataAction, SetPostsAction, SetUserAction } from './actions'
import { postDataMock, postMock, userMock } from 'mocks/response.mocks'

describe('RootEffects', () => {
  let actions: Observable<unknown>
  let effects: RootEffects
  let coreService: CoreService
  let store: Store<RootStoreModule>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
          RootEffects,
          CoreService,
          provideMockActions(() => actions),
          provideMockStore(),
        ],
      })
    })
  )

  beforeEach(() => {
    effects = TestBed.inject(RootEffects)
    coreService = TestBed.inject(CoreService)
    store = TestBed.inject(Store)
  })

  describe('loadPosts$', () => {
    describe('success flow', () => {
      it('should call getPosts service method', () => {
        const action = GetPostsAction()

        actions = hot('-a', { a: action })
        const response: TestColdObservable = cold('-a|', { a: [postMock] })

        const getPostsSpy = spyOn(coreService, 'getPosts').and.returnValue(response)

        effects.loadPosts$.subscribe(() => expect(getPostsSpy).toHaveBeenCalled())
      })

      it('should store posts', () => {
        const action = GetPostsAction()
        const outcome = SetPostsAction({ posts: [postMock] })

        actions = hot('-a', { a: action })
        const response: TestColdObservable = cold('-a|', { a: [postMock] })

        spyOn(coreService, 'getPosts').and.returnValue(response)

        const expected: TestColdObservable = cold('--b', { b: outcome })
        expect(effects.loadPosts$).toBeObservable(expected)
      })
    })
  })

  describe('loadPost$', () => {
    describe('success flow', () => {
      it('should call getPost service method', () => {
        const action = GetPostAction({ postId: 0 })

        actions = hot('-a', { a: action })
        const response: TestColdObservable = cold('-a|', { a: postMock })

        const getPostSpy = spyOn(coreService, 'getPost').and.returnValue(response)

        effects.loadPost$.subscribe(() => expect(getPostSpy).toHaveBeenCalled())
      })

      it('should store post', () => {
        const action = GetPostAction({ postId: 0})
        const outcome = SetPostAction({ post: postMock })

        actions = hot('-a', { a: action })
        const response: TestColdObservable = cold('-a|', { a: postMock })

        spyOn(coreService, 'getPost').and.returnValue(response)

        const expected: TestColdObservable = cold('--b', { b: outcome })
        expect(effects.loadPost$).toBeObservable(expected)
      })
    })
  })

  describe('loadUser$', () => {
    describe('success flow', () => {
      it('should call getUser service method', () => {
        const action = GetUserAction({userid: 0 })

        actions = hot('-a', { a: action })
        const response: TestColdObservable = cold('-a|', { a: userMock })

        const getUserSpy = spyOn(coreService, 'getUser').and.returnValue(response)

        effects.loaduser$.subscribe(() => expect(getUserSpy).toHaveBeenCalled())
      })

      it('should store user', () => {
        const action = GetUserAction({ userid: 0 })
        const outcome = SetUserAction({ user: userMock })

        actions = hot('-a', { a: action })
        const response: TestColdObservable = cold('-a|', { a: userMock })

        spyOn(coreService, 'getUser').and.returnValue(response)

        const expected: TestColdObservable = cold('--b', { b: outcome })
        expect(effects.loaduser$).toBeObservable(expected)
      })
    })
  })

  describe('loadPostData$', () => {
    describe('success flow', () => {
      it('should call getPostData service method', () => {
        const action = GetPostDataAction({ postId: 0 })

        actions = hot('-a', { a: action })
        const response: TestColdObservable = cold('-a|', { a: postDataMock })

        const getPostDataSpy = spyOn(coreService, 'getPostData').and.returnValue(response)

        effects.loadPostData$.subscribe(() => expect(getPostDataSpy).toHaveBeenCalled())
      })

      it('should store postData', () => {
        const action = GetPostDataAction({ postId: 0 })
        const outcome = SetPostDataAction({ postData: postDataMock })

        actions = hot('-a', { a: action })
        const response: TestColdObservable = cold('-a|', { a: postDataMock })

        spyOn(coreService, 'getPostData').and.returnValue(response)

        const expected: TestColdObservable = cold('--b', { b: outcome })
        expect(effects.loadPostData$).toBeObservable(expected)
      })
    })
  })
})
