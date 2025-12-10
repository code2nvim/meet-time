CREATE TABLE IF NOT EXISTS accounts (
    id          serial  primary key,
    username    varchar(80),
    password    varchar(255)
);

CREATE TABLE IF NOT EXISTS messages (
    id          serial  primary key,
    sent_from   varchar(80),
    sent_at     timestamp,
    content     text
);
