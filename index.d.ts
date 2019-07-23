// import { Model, Sequelize, ISequelizeConfig } from 'sequelize-typescript';
import { Model, ISequelizeConfig } from '../../sso/service/node_modules/sequelize-typescript';

interface EggSequelizeOptions extends ISequelizeConfig {
  /**
   * load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
   */
  delegate?: string;

  /**
   * load models from `app/model/*.js`
   */
  baseDir?: string;

  /**
   * ignore `app/${baseDir}/index.js` when load models, support glob and array
   */
  exclude?: string | Array<string>;

  /**
   * A full database URI
   * @example
   * `connectionUri:"mysql://localhost:3306/database"`
   */
  connectionUri?: string;
}

interface DataSources {
  datasources: EggSequelizeOptions[];
}

declare module 'egg' {

  // extend app
  interface Application {
    model: typeof Model;
  }

  // extend context
  interface Context {
    model: typeof Model;
  }

  // extend your config
  interface EggAppConfig {
    sequelize: EggSequelizeOptions | DataSources;
  }

}
