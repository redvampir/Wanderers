import { WanderersActorSheet } from "./documents/actor-sheet.js";

Hooks.once("init", () => {
  Actors.registerSheet("wanderers", WanderersActorSheet, {
    types: ["character"], // Привязка к типу "персонаж"
    makeDefault: true
  });
});