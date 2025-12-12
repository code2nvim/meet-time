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

CREATE TABLE IF NOT EXISTS plans (
    id          serial  primary key,
    title       varchar(80),
    meet_at     varchar(80),
    meet_time   timestamp,
    description text
);

CREATE TABLE IF NOT EXISTS plan_participants (
    id          serial  primary key,
    plan_id     integer,
    participant varchar(80)
);
