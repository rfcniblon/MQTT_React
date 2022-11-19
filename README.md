# MQTT React ESP8266 ESPEASY

## informations :

### Renseigner ip et port du broker dans le fichier .env
### Affiche les données reçu du broker ou affiche les valeurs des sondes de l'esp8266

#### sub   = souscrire au canal
#### pub   = publier un message
#### -t    = nom du chanel
#### -h    = url/ip broker
#### -p    = port borker
#### -u    = utilisateur
#### -P    = mot de pass


## Souscription au canal "test" depuis un Terminal
#### mqtt sub -t 'test' -h localhost -p 8885 -t user -P pass
## Publier au canal "test" depuis un Terminal
#### mqtt pub -t 'test' -h localhost -p 8885 -t user -P pass -m 'hello world'
