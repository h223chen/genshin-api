module.exports = {
  definition: `
      type CharacterQuery{
        id: ID!
        created_at: DateTime!
        updated_at: DateTime!
        name: String!
        description: String!
        element: ENUM_CHARACTER_ELEMENT!
        skill: [ComponentSkillsSkill]
        passive: [ComponentSkillsPassive]
        constellation: [ComponentSkillsConstellation]
        Title: String
        rarity: Int!
        weapon: ENUM_CHARACTER_WEAPON!
        published_at: DateTime
      }
    `,
  query: `
      characters_by_element(element: ENUM_CHARACTER_ELEMENT!): [Character]
      character_by_name(name: String!): Character
    `,
  type: {
    Character: false, // so original type won't be queriable
  },
  resolver: {
    Query: {
      characters_by_element: {
        description: "Return characters by element",
        resolver: "character.findByElement", // It will use the action `findOne` located in the `character.js` controller.
      },
      character_by_name: {
        description: "Return a single character by name",
        resolver: "character.findByName", // It will use the action `findOne` located in the `character.js` controller.
      },
    },
  },
};
