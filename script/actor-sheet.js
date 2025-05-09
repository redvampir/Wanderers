// Импорт файлов

import { WanderersActorCore } from "./actor/core.js";
import { WanderersActorFeatures } from "./actor/features.js";
import { WanderersActorInventory } from "./actor/inventory.js";

export class WanderersActorSheet extends ActorSheet {
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        template: "systems/wanderers/templates/actor/core-sheet.html",
        tabs: [
          { navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "core" }
        ]
      });
    }
  
    getData() {
      const data = super.getData();
      // Объединяем данные из всех компонентов
      data.core = this.actor.system.core; // Характеристики
      data.features = this.actor.system.features; // Черты
      data.inventory = this.actor.system.inventory; // Инвентарь
      return data;
    }
  }