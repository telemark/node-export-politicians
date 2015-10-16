[![Build Status](https://travis-ci.org/telemark/node-export-politicians.svg?branch=master)](https://travis-ci.org/telemark/node-export-politicians)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# node-export-politicians

Node module for exporting politicians, political parties and committees from Public360

## About

This module queries 360s mssql database to find politicians and writes them to json-files.

**NB!** Temporary solution until 360s webservice supports searching for politicians

## File Examples

See [/data](data) directory for file examples.

## Import to mongo
```sh
$ mongoimport -d tfk -c politicians data/politicians.json --jsonArray
$ mongoimport -d tfk -c politiciansCommittees data/politiciansCommittees.json --jsonArray
```

or use the merged file

```sh
$ mongoimport -d tfk -c politicians data/mergedData.json --jsonArray
```
