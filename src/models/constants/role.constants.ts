export class RoleConstants {
  static readonly admin = 'ADMIN';
  static readonly subAdmin = 'SUB-ADMIN';
  static readonly vendor = 'VENDOR';
  static readonly user = 'USER';

  static ToArray(): string[] {
    return [this.admin, this.subAdmin, this.vendor, this.user];
  }
}
