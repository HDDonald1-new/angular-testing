import { TestBed } from '@angular/core/testing';
import { LoggerService } from '../logger/logger.service';
import { NumberService } from './number.service';

describe('NumberService', () => {
  let service: NumberService
  let logger: any

  beforeEach(() => {
      logger = jasmine.createSpyObj('LoggerService', ['log'])
      TestBed.configureTestingModule({
        providers: [
          NumberService,
          {provide: LoggerService, useValue: logger}
        ]
      })
      service = TestBed.inject(NumberService)
    })
  
  it('should add two numbers', () => {
    const result = service.add(1, 2)

    expect(result).toBe(3)
    expect(logger.log).toHaveBeenCalledTimes(1)
  })

  it('should subtract two numbers', () => {
    const result = service.subtract(3, 1)

    expect(result).toBe(2)
  })
});
