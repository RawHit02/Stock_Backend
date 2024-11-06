export class DBSecretModel {
  type: 'mysql' | 'mssql' | 'mongodb' | string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  constructor(init?: Partial<DBSecretModel>) {
    Object.assign(this, init);
  }
}
