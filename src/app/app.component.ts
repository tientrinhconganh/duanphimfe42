import { Route } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html", // link tới file html, code UI
  styleUrls: ["./app.component.scss"], // link tới files css/scss, code style
})
// Nơi code logic
export class AppComponent implements OnInit {
  constructor(private title: Title, private router: Router) {
    //theo sự thay đổi url
    this.router.events.subscribe({
      next: (event) => {
        //kiểm tra xem hiện chuyển trang thành công chưa
        if (event instanceof NavigationEnd) {
          const title = this.getTitle(
            router.routerState,
            router.routerState.root
          ).join("-");
          this.title.setTitle(title);
        }
      },
    });
  }

  getTitle(state, parent) {
    var data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }
    if (state && parent) {
      data.push(...this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  ngOnInit() {}
}
