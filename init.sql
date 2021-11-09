-- CREATE DATABASE IF NOT EXISTS GHDC;

-- Grant all privileges on GHDC.* to 'guillaume'@'%';
\c GHDC;

create Type Gender as enum ('Male', 'Female', 'Other');

create table if not exists Patient(
    id int primary key,
    firstname varchar(50) not null,
    lastname varchar(50) not null,
    birth timestamp not null,
    gender Gender not null
);

create table if not exists Biometrics (
    id_patient int not null,
    weight int not null,
    size int not null,

    primary key (id_patient, weight, size),
    foreign key (id_patient) references Patient(id)
);

create table if not exists Biological_constant (
    id_patient int not null,
    HbA1c decimal not null,
    total_cholesterol int not null,
    cholesterol_HDL int not null,
    primary key (id_patient, HbA1c, total_cholesterol, cholesterol_HDL),
    foreign key (id_patient) references Patient(id)
);

create table if not exists Parameters (
    id_patient int not null,
    PSS int not null,
    primary key (id_patient, PSS),
    foreign key (id_patient) references Patient(id)
);

create table if not exists Addiction (
    id_patient int not null,
    tobacco_consumption int not null,
    primary key (id_patient, tobacco_consumption),
    foreign key (id_patient) references Patient(id)
);