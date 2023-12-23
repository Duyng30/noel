import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'noel';
  public step = 1;
  public imageTime = 0;

  public ngOnInit(): void {

  }

  public startImageTimeCounter() {
    setInterval(() => {
      this.imageTime += 1;
      console.log(this.imageTime);

      // Hiển thị hình ảnh tương ứng với imageTime
      if (this.imageTime <= 3) {
      }
    }, 3000);
  }

  public changeStep(): void{
    this.step += 1;
    if (this.step === 3) {
      setTimeout(() => {
        this.startImageTimeCounter();
      }, 1000);
    }
  }

  public onKeyDown(event: KeyboardEvent) {
    console.log(event);

    // Kiểm tra mã phím của các nút mũi tên
    switch (event.key) {
      case 'ArrowUp':
        console.log('Bấm nút mũi tên lên');
        // Xử lý logic khi bấm nút mũi tên lên
        break;
      case 'ArrowDown':
        console.log('Bấm nút mũi tên xuống');
        // Xử lý logic khi bấm nút mũi tên xuống
        break;
      case 'ArrowLeft':
        console.log('Bấm nút mũi tên trái');
        // Xử lý logic khi bấm nút mũi tên trái
        break;
      case 'ArrowRight':
        console.log('Bấm nút mũi tên phải');
        // Xử lý logic khi bấm nút mũi tên phải
        break;
      default:
        // Xử lý khi bấm các phím khác ngoài nút mũi tên
        break;
    }
  }
}

