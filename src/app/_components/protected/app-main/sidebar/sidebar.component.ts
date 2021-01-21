import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarItem:Array<any>=[
    { name: 'Caisse', link: '/caisse', icon:'bi bi-cash' },
    { name: 'Factures', link:'/facture', icon:'bi bi-file-earmark-text'},
    { name: 'Produits', link:'/produit', icon:'bi bi-cart4'},
    { name: 'Clients', link:'/client', icon:'bi bi-people'},
    { name: 'Fournisseurs', link:'/fournisseur', icon:'bi bi-shop'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
