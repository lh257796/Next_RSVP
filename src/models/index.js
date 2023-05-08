// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Attendee } = initSchema(schema);

export {
  Attendee
};