
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { documentsSharp, documentsOutline, languageSharp , languageOutline, addSharp, addOutline, homeSharp, homeOutline, accessibilityOutline, accessibilitySharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Pagina Inicial', url: '/inicio/', icon: 'home' },
    { title: 'Sumadora', url: '/suma', icon: 'add' },
    { title: 'Traductor', url: '/traductor', icon: 'language' },
    { title: 'Tabla de Multiplicar', url: '/tabla', icon: 'documents' },
    { title: 'Experiencia Personal', url: '/experiencia', icon: 'accessibility' },
  ];
  
  constructor() {
    addIcons({ documentsOutline, documentsSharp, languageOutline, languageSharp, addSharp, addOutline,  homeSharp, homeOutline, accessibilityOutline, accessibilitySharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
}
