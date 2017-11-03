# Mongo

## Data Import / Export

```bash
$ mongoimport --db <database-name> --collection <collection-name> --drop --file <pseudo-json-data-file-path>
```

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