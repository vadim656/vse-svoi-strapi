'use strict';

/**
 * poezdka service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::poezdka.poezdka');
