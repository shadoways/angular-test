import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EstabelecimentoService } from '../services/estabelecimento.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  model: any = {};


  constructor(    
    public estabelecimento: EstabelecimentoService, 
    public router: Router) { }

  ngOnInit() {
  }

  onClickSubmit() {
    this.estabelecimento.postEstabelecimento(this.model).subscribe((data: {}) => {
      this.router.navigate(['home'])
    })
  }

}
