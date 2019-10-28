import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EstabelecimentoService } from '../services/estabelecimento.service';

@Component({
  selector: 'app-edit-estabelecimento',
  templateUrl: './edit-estabelecimento.component.html',
  styleUrls: ['./edit-estabelecimento.component.css']
})
export class EditEstabelecimentoComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  estabelecimento: any = [];
  model: any = {};

  constructor(    
    public estabelecimentoService: EstabelecimentoService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.loadEestabelecimento();
  }

  loadEestabelecimento() {
    return this.estabelecimentoService.getEstabelecimentoById(this.id).subscribe((data: {}) => {
      this.estabelecimento = data;
    });
  }

  onClickSubmit() {
    this.estabelecimentoService.putEstabelecimento(this.id, this.model).subscribe((data: {}) => {
      this.router.navigate(['home'])
    })
  }

}
