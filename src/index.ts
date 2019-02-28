import { stringifyProp } from './stringify-prop';
import { parseTargetProp } from './parse-target-prop';

export const PROP_NAME = 'event-param';

export const getEventParam = parseTargetProp(PROP_NAME);

export const setEventParam = stringifyProp(PROP_NAME);
