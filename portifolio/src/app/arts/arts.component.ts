import { Component } from '@angular/core';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrl: './arts.component.css'
})
export class ArtsComponent {
  artworks: Artwork[] = [
    // Sample data; replace with real data fetched from a service
    {
      title: 'Ocean Wave',
      year: '2023',
      materials: 'Oil on Canvas',
      dimensions: '24x36 inches',
      image: '../../assets/z.png',
      purchaseLink: 'https://purchase-link.com',
      category: 'Nature',
      medium: 'Oil'
    }
   
   
    // Add more artworks here
  ];

  selectedArtwork: Artwork | null = null;
  searchTerm = '';
  selectedCategory = '';
  selectedMedium = '';
  selectedYear = '';

  categories = ['Nature', 'Abstract', 'Portrait'];
  mediums = ['Oil', 'Acrylic', 'Watercolor'];
  years = ['2020', '2021', '2022', '2023'];

  // Filter artworks based on search and selected filters
  filteredArtworks(): Artwork[] {
    return this.artworks.filter((artwork) => {
      const matchesSearch =
        !this.searchTerm || artwork.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = !this.selectedCategory || artwork.category === this.selectedCategory;
      const matchesMedium = !this.selectedMedium || artwork.medium === this.selectedMedium;
      const matchesYear = !this.selectedYear || artwork.year === this.selectedYear;
      return matchesSearch && matchesCategory && matchesMedium && matchesYear;
    });
  }

  openLightbox(artwork: Artwork): void {
    this.selectedArtwork = artwork;
  }

  closeLightbox(): void {
    this.selectedArtwork = null;
  }

  purchaseArtwork(): void {
    this.sendWhatsAppMessage(this.selectedArtwork as Artwork);
  }
  sendWhatsAppMessage(artwork: Artwork) {
    const phoneNumber = '+255777948912'; // Your WhatsApp number
    const message = `Hello, I am interested in purchasing the artwork titled "${artwork.title}".\n\nDetails:\n- Year: ${artwork.year}\n- Materials: ${artwork.materials}\n- Dimensions: ${artwork.dimensions}\n\nPlease let me know how to proceed.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

}
interface Artwork {
  title: string;
  year: string;
  materials: string;
  dimensions: string;
  image: string;
  purchaseLink?: string;
  category: string;
  medium: string;
}