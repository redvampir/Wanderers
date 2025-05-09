export class WanderersActorFeatures {
    static defineSchema() {
      const fields = foundry.data.fields;
      return {
        traits: new fields.ArrayField(
          new fields.StringField({ choices: ["Устойчивость", "Решительность"] })
        ),
        perks: new fields.ArrayField(
          new fields.SchemaField({
            name: new fields.StringField(),
            description: new fields.StringField()
          })
        )
      };
    }
  
    // Добавление новой черты
    addTrait(trait) {
      this.traits.push(trait);
    }
  }
  