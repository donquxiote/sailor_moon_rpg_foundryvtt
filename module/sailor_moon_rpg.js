// Import Modules
import { SailorMoonRPGActor } from "./actor/actor.js";
import { SailorMoonRPGActorSheet } from "./actor/actor-sheet.js";
import { SailorMoonRPGItem } from "./item/item.js";
import { SailorMoonRPGItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function() {

  game.sailor_moon_rpg = {
    SailorMoonRPGActor,
    SailorMoonRPGItem
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20",
    decimals: 2
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = SailorMoonRPGActor;
  CONFIG.Item.entityClass = SailorMoonRPGItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("sailor_moon_rpg", SailorMoonRPGActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("sailor_moon_rpg", SailorMoonRPGItemSheet, { makeDefault: true });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });
});