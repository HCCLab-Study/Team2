import membersHandler from './membersHandler';
import scheduleHandler from './scheduleHandler';

export const handler = [...membersHandler, ...scheduleHandler];
