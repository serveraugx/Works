import { Component } from '@angular/core';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  isMenuOpen = false;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }}
