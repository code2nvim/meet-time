CREATE TABLE IF NOT EXISTS accounts (
    id          serial  primary key,
    role        varchar(80),
    username    varchar(80),
    password    varchar(255)
);
