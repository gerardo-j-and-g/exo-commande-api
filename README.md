# Exercice sur un api de gestion des commandes en nodejs

# Créer une api avec express

## Gestion de stock - Base de donnée

#### produit

- id
- nom
- qty
- description
- prix

#### commande

- id
- clientId
- date

#### lignesCommande

- produitId
- commandeId
- qty
- prix

#### client

- id
- nom
- prenom

#### Bonus ( utilisateur )

- id
- username
- password
- role (vendeur, stock)

## controllers

#### produit (stock)

- encoder un produit
- lister les produits (tout le monde)
- modifier la qty en stock

#### client (vendeur)

- ajouter un client
- lister les clients (tout le monde)

#### commande (vendeur)

- créer une commande (vérifier la qty en stock et diminuer la qty)
- annuler une commande (réincrémenter la qty en stock)

`ligneCommande.belongsTo(Command);`

`Command.hasMany(ligneCommande);`

```
Format du json reçu

{
	clientId: 42,
	ligneCommandes: [
		{ produitId: 1, qty: 5 },
		{ ... },
		...
	]
}
```
