import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarItem:Array<any>=[
    { name: 'Caisse', link: '/caisse' },
    { name: 'Factures', link:'/facture'},
    { name: 'Produits', link:'/produit'},
    { name: 'Clients', link:'/client'},
    { name: 'Fournisseurs', link:'/fournisseur'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
