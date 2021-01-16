import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-features',
  templateUrl: './home-features.component.html',
  styleUrls: ['./home-features.component.scss']
})
export class HomeFeaturesComponent implements OnInit {
  features;

  constructor() { }

  ngOnInit(): void {
    this.features=[
      {
        title: 'Créer',
        description: 'factures, clients, produits',
        icon: 'assets/img/create.png'
      },
      {
        title: 'Exporter',
        description: 'factures, clients, produits',
        icon: 'assets/img/send.png'
      },
      {
        title: 'Modifier',
        description: 'factures, clients, produits',
        icon: 'assets/img/pencil.png'
      },
      {
        title: 'Analyser',
        description: 'factures, clients, produits',
        icon: 'assets/img/report.png'
      }
    ];
  }

}
