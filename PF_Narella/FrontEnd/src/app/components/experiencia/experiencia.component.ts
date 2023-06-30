import { Component } from '@angular/core';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experiencia: ExperienciaComponent[] = [];

  constructor (private sExperiencia: SExperienciaService, private tokenService: TokenService) {}
   
  isLogged = false;

  ngOnInit(): void {

    
  }

}
