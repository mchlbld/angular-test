import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {
  public static A = 'a';
  public static B = StorageServiceService.A + 'b';
  public static C = StorageServiceService.A + 'c';

  constructor() { }
}
