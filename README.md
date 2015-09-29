# node-import-politicians

## About
Temporary solution until 360s webservice supports searching for politicians

## Mongo Examples
politician

```javascript
{
	"_id" : ObjectId("560a9c549ba0de452d7ccd3d"),
	"ct_recno" : [
		200417,
		null
	],
	"ct_searchname" : [
		"Socrates of Sophroniscus",
		null
	],
	"ct_domain" : [
		4,
		null
	],
	"ct_active" : [
		-1,
		null
	],
	"to_no" : [
		"socrates@rødt.no",
		null,
		"+47 95 40 23 14 ",
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	],
	"ct_location" : null,
	"ct_title" : null,
	"ct_initials" : null,
	"ct_referencenumber" : null,
	"hi_date" : ISODate("2015-09-28T14:52:51.136Z"),
	"ad_zipplace" : null,
	"ad_zip_code" : null,
	"ad_zip" : [
		"3928 PORSGRUNN",
		null
	],
	"ad_address" : [
		"Jupiterveien 22",
		null
	],
	"co_desc" : null,
	"scv_code" : "Mann",
	"ddc_code" : null,
	"uag_code" : "Alle"
}
```

politiciansCommittees

```javascript
{
	"_id" : ObjectId("560a9c559ba0de452d7ccdc5"),
	"ctct_recno" : 200503,
	"ct_recno" : 200417,
	"ct_domain" : 1,
	"ct_active" : -1,
	"ct_searchname" : "Arbeiderpartiet",
	"to_no" : null,
	"ccr_sortid" : 10,
	"ccr_roleto" : "Parti",
	"ccr_desc" : "Partimedlem"
}
{
	"_id" : ObjectId("560a9c559ba0de452d7ccdd5"),
	"ctct_recno" : 200899,
	"ct_recno" : 200417,
	"ct_domain" : 16,
	"ct_active" : -1,
	"ct_searchname" : "Hovudutval for samferdsel (01.10.2011 - 30.09.2015)",
	"to_no" : null,
	"ccr_sortid" : 40,
	"ccr_roleto" : "Varamedlem i",
	"ccr_desc" : "Varamedlem i utvalg"
}
```
