import { AuthService } from "../../shared/auth/auth.service";
import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: "root",
})
export class CommonService {
  userToken: any;
  constructor(private http: ApiService, public auth: AuthService, public datePipe: DatePipe) {
    this.userToken = this.auth.forLocalstorage();
  }
  dateformat(action) {
    if (action && Array.isArray(action) && action.length > 0) {
      let val = action.join('-')
      return this.datePipe.transform(val, 'yyyy-MM-dd');
    }
  }

  expiryFormat(event) {
    var inputChar = String.fromCharCode(event.keyCode);
    var code = event.keyCode;
    var allowedKeys = [8];
    if (allowedKeys.indexOf(code) !== -1) {
      return;
    }

    return event.target.value = event.target.value.replace(
      /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
    ).replace(
      /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
    ).replace(
      /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
    ).replace(
      /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
    ).replace(
      /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
    ).replace(
      /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
    ).replace(
      /\/\//g, '/' // Prevent entering more than 1 `/`
    );
  }
  yearValue(action) {
    let val = action.split('/');
    if (val[1].length == 2) {
      return action.expiryDate.substring(0, 3) + "20" + action.expiryDate.substring(3, action.expiryDate.length);
    } else {
      return action.expiryDate.substring(0, 3) + "200" + action.expiryDate.substring(3, action.expiryDate.length);
    }
  }
}