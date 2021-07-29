interface IUrl {
  title: string;
  url: string;
}

interface IAction {
  title: string;
  method: string;
  url: string;
  body: any;
}

export interface ISabioAnswer {
  sessionId: string;
  title: string;
  detail: string;
  intent: string;
  imageUrl?: string;
  urls?: [IUrl];
  actions?: [IAction];
}
