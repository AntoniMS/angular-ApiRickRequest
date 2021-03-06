import { Component, OnInit } from '@angular/core';
import { CharacterInterface, CharacterResponseInterface } from './models/character.interface'
import { RequestExampleService } from './services/request-example.service';

@Component({
  selector: 'app-request-example',
  templateUrl: './request-example.component.html',
  styleUrls: ['./request-example.component.scss']
})
export class RequestExampleComponent implements OnInit {
  // declaramos la variable donde almacenamos nuestro resultado
  public characterList: CharacterInterface[] = [];

  // Llamamos a nuestro servicio o inicializamos servicio
  constructor(private requestExampleService: RequestExampleService) {}
  
  // Al arrancar nuestra aplicación:
  ngOnInit() {
    // Utilizamos la función getCharacters para guardar nuestros resultados:
    
    this.requestExampleService.getCharacters()
    .subscribe((data: CharacterResponseInterface) => {
      const results: CharacterInterface[] = data.results;
      const formattedResults = results.map(({ id, name,status, image }) => ({
        id,
        name,
        status,
        image,
      }));
      this.characterList = formattedResults;
    });
  }
}