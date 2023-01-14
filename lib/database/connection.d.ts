import { Dialect, Sequelize } from "sequelize";
export declare const connectMongoDB: (uri: string) => void;
export declare const sequelizeDatabase: (host: string, database: string, username: string, password: string, dialect: Dialect) => Sequelize;
export declare function connectToSequelize(host: string, database: string, username: string, password: string, dialect: Dialect): void;
//# sourceMappingURL=connection.d.ts.map