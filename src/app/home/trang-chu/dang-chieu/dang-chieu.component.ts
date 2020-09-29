import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service'
import { Movies } from 'src/app/core/models/movies';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-dang-chieu',
  templateUrl: './dang-chieu.component.html',
  styleUrls: ['./dang-chieu.component.scss']
})
export class DangChieuComponent implements OnInit {

  danhSachPhim: Movies[];
  loading: boolean = false;
  error: boolean = false;

  constructor(private movieService: MoviesService) { }

  // Tương đương componentDidMount bên React
  ngOnInit(): void {
    this.loading = true;
    
    this.movieService.layDanhSachPhim().subscribe({
      next: (result) => {
        this.danhSachPhim = result;
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.error = true;
        this.loading = false;
      }
    });
    this.movieService.movieList.subscribe({
      next: (result) => {
        this.danhSachPhim = result;
      }
    })
  }
  customOptions: OwlOptions = {
    // autoWidth: true,
    loop: true,
    // items: '10',
    // margin: 10,
    // slideBy: 'page',
    // merge: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
		autoplaySpeed: 2000,
    dotsSpeed: 500,
    autoplayMouseleaveTimeout: 5000,
    // dots: false,
    // dotsData: true,
    // mouseDrag: false,
    // touchDrag: false,
    // pullDrag: false,
    smartSpeed: 400,
    // fluidSpeed: 499,
    dragEndSpeed: 350,
    // dotsEach: 4,
    // center: true,
    // rewind: true,
    // rtl: true,
    // startPosition: 1,
    // navText: [ '<i class=fa-chevron-left>left</i>', '<i class=fa-chevron-right>right</i>' ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 3
      }
    },
    // stagePadding: 40,
    nav: true
  }
}
