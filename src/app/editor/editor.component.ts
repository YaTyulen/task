import { Component } from '@angular/core';
import {Node} from '../models'
import {NodesService} from '../nodesService/nodes.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {

  node: Node = {id: -1, text: "", time: ""};
  nodes: Node[];

  constructor(private nodesService: NodesService){
    this.nodes = nodesService.getNodes();
  }

  createNode(node : Node){
    if(node.text != ""){
      this.nodesService.addNode(node.text);
      this.nodes = this.nodesService.getNodes();
      console.log(this.nodes); //для отладки, потом убрать
    }
  }


}
