import { TestBed } from '@angular/core/testing'
import { ActivatedRouteSnapshot } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { of } from 'rxjs'
import { PostData } from '../models/share.model'
import { CoreService } from './core/core.service'

import { PostResolver } from './post.resolver'

describe('PostResolver', () => {
  let resolver: PostResolver
  let coreService: CoreService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostResolver, { provide: CoreService, useValue: { getPostData: () => {} } }],
      imports: [RouterTestingModule],
    })
  })

  beforeEach(() => {
    resolver = TestBed.inject(PostResolver)
    coreService = TestBed.inject(CoreService)
  })

  it('should be created', () => {
    expect(resolver).toBeTruthy()
  })

  describe('#resolve', () => {
    it('should return observable post data', () => {
      const routeMock = new ActivatedRouteSnapshot()
      routeMock.params = { id: 1 }
      const getPostDataSpy = spyOn(coreService, 'getPostData').and.returnValue(of({} as PostData))

      resolver.resolve(routeMock)
        .subscribe((resolvedResult) => expect(resolvedResult).toEqual({} as PostData))

      expect(getPostDataSpy).toHaveBeenCalledWith(1)
    })
  })
})
