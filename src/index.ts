import { getObject } from "./processer";

// @ts-ignore
const config = hexo.config;

// @ts-ignore
hexo.extend.tag.register("config", (x: any) => {
  const keys: Array<string> = x.toString().split(".");
  const depth: number = keys.length - 1;
  return getObject(config, 0, depth, keys);
}, {async: true});
