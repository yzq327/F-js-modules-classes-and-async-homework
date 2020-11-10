import { ADDRESS, PORT, PATH, REGION } from "./constant";

export function getURL() {
  return `${ADDRESS}:${PORT}${PATH}`;
}
export function getREGION() {
  return REGION;
}
