// image-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css']
})
export class ElementListComponent implements OnInit {
  images: any[] = [];
  filterText: string = '';

  

  constructor(private imageService: ImageService, private router: Router) {}

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages() {
    this.imageService.getImageInfoById(0).subscribe((image: any) => {
      this.images.push(image);
    });
  }

  navigateToImageDetail(id: number) {
    this.router.navigate(['image', id]);
  }
}
