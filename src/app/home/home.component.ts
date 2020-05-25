import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    focus;
    focus1;
    validaorAddress = 'one1leh5rmuclw5u68gw07d86kqxjd69zuny3h23c3';

    qrcodename : string = '';
    title = 'generate-qrcode';
    elementType: 'url' | 'canvas' | 'img' = 'url';
    value: string;
    display = false;
    href : string;
    qrCodeText = '';

    generateQRCode(){
        if(this.qrcodename == ''){
            alert("Please enter your Address to generate QR Code");
            return;
        }
        else {
            this.qrCodeText = this.qrcodename;                        
        }
  }

  downloadImage(){
    this.href = document.getElementsByTagName('img')[0].src;
  }
    constructor() {
        this.qrCodeText = '';
     }

    ngOnInit() {}
}
