# Mongo

## Data Import / Export

### From / to a json array file and a local server

```bash
$ mongoimport -d <database-name> -c <collection-name> --drop --jsonArray --file <json-array-file>

$ mongoexport -d <database-name> -c <collection-name> --jsonArray -o <json-array-file>
```

### From / to a json array file and a remote mongo server

```bash
$ mongoimport -h <host>:<port> -d <database-name> -c <collection-name> -u <username> -p <password> --drop --jsonArray --file <json-array-file>

$ mongoexport -h <host>:<port> -d <database-name> -c <collection-name> -u <username> -p <password>  --jsonArray -o <json-array-file>
```

## Hints

[What is the “__v” field in MongoDB?](https://stackoverflow.com/questions/12495891/what-is-the-v-field-in-mongodb)

[Cómo relacionar tus modelos en MongoDB](https://carlosazaustre.es/como-relacionar-tus-modelos-en-mongodb/)