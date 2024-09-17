import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent implements OnInit{
  @Input() videoUrls: string[] = ['https://youtu.be/TND5SHUG3x4'];
  embedUrls: string[] = [];

  ngOnInit(): void {
    this.embedUrls = this.videoUrls.map(url => this.convertToEmbedUrl(url));
  }

  // Converts standard YouTube URLs to embeddable URLs
  private convertToEmbedUrl(url: string): string {
    const videoId = url.split('youtu.be/')[1] || url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }

}
