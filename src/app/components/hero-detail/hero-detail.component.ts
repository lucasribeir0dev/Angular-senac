import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  heroiId: number = 0;

  // Injetamos o ActivatedRoute (para ler a URL) e o Router (para navegar via código)
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // 1. Tira uma 'fotografia' estática da URL ativa
    const idParam = this.route.snapshot.paramMap.get('id');
    // 2. Converte a string da URL para número
    this.heroiId = Number(idParam);
  }

  // 3. Método para voltar à lista programaticamente
  voltar(): void {
    this.router.navigate(['/herois']);
  }
}
