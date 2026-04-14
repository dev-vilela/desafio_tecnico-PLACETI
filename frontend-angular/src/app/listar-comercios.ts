import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetoService } from '@service/projeto-service';
import { ImportsModule } from './imports';
import { Router } from '@angular/router';

@Component({
  selector: 'listar-comercios',
  templateUrl: './listar-comercios.html',
  standalone: true,
  imports: [ImportsModule]
})
export class ListarComercios implements OnInit {

  cidadeId!: number;
  listaComercios: any[] = [];

constructor(
  private route: ActivatedRoute,
  private service: ProjetoService,
  private router: Router
) {}


ngOnInit(): void {
  this.cidadeId = Number(this.route.snapshot.params['cidadeId']); 
  this.buscarComercios(); 
}  

buscarComercios() {
  this.service.listarComercios().subscribe(dados => {
    this.listaComercios = dados.filter(c => c.cidade?.id === this.cidadeId);
  });
}


voltar() {
  this.router.navigate(['/']);
}
}