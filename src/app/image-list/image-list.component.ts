// image-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[] = [];

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
