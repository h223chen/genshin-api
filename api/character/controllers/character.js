"use strict";
const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findByElement(ctx) {
    const element = ctx.params._element;

    let entities;
    entities = await strapi.services.character.find({ element });

    entities.map((entity) => {
      const sanitized = sanitizeEntity(entity, {
        model: strapi.models.character,
      });

      return sanitized;
    });

    return entities;
  },
  async findByName(ctx) {
    const name = ctx.params._name;

    const entity = await strapi.services.character.findOne({ name });
    return sanitizeEntity(entity, { model: strapi.models.character });
  },
};
