import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css'
})
export class HeroListComponent {
  heroiDestaque: string = 'Homem De Ferro';
  universo: string = 'Marvel';

  estaDesabilitado: boolean = false;
  dicaTooltip: string = 'Clique aqui para alterar o status dp herói'


  ativo: boolean = true;

  alternarStatus(): void {
    this.ativo = !this.ativo;
  }

  equipe: string[] = ['Homem de Ferro', 'Batman', 'Tempestade', 'Sentinela', 'Tocha Humana'];
}