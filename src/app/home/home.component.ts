import { Component, EventEmitter, Output } from '@angular/core';
import {Node} from '../models';
import {NodesService} from '../nodesService/nodes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //@Output() outEnterNode = new EventEmitter<string>()

  nodes: Node[];
  textNode = document.getElementById('textNode');

  constructor(private nodesService: NodesService, private router: Router){
    this.nodes = nodesService.getNodes();
  }

  deleteNode(node: Node){
    if(confirm('Вы действительно ходите удалить эту запись?')){
      this.nodesService.deleteNode(node.id);
      this.nodes = this.nodesService.getNodes();
    }
  }

  changer(node: Node){
    this.nodesService.editNode(node);
    this.router.navigate(['/changer']);
  }

  /*enterNode(node: HTMLTextAreaElement){
    console.log('Значение', node.value) //убрать после отладки
    this.outEnterNode.emit(node.value)
    this.router.navigate(['/changer']);
  }*/

}
