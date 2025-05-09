export class WanderersActorInventory {
    static defineSchema() {
      const fields = foundry.data.fields;
      return {
        items: new fields.ArrayField(
          new fields.SchemaField({
            name: new fields.StringField(),
            type: new fields.StringField({ choices: ["weapon", "armor", "consumable"] }),
            quantity: new fields.NumberField({ min: 1, initial: 1 })
          })
        ),
        money: new fields.NumberField({ min: 0, initial: 0 })
      };
    }
  
    // Удаление предмета
    removeItem(index) {
      this.items.splice(index, 1);
    }
  }