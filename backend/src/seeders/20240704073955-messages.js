"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("messages", [
      {
        id: 191,
        content: "hello",
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:42:00.719Z",
        updated_at: "2024-07-04T05:42:00.719Z",
      },
      {
        id: 130,
        content: "gasdgdags",
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:59.822Z",
        updated_at: "2024-07-04T05:02:59.822Z",
      },
      {
        id: 129,
        content: "gsdagsa",
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:55.165Z",
        updated_at: "2024-07-04T05:02:55.165Z",
      },
      {
        id: 128,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:24.980Z",
        updated_at: "2024-07-04T05:02:24.980Z",
      },
      {
        id: 127,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:24.200Z",
        updated_at: "2024-07-04T05:02:24.200Z",
      },
      {
        id: 126,
        content:
          'vconst messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:23.719Z",
        updated_at: "2024-07-04T05:02:23.719Z",
      },
      {
        id: 125,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:22.433Z",
        updated_at: "2024-07-04T05:02:22.433Z",
      },
      {
        id: 124,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:22.023Z",
        updated_at: "2024-07-04T05:02:22.023Z",
      },
      {
        id: 123,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:21.640Z",
        updated_at: "2024-07-04T05:02:21.640Z",
      },
      {
        id: 122,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:21.229Z",
        updated_at: "2024-07-04T05:02:21.229Z",
      },
      {
        id: 121,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:20.842Z",
        updated_at: "2024-07-04T05:02:20.842Z",
      },
      {
        id: 120,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:20.470Z",
        updated_at: "2024-07-04T05:02:20.470Z",
      },
      {
        id: 119,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:20.089Z",
        updated_at: "2024-07-04T05:02:20.089Z",
      },
      {
        id: 118,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:19.592Z",
        updated_at: "2024-07-04T05:02:19.592Z",
      },
      {
        id: 117,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:18.595Z",
        updated_at: "2024-07-04T05:02:18.595Z",
      },
      {
        id: 116,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:18.190Z",
        updated_at: "2024-07-04T05:02:18.190Z",
      },
      {
        id: 115,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:17.754Z",
        updated_at: "2024-07-04T05:02:17.754Z",
      },
      {
        id: 114,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:17.369Z",
        updated_at: "2024-07-04T05:02:17.369Z",
      },
      {
        id: 113,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:16.932Z",
        updated_at: "2024-07-04T05:02:16.932Z",
      },
      {
        id: 112,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:15.962Z",
        updated_at: "2024-07-04T05:02:15.962Z",
      },
      {
        id: 111,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:15.544Z",
        updated_at: "2024-07-04T05:02:15.544Z",
      },
      {
        id: 110,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:15.109Z",
        updated_at: "2024-07-04T05:02:15.109Z",
      },
      {
        id: 109,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:14.644Z",
        updated_at: "2024-07-04T05:02:14.644Z",
      },
      {
        id: 108,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:14.187Z",
        updated_at: "2024-07-04T05:02:14.187Z",
      },
      {
        id: 107,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:13.747Z",
        updated_at: "2024-07-04T05:02:13.747Z",
      },
      {
        id: 106,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:13.294Z",
        updated_at: "2024-07-04T05:02:13.294Z",
      },
      {
        id: 105,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:12.867Z",
        updated_at: "2024-07-04T05:02:12.867Z",
      },
      {
        id: 104,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:12.455Z",
        updated_at: "2024-07-04T05:02:12.455Z",
      },
      {
        id: 103,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:12.021Z",
        updated_at: "2024-07-04T05:02:12.021Z",
      },
      {
        id: 102,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:11.606Z",
        updated_at: "2024-07-04T05:02:11.606Z",
      },
      {
        id: 101,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:11.190Z",
        updated_at: "2024-07-04T05:02:11.190Z",
      },
      {
        id: 100,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:10.690Z",
        updated_at: "2024-07-04T05:02:10.690Z",
      },
      {
        id: 99,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:10.298Z",
        updated_at: "2024-07-04T05:02:10.298Z",
      },
      {
        id: 98,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:09.891Z",
        updated_at: "2024-07-04T05:02:09.891Z",
      },
      {
        id: 97,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:09.511Z",
        updated_at: "2024-07-04T05:02:09.511Z",
      },
      {
        id: 96,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:09.060Z",
        updated_at: "2024-07-04T05:02:09.060Z",
      },
      {
        id: 95,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:08.635Z",
        updated_at: "2024-07-04T05:02:08.635Z",
      },
      {
        id: 94,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:08.247Z",
        updated_at: "2024-07-04T05:02:08.247Z",
      },
      {
        id: 93,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:07.845Z",
        updated_at: "2024-07-04T05:02:07.845Z",
      },
      {
        id: 92,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:07.416Z",
        updated_at: "2024-07-04T05:02:07.416Z",
      },
      {
        id: 91,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:07.014Z",
        updated_at: "2024-07-04T05:02:07.014Z",
      },
      {
        id: 90,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:05.582Z",
        updated_at: "2024-07-04T05:02:05.582Z",
      },
      {
        id: 89,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:05.208Z",
        updated_at: "2024-07-04T05:02:05.208Z",
      },
      {
        id: 88,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:04.856Z",
        updated_at: "2024-07-04T05:02:04.856Z",
      },
      {
        id: 87,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:04.498Z",
        updated_at: "2024-07-04T05:02:04.498Z",
      },
      {
        id: 86,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:04.104Z",
        updated_at: "2024-07-04T05:02:04.104Z",
      },
      {
        id: 85,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:03.760Z",
        updated_at: "2024-07-04T05:02:03.760Z",
      },
      {
        id: 84,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:03.389Z",
        updated_at: "2024-07-04T05:02:03.389Z",
      },
      {
        id: 83,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:03.016Z",
        updated_at: "2024-07-04T05:02:03.016Z",
      },
      {
        id: 82,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:02.568Z",
        updated_at: "2024-07-04T05:02:02.568Z",
      },
      {
        id: 81,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:01.648Z",
        updated_at: "2024-07-04T05:02:01.648Z",
      },
      {
        id: 80,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:01.291Z",
        updated_at: "2024-07-04T05:02:01.291Z",
      },
      {
        id: 79,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:00.938Z",
        updated_at: "2024-07-04T05:02:00.938Z",
      },
      {
        id: 78,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:00.605Z",
        updated_at: "2024-07-04T05:02:00.605Z",
      },
      {
        id: 77,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:02:00.253Z",
        updated_at: "2024-07-04T05:02:00.253Z",
      },
      {
        id: 76,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:01:59.829Z",
        updated_at: "2024-07-04T05:01:59.829Z",
      },
      {
        id: 75,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:01:58.603Z",
        updated_at: "2024-07-04T05:01:58.603Z",
      },
      {
        id: 74,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:01:58.281Z",
        updated_at: "2024-07-04T05:01:58.281Z",
      },
      {
        id: 73,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:01:57.924Z",
        updated_at: "2024-07-04T05:01:57.924Z",
      },
      {
        id: 72,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:01:57.592Z",
        updated_at: "2024-07-04T05:01:57.592Z",
      },
      {
        id: 71,
        content:
          'const messages = await db.messages.findAll({ where: { convertation_id: conversation.dataValues.id }, order: [["updated_at", "DESC"]], offset: offset * limit, limit: limit, }); return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T05:01:57.124Z",
        updated_at: "2024-07-04T05:01:57.124Z",
      },
      {
        id: 56,
        content:
          ' const messages = await db.messages.findAll({     where: { convertation_id: conversation.dataValues.id },     order: [["updated_at", "DESC"]],     offset: offset * limit,     limit: limit,   });   return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T04:41:50.452Z",
        updated_at: "2024-07-04T04:41:50.452Z",
      },
      {
        id: 55,
        content:
          ' const messages = await db.messages.findAll({     where: { convertation_id: conversation.dataValues.id },     order: [["updated_at", "DESC"]],     offset: offset * limit,     limit: limit,   });   return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T04:41:49.402Z",
        updated_at: "2024-07-04T04:41:49.402Z",
      },
      {
        id: 54,
        content:
          ' const messages = await db.messages.findAll({     where: { convertation_id: conversation.dataValues.id },     order: [["updated_at", "DESC"]],     offset: offset * limit,     limit: limit,   });   return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T04:41:49.038Z",
        updated_at: "2024-07-04T04:41:49.038Z",
      },
      {
        id: 53,
        content:
          ' const messages = await db.messages.findAll({     where: { convertation_id: conversation.dataValues.id },     order: [["updated_at", "DESC"]],     offset: offset * limit,     limit: limit,   });   return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T04:41:48.675Z",
        updated_at: "2024-07-04T04:41:48.675Z",
      },
      {
        id: 52,
        content:
          ' const messages = await db.messages.findAll({     where: { convertation_id: conversation.dataValues.id },     order: [["updated_at", "DESC"]],     offset: offset * limit,     limit: limit,   });   return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T04:41:48.324Z",
        updated_at: "2024-07-04T04:41:48.324Z",
      },
      {
        id: 51,
        content:
          ' const messages = await db.messages.findAll({     where: { convertation_id: conversation.dataValues.id },     order: [["updated_at", "DESC"]],     offset: offset * limit,     limit: limit,   });   return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T04:41:47.940Z",
        updated_at: "2024-07-04T04:41:47.940Z",
      },
      {
        id: 50,
        content:
          ' const messages = await db.messages.findAll({     where: { convertation_id: conversation.dataValues.id },     order: [["updated_at", "DESC"]],     offset: offset * limit,     limit: limit,   });   return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T04:41:47.523Z",
        updated_at: "2024-07-04T04:41:47.523Z",
      },
      {
        id: 49,
        content:
          ' const messages = await db.messages.findAll({     where: { convertation_id: conversation.dataValues.id },     order: [["updated_at", "DESC"]],     offset: offset * limit,     limit: limit,   });   return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T04:41:46.743Z",
        updated_at: "2024-07-04T04:41:46.743Z",
      },
      {
        id: 48,
        content:
          ' const messages = await db.messages.findAll({     where: { convertation_id: conversation.dataValues.id },     order: [["updated_at", "DESC"]],     offset: offset * limit,     limit: limit,   });   return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T04:41:46.314Z",
        updated_at: "2024-07-04T04:41:46.314Z",
      },
      {
        id: 47,
        content:
          ' const messages = await db.messages.findAll({     where: { convertation_id: conversation.dataValues.id },     order: [["updated_at", "DESC"]],     offset: offset * limit,     limit: limit,   });   return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T04:41:45.934Z",
        updated_at: "2024-07-04T04:41:45.934Z",
      },
      {
        id: 46,
        content:
          ' const messages = await db.messages.findAll({     where: { convertation_id: conversation.dataValues.id },     order: [["updated_at", "DESC"]],     offset: offset * limit,     limit: limit,   });   return messages;',
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T04:41:45.388Z",
        updated_at: "2024-07-04T04:41:45.388Z",
      },
      {
        id: 11,
        content: "gdsgds",
        user_id: 2,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T03:09:54.882Z",
        updated_at: "2024-07-04T03:09:54.882Z",
      },
      {
        id: 8,
        content: "gádga",
        user_id: 2,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T03:09:24.358Z",
        updated_at: "2024-07-04T03:09:24.358Z",
      },
      {
        id: 6,
        content: "này",
        user_id: 2,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T03:09:12.308Z",
        updated_at: "2024-07-04T03:09:12.308Z",
      },
      {
        id: 5,
        content: "dgsgsd",
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T03:08:54.473Z",
        updated_at: "2024-07-04T03:08:54.473Z",
      },
      {
        id: 4,
        content: "gádga",
        user_id: 3,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T03:08:45.091Z",
        updated_at: "2024-07-04T03:08:45.091Z",
      },
      {
        id: 3,
        content: "gsdgsd",
        user_id: 1,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T03:08:38.380Z",
        updated_at: "2024-07-04T03:08:38.380Z",
      },
      {
        id: 2,
        content: "ha",
        user_id: 3,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T03:08:22.276Z",
        updated_at: "2024-07-04T03:08:22.276Z",
      },
      {
        id: 1,
        content: "hello cụ",
        user_id: 3,
        convertation_id: 1,
        seen_at: null,
        status: null,
        created_at: "2024-07-04T03:08:11.625Z",
        updated_at: "2024-07-04T03:08:11.625Z",
      },
    ]);

    await queryInterface.sequelize.query(`
    SELECT setval(
      pg_get_serial_sequence('messages', 'id'), 
      (SELECT MAX(id) FROM "messages")
    );
  `);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("messages", null, {});
  },
};
