import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-contents',
  imports: [RouterLink],
  templateUrl: './contents.html',
  styleUrl: './contents.css',
})
export class Contents {
  photoCover: string = '';
  contentTitle: string = 'MINHA NOTÍCIA';
  contentDescription: string = 'Descrição da minha notícia';
  private id: string | null = '0';

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.route.paramMap.subscribe(value => 
      this.id = value.get('id'));
    
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null){
    const result = dataFake.filter(article => article.id == id)[0];
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
  }
}
