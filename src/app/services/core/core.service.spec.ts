import { TestBed } from '@angular/core/testing';

import { CoreService } from './core.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Post } from '../../models/post.model';
import { HttpErrorResponse } from '@angular/common/http';
import { posts } from 'mocks/response.mocks';

describe('CoreService', () => {
  let service: CoreService;
  let http: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CoreService
      ]
    });
  });

  beforeEach(() => {
    http = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CoreService);
  });
  
  afterEach(() => {
    http.verify()
  })

  describe('getPosts', () => {
    it('should retrieve all posts', () => {
      service.getPosts().subscribe(
        posts => {
          expect(posts).toBeTruthy()
          expect(posts.length).toBe(10)
        }
      )
      const request = http.expectOne('https://jsonplaceholder.typicode.com/posts')
      expect(request.request.method).toEqual('GET')
      request.flush(posts)
    });
  })

  describe('getPost', () => {
    it('should retrieve a post by id', () => {
      service.getPost(10).subscribe(
        post => {
          expect(post).toBeTruthy()
        }
      )
      const request = http.expectOne('https://jsonplaceholder.typicode.com/posts/10')
      expect(request.request.method).toEqual('GET')
      request.flush(posts.find(course => course.id === 10))
    });
  })

  describe('savePost', () => {
    it('should save the post', () => {
      const changes: Partial<Post> = {title: 'hello'}
      service.savePost(10, changes).subscribe(
        post => {
          expect(post.title).toBe(changes.title)
        }
      )
      const request = http.expectOne('https://jsonplaceholder.typicode.com/posts/10')
      expect(request.request.method).toEqual('PUT')
      request.flush({
        ...posts.find(course => course.id === 10),
        title: changes.title
      })
    })

    it('should throw an error if save post is failed', () => {
      const changes: Partial<Post> = {title: 'hello'}
      service.savePost(11, changes).subscribe(
        () => {
          fail('operation failed')
        },
        (error: HttpErrorResponse) => {
          expect(error.status).toBe(500)
        }
      )
      const request = http.expectOne('https://jsonplaceholder.typicode.com/posts/11')
      expect(request.request.method).toEqual('PUT')
      request.flush(null, {status: 500, statusText: 'Internal server error'})
    })
  })
});
