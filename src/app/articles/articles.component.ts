import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles = [];
  constructor() { 
    this.articles[0] = {
      "title" : "Formation of the Community Node!",
      "desc" : "This is a Public Service Announcement.  A group of Harmonauts are banding together, to beat back the rise of centralization on Harmony.",
      "img" : "https://miro.medium.com/max/500/1*nY8r-cm0vCSKJLHBauBoYA.jpeg",
      "link" : "https://medium.com/@ogreabroad/formation-of-the-harmony-community-node-f4ef823d2b85"
    };
    this.articles[1] = {
      "title" : "Wonder Twins, Unite!” by OgreAbroad",
      "desc" : "It is absolutely amazing that the much-anticipated launch of Harmony Protocol’s Open Staking on a Sharded Mainnet is here!",
      "img" : "https://miro.medium.com/max/1400/1*CmDHSqyOD1UWGbapFNAMtw.jpeg",
      "link" : "https://link.medium.com/cL66i6zIv6"
    };
  }

  ngOnInit(): void {
  }

}
