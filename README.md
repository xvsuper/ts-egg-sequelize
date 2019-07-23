# ts-egg-sequelize
+ 此插件根据官方 egg-sequelize@5.2.0 修改
+ 依赖 [typescript-sequelize](https://www.npmjs.com/package/sequelize-typescript) 插件（以包含在本插件无需手动安装）

## 版本说明
+ 本插件适用 sequelize V4 及以下版本

## 配置

### 配置插件（plugin.ts）
```js
sequelize: {
    enable: true,
    package: 'ts-egg-sequelize',
}
```

### 配置数据库跟egg-sequelize没区别（config.local.ts）
```js
config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'egg',
}
```

## 使用

### 示例
```ts
import { Table, Column, Model, Unique, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({
  tableName: 'users',
})
export default class User extends Model<User> {

  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Unique
  @Column
  uid: string;

  @Unique
  @Column
  username: string;

  @Column
  password: string;

  @Unique
  @Column
  phone_code: number;

  @Column
  status: number;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;

}
```

详细用法及函数请看这里：[egg-sequelize](https://www.npmjs.com/package/sequelize-typescript)