import { Dialect, Sequelize } from "sequelize";
interface sequelizeSettings {
    host: string;
    database: string;
    username: string;
    password: string;
    dialect: Dialect;
}
export declare const connectMongoDB: (uri: string) => void;
export declare const sequelizeDatabase: (settings: sequelizeSettings) => Sequelize;
export declare function connectToSequelize(settings: sequelizeSettings): void;
export {};
//# sourceMappingURL=connection.d.ts.map