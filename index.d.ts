import * as sequelize from "sequelize-typescript";

interface EggSequelizeOptions extends sequelize.Options {
  delegate?: string;
  baseDir?: string;
}

interface DataSources {
  [datasources]: EggSequelizeOptions;
}

declare module 'egg' {

  // extend app
  interface Application {
    Sequelize: sequelize.SequelizeStatic;
    model: sequelize.Model;
  }

  // extend context
  interface Context {
    model: sequelize.Model;
  }

  // extend your config
  interface EggAppConfig {
    sequelize: EggSequelizeOptions | DataSources;
  }

}
