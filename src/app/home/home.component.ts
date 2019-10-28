import { Component, OnInit } from '@angular/core';
import { EstabelecimentoService } from '../services/estabelecimento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  Estabelecimento: any = [];
  
  constructor(public estabRest: EstabelecimentoService) { }

  ngOnInit() {
    this.loadEestabelecimento();
  }

  loadEestabelecimento() {
    return this.estabRest.getEstabelecimento().subscribe((data: {}) => {
      this.Estabelecimento = data;
    })
  }

}
