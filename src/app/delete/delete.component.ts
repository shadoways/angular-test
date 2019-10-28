import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EstabelecimentoService } from '../services/estabelecimento.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  estabelecimento: any = [];

  constructor(
    public estabelecimentoService: EstabelecimentoService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.deletedEestabelecimento();
  }

  deletedEestabelecimento() {
    return this.estabelecimentoService.deleteEstabelecimento(this.id).subscribe((data: {}) => {
      this.router.navigate(['home']);
    });
  }

}
