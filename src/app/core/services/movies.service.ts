import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Movies } from "../models/movies";
import { ApiService } from "./api.service";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  movieListSuject = new BehaviorSubject([]);
  movieList = this.movieListSuject.asObservable();

  constructor(private api: ApiService) {}

  layDanhSachPhim(): Observable<Movies[]> {
    const url = "QuanLyPhim/LayDanhSachPhim";

    return this.api.get<Movies[]>(url).pipe(
      tap((result) => {
        this.movieListSuject.next(result);
      })
    );
  }

  layDanhSachPhimPhanTrang(
    soTrang = 1,
    soPhanTuTrenTrang = 5
  ): Observable<any> {
    return this.api.get(
      `QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}`
    );
  }

  layChiTietPhim(maPhim: string): Observable<any> {
    const url = `QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`;

    return this.api.get(url);
  }
  themPhim(value: any) {
    const url = "QuanLyPhim/ThemPhimUploadHinh";
    const obj = {
      ...value,
      maNhom: "GP01",
    };
    //bởi vì ọn có 1 key la file nên phải sử dụng đối tượng FormData
    const formData = new FormData();

    for (let key in obj) {
      formData.append(key, obj[key]);
    }

    // return this.api.post(url, {  ...value,
    //   maNhom: "GP01",});
    return this.api.post(url, formData);
  }
}
