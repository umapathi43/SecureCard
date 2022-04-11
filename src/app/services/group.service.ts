import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class GroupService {
  constructor(private http: ApiService) {}
  getGroups(): Observable<any> {
    return this.http.get("AccountSetup/getGroupDetails");
  }

  addGroup(data: any): Observable<any> {
    return this.http.post("AccountSetup/GroupCreate/Group", data);
  }

  bluckAddGroup(data: any): Observable<any> {
    return this.http.post("AccountSetup/GroupCreate/bulk", data);
  }

  getGroupById(data): Observable<any> {
    return this.http.get("AccountSetup/getGroup/" + data.id);
  }
  deleteGroupById(data): Observable<any> {
    return this.http.delete("AccountSetup/deleteGroup/" + data.id);
  }

  updateGroup(data: any): Observable<any> {
    return this.http.put("AccountSetup/updateGroup/" + data.id, data);
  }
}
