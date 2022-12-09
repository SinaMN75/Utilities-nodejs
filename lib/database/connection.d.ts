import { Dialect, Sequelize } from "sequelize";
export declare const connectMongoDB: (uri: string) => void;
export declare const sequelizeDatabase: (database: string, username: string, password: string, dialect: Dialect) => Sequelize;
export declare function connectToSequelize(database: string, username: string, password: string, dialect: Dialect): void;
//# sourceMappingURL=connection.d.ts.map