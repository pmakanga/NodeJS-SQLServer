module.exports = {
    HOST: "DESKTOP-D90E0SP.CRAFTSILICON.LOCAL",
    PORT: "1433",
    USER: "sa",
    PASSWORD: "Password@1234",
    DB: "TutorialDB",
    dialect: "mssql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
// First five parameters are for SQL Server / MSSQL connection.
// pool is optional, it will be used for Sequelize connection pool configuration:

// max: maximum number of connection in pool
// min: minimum number of connection in pool
// idle: maximum time, in milliseconds, that a connection can be idle before being released
// acquire: maximum time, in milliseconds, that pool will try to get connection before throwing error