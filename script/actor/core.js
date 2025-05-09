export class WanderersActorCore {
    static defineSchema() {
      const fields = foundry.data.fields;
      return {
        // Основные параметры
        bodyParameters: new fields.SchemaField({
          strength: new fields.NumberField({ min: -5, max: 10, initial: 0 }),//сила
          dexterity: new fields.NumberField({ min: -5, max: 10, initial: 0 }),//ловкость
          coordination: new fields.NumberField({ min: -5, max: 10, initial: 0 }),//координация

          // ... другие статы, переделать вариант здоровья
        }),
        health: new fields.SchemaField({
          current: new fields.NumberField({ min: 0, initial: 10 }),
          max: new fields.NumberField({ min: 1, initial: 10 })
        })
      };
    }
  
    // Метод для броска проверки характеристики
    rollAttribute(attr) {
      const value = this.attributes[attr];
      const roll = new Roll(`1d20 + ${value}`).evaluate();
      return roll.toMessage({ flavor: `Проверка ${attr}` });
    }
  }