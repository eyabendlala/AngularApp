// image-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  imageId!: number;
  image: any;

  constructor(private route: ActivatedRoute, private imageService: ImageService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.imageId = +params['id'];
      this.loadImageDetails(this.imageId);
    });
  }

  loadImageDetails(id: number) {
    this.imageService.getImageInfoById(id).subscribe((image: any) => {
      this.image = image;
    });
  }
}
