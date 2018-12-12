CREATE DATABASE IF NOT EXISTS db761899254;
USE db761899254;

CREATE TABLE `CABINET` (
	`id_cabinet` smallint primary key NOT NULL AUTO_INCREMENT,
	`adresse_Cabinet` varchar(255),
	`email_cabinet` varchar(255),
	`password_cabinet` varchar (100) 
)ENGINE=INNODB;

CREATE TABLE `MEDECIN` (
	`id_medecin` smallint primary key NOT NULL AUTO_INCREMENT,
	`nom_medecin` varchar(100),
	`prenom_medecin` varchar(100),
	`email_medecin` varchar(255),
	`password_medecin` varchar (100),
	`id_cabinet` smallint
)ENGINE=INNODB;


CREATE TABLE `VISITEUR` (
	`id_visiteur` smallint primary key NOT NULL AUTO_INCREMENT,
	`nom_visiteur` varchar(100),
	`prenom_visiteur` varchar(100),
	`email_visiteur` varchar (255),
	`password_visiteur` varchar (255)
)ENGINE=INNODB;

CREATE TABLE `VISITE` (
	`id_visite` smallint primary key NOT NULL AUTO_INCREMENT,
	`date_visite` date,
	`etat_rdv` boolean,
	`heure_arrivee` date,
	`heure_debut` date,
	`id_medecin` smallint,
	`id_visiteur` smallint
)ENGINE=INNODB;

alter table `CABINET` ADD unique key `id_cabinet` (`id_cabinet`);
    

alter table `MEDECIN` ADD unique key `id_medecin` (`id_medecin`);
    

alter table `VISITEUR` ADD unique key `id_visiteur` (`id_visiteur`);


alter table `VISITE` ADD unique key `id_visite` (`id_visite`);

ALTER TABLE MEDECIN ADD CONSTRAINT fk_id_cabinet FOREIGN KEY (id_cabinet) REFERENCES CABINET(id_cabinet);
ALTER TABLE VISITE ADD CONSTRAINT fk_id_medecin FOREIGN KEY (id_medecin) REFERENCES MEDECIN (id_medecin);
ALTER TABLE VISITE ADD CONSTRAINT fk_id_visiteur FOREIGN KEY (id_visiteur) REFERENCES VISITEUR (id_visiteur);
