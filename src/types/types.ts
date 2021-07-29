interface Url {
  title: string;
  url: string;
}

interface Action {
  title: string;
  method: string;
  url: string;
  body: any;
}

export interface SabioAnswer {
  sessionId: string;
  title: string;
  detail: string;
  intent: string;
  imageUrl?: string;
  urls?: [Url];
  actions?: [Action];
}
