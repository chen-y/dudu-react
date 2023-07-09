export interface PortDesc {
  supportNodes: string[];
}

export interface Choice {
  value: string;
  label: string;
}

export interface ParameterDesc {
  type: string; // 参数类型

  choices: Choice[];

  defaultValue?: any; // 默认参数

  required?: boolean;
}

export interface OperatorDesc {
  type: string; // 节点类型

  name?: string; // 节点名称

  params?: ParameterDesc[]; // 节点可用参数

  doc?: string; // 说明文档

  tip?: string; // 说明提示
}

export interface OpPortDesc {
  id: string;
}

export interface OpDesc {
  desc: OperatorDesc;
  id: string;
  x: number;
  y: number;
  inPorts?: OpPortDesc[];
  outPorts?: OpPortDesc[];
}

export interface ConnectionDesc {
  startOpId: string;
  startOpPortId: string;
  endOpId: string;
  endOpPortId: string;
}

export interface FlowDesc {
  ops?: OpDesc[];
  connections?: ConnectionDesc[];
}
