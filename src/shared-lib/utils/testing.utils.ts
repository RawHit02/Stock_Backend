export class TestingUtils {
  private constructor() {
    //@note:: I have changed this constructor access level to private in order to avoid unnecessary instance creation
  }

  public static mockOfType<T = any>() {
    // if (!jest) {
    //   return;
    // }
    return new (jest.fn(() => Object.create(null) as T))();
  }

  public static mockTypeORMSelectQuery<T>() {
    const selectQueryBuilder: any = this.mockOfType<T>();
    selectQueryBuilder.leftJoinAndSelect = () => this.mockTypeORMSelectQuery();
    selectQueryBuilder.innerJoinAndSelect = () => this.mockTypeORMSelectQuery();
    selectQueryBuilder.where = () => this.mockTypeORMSelectQuery();
    selectQueryBuilder.andWhere = () => this.mockTypeORMSelectQuery();
    selectQueryBuilder.select = () => this.mockTypeORMSelectQuery();
    selectQueryBuilder.addSelect = () => this.mockTypeORMSelectQuery();
    selectQueryBuilder.addOrderBy = () => this.mockTypeORMSelectQuery();
    selectQueryBuilder.orderBy = () => this.mockTypeORMSelectQuery();
    selectQueryBuilder.andHaving = () => this.mockTypeORMSelectQuery();
    selectQueryBuilder.limit = () => this.mockTypeORMSelectQuery();
    selectQueryBuilder.skip = () => this.mockTypeORMSelectQuery();
    selectQueryBuilder.getOne = () => Promise.resolve(null);
    selectQueryBuilder.getMany = () => Promise.resolve([]);
    return selectQueryBuilder as T;
  }
}
