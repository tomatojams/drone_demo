// state.js
import { atom } from "recoil";

export const selectedDroneState = atom({
  key: "selectedDroneState", // 고유한 ID
  default: "64:60:1f:7a:b0:5e", // 기본 상태 값
});

export const userNameState = atom({
  key: "userName",
  default: null,
});
