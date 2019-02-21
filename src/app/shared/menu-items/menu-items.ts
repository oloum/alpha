import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'starter', name: 'Tableau de bord', type: 'link', icon: 'av_timer' },
  {
    state: 'gestionUser',
    type: 'link',
    name: 'Gestion utilisateurs',
    icon: 'border_horizontal'
  },
  { state: 'gestionProfil', type: 'link', name: 'Gestion des profils', icon: 'settings' },
  { state: 'saisi', type: 'link', name: 'Saisi document', icon: 'web' },
  { state: 'list', type: 'link', name: 'Liste des documents', icon: 'view_comfy' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
