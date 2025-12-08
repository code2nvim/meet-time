CREATE TABLE IF NOT EXISTS accounts (
    id          serial  primary key,
    username    varchar(80),
    password    varchar(255)
);
