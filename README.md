# Test Grand Hopital de Charleroi

---

## Contexte de l'application :

Suite à ma candidature en tant que développeur Frontend au Grand Hopital de Charleroi, il
m'a été demandé réaliser une application pour montrer mes compétences techniques.

---
## Installation :

Avant de pouvoir lancer l'application, il vous faudra installer Docker.
S'il n'est pas encore installé sur votre ordinateur ([cliquer ici](https://docs.docker.com/get-docker/)).

Une fois Docker installé, ouvrez un Terminal de commandes à la racine du projet et entrez la commande suivante :
> ```shell
> docker-compose up -d
> ```

Lors de la première execution la commande peut mettre plusieurs minutes avant d'avoir fini. Le temps de pull les images Docker

Vous pouvez ensuite vous rendre sur votre navigateur et aller à l'adresse suivante :

> ```
> localhost:3000
> ```


L'installation a été testée sur une machine Windows 11.

---

## Manuel d'utilisation :

### Aspect général

Une fois l'application lancée, sur la page principale on peut apercevoir deux choses.

La première est un texte nous demandant de sélectionner le ou les patients pour lesquels l'on souhaite
voir les données. Il est possible de sélectionner de 1 à 4 patients en même temps. Cette zone sera par
la suite remplacée par les graphiques, une fois les patients choisis.

Le deuxième élément que l'on peut voir se trouve en haut à gauche de la fenêtre. Cet élément est une barre de
recherche dans laquelle il vous suffit de taper le nom du patient que vous souhaitez voir.

### Recherche de patients

La liste des patients est dynamique, cela veut dire qu'une fois le premier caractère entré, vous pourrez voir toutes
les personnes qui y correspondent. Cette liste s'affine plus votre recherche est précise.

Pour afficher les graphiques du patient, il suffit de cliquer sur son nom dans la liste.
L'icône présente juste à sa droite deviendra noire pour vous signaler que le patient est bel et bien choisi.

À partir du moment, où vous avez choisi tous les patients que vous vouliez voir, pensez à supprimer la saisie de la recherche.

### Affichage des données brutes

L'affichage des données brutes se fait automatique en dessous de la liste de recherche. On y retrouve toutes les données
du patient ainsi que son âge.

### Affichage des graphiques

L'affichage des graphiques se fait automatique une fois le patient sélectionné, vous n'avez rien à faire de plus.

### Lire les graphiques

Les graphiques présentent un titre qui vous indique quelles données sont représentées. Une couleur est attribuée à chaque
patient.

Lecture du graphique :
- l'axe vertical : Il indique le niveau ainsi que l'unité de la valeur.
- l'axe horizontal : Il indique le nom du patient

Pour voir la valeur de la barre sur le graphique, il suffit de laisser votre curseur sur la barre.

## Technologies utilisées :
- GraphQL
- Docker
- NodeJS
- ChartJS
- Material Design Icon
- Tailwind CSS
