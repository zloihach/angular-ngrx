import {IConfig} from "../../model/config/config.interface";

export interface IConfigState{
  config: IConfig;
}

export const initialConfigState: IConfigState = {
  config: void 0 as any,
}
