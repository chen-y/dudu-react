interface PortDesc {
  supportNodes: string[];
}

interface Choice {
  value: string;
  label: string;
}

interface ParameterDesc {
  type: string; // 参数类型

  choices: Choice[];

  defaultValue?: any; // 默认参数

  required?: boolean;
}

interface NodeDesc {
  type: string; // 节点类型

  name: string; // 节点名称

  params: ParameterDesc[]; // 节点可用参数

  doc: string; // 说明文档

  tip: string; // 说明提示
}

class Port {
  parentNode: FlowNode;
  

  supportNodes: FlowNode[];
}

class InPort extends Port {
}

class OutPort extends Port {
}


class FlowNode {
  desc: NodeDesc;
}

class Edge {
  startNodePort?: OutPort;

  endNodePOrt?: InPort;
}

class Flow {

  nodes: FlowNode[];

  edges: Edge[];
}
