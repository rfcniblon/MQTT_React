# MQTT React ESP8266 ESPEASY

## info

### Composant MessageList pour recupérer les messages 
### Composant MessageSonde pour récupérer les valeurs des sondes 1 et 2 de l'ESP8266

#### sub   = souscrire au canal
#### pub   = publier un message
#### -t    = nom du chanel
#### -h    = url/ip broker
#### -p    = port borker
#### -u    = utilisateur
#### -P    = mot de pass

## Souscrire au canal "test" depuis un Terminal

 mqtt sub -t 'test' -h localhost -p 8885 -t user -P pass

## Publier au canal "test" depuis un Terminal

 mqtt pub -t 'test' -h localhost -p 8885 -t user -P pass -m 'hello world'

