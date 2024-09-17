import { Component, OnInit ,ChangeDetectorRef, NgZone} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  images: string[] = [
    // '../../assets/Ngalawa-Ausiy.png',  // Ensure the paths are correct
    // '../../assets/Tumekuja-Nasr-Daudi.png',
    '../../assets/kuenstler-mohamed-hamza-ausiy-asante-sanaa-zanzibar-tanzania-artist.jpg',
    // '../../assets/kuenstler-mohamed-hamza-ausiy-pinsel-brush-farbe-colour-painting-zanzibar.jpg',
  ];
  currentSlide: number = 0;
  private slideInterval: any;

  constructor(private cdr: ChangeDetectorRef, private zone: NgZone) {}

  ngOnInit(): void {
    this.startAutoSlide();
  }

  changeSlide(step: number): void {
    this.currentSlide = (this.currentSlide + step + this.images.length) % this.images.length;
    this.cdr.detectChanges(); // Ensure change detection
  }

  setSlide(index: number): void {
    this.currentSlide = index;
    this.cdr.detectChanges();
  }

  startAutoSlide(): void {
    // Use NgZone to run interval inside Angular's zone
    this.zone.runOutsideAngular(() => {
      this.slideInterval = setInterval(() => {
        // Run inside Angular's zone to ensure change detection
        this.zone.run(() => {
          this.changeSlide(1);
        });
      }, 5000); // Slide every 5 seconds
    });
  }

  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval); // Clear interval on destroy
    }
  }
}
