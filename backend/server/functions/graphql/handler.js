'use strict';

import { graphql } from 'graphql';
import Schema from './schema';

module.exports.handler = function(event, context) {

  // Handle input when being on local dev stack
  if (event.isServerlessOffline) {
    event.query = event.payload;
  }

  const query = event.query;

  graphql(Schema, query).then( function(result) {
    return context.done(null, result);
  });

};
