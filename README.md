# node-import-politicians

## About

This module queries 360s mssql database to find politicians and writes them to json-files.

**NB!** Temporary solution until 360s webservice supports searching for politicians

## File Examples

See /data directory for file examples.

## Import to mongo
```sh
$ mongoimport -d tfk -c politicians data/politicians.json
$ mongoimport -d tfk -c politiciansCommittees data/politiciansCommittees.json
```
