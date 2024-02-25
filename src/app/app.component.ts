import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  loadedFeature='recipe';

onNavigate(feature:string){
this.loadedFeature = feature;
}
/*
  serverElements= [{type:'server', name: 'servername', content:'just a test' }];


  onAddedServer(serverData:{serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }


  onAddedBlueprint(blueprintData:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });


  }
*/

}


