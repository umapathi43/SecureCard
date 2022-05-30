import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class BranchService {
  constructor(private http: ApiService) {}
  getBranchs(): Observable<any> {
    return this.http.get("AccountSetup/getBranchDetails");
  }

  addBranch(data: any): Observable<any> {
    return this.http.post("AccountSetup/BranchCreate/Branch", data);
  }

  getBranchById(data): Observable<any> {
    return this.http.get("AccountSetup/getBranch/" + data.id);
  }
  deleteBranchById(data): Observable<any> {
    return this.http.delete("AccountSetup/deleteBranch/" + data.id);
  }

  updateBranch(data: any): Observable<any> {
    return this.http.put("AccountSetup/updateBranch/" + data.id, data);
  }
}
