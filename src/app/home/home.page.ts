
import { Component, OnInit } from '@angular/core';
import { RickandmortyapiService } from '../services/rickandmortyapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  characters: any[] = [];
  selectedCharacterEpisodes: any[] = [];
  selectedCharacterName: string = '';
  showEpisodes: boolean = false;

  constructor(private rickandmortyService: RickandmortyapiService) {}

  ngOnInit() {
    this.rickandmortyService.getCharacters().subscribe(response => {
      this.characters = response.results;
    });
  }

  onCharacterNameClick(character: any) {
    this.selectedCharacterName = character.name;
    this.rickandmortyService.getEpisodes(character.episode).subscribe(episodes => {
      this.selectedCharacterEpisodes = Array.isArray(episodes) ? episodes : [episodes];
      this.showEpisodes = true;
    });
  }

  onBackClick() {
    this.showEpisodes = false;
    this.selectedCharacterEpisodes = [];
    this.selectedCharacterName = '';
  }
}
