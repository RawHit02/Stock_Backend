export enum eAppEnv {
  LOCAL = 'local',
  DEV = 'dev',
  PROD = 'prod',
  UAT = 'uat',
  TEST = 'test',
}

export enum eDataSource {
  USER = 'USER',
  STORAGE = 'STORAGE',
}
export enum eResponseType {
  DTO = 'DTO',
  ENTITY = 'ENTITY',
  DOMAIN_ENTITY = 'DOMAIN_ENTITY',
}

export enum eDataActionType {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export enum eRequestHeaderConfigKeys {
  SESSION_ID = 'x-sid',
  CORRELATION_ID = 'x-correlation-id',
  USER_ID = 'x-user-id',
  COMPANY_ID = 'x-company-id',
  CLAM = 'x-claim',
  ROLE = 'x-role',
  DEVICE_FP = 'x-device-fp',
  EVENT_NAME = 'x-event-name',
  REAL_IP = 'x-real-ip',
}

export enum stockType {
  Inward = 'Inward',
  Outward = 'Outward',
}
