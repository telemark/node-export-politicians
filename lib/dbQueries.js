'use strict'

var allPoliticians = 'select top 1000 X1.ct_recno as recno, X1.ct_searchname as name, X3.to_no as phone, X1.ct_title as title, X4.to_no as privateMail, X6.to_no as mobilePhone, X14.ad_zip as zip, X14.ad_address as address, X15.scv_code as gender, X24.to_no as publicMail' +
  ' from dbo.ct_contact X1' +
  ' left outer join dbo.to_teleobject X2 on X1.ct_recno = X2.to_ct_recno and X2.to_tot_recno = 4' +
  ' left outer join dbo.to_teleobject X3 on X1.ct_recno = X3.to_ct_recno and X3.to_tot_recno = 1' +
  ' left outer join dbo.to_teleobject X4 on X1.ct_recno = X4.to_ct_recno and X4.to_tot_recno = 28' +
  ' left outer join dbo.to_teleobject X5 on X1.ct_recno = X5.to_ct_recno and X5.to_tot_recno = 50002' +
  ' left outer join dbo.to_teleobject X6 on X1.ct_recno = X6.to_ct_recno and X6.to_tot_recno = 27' +
  ' left outer join dbo.to_teleobject X7 on X1.ct_recno = X7.to_ct_recno and X7.to_tot_recno = 5' +
  ' left outer join dbo.to_teleobject X8 on X1.ct_recno = X8.to_ct_recno and X8.to_tot_recno = 50003' +
  ' left outer join dbo.to_teleobject X9 on X1.ct_recno = X9.to_ct_recno and X9.to_tot_recno = 2' +
  ' left outer join dbo.to_teleobject X10 on X1.ct_recno = X10.to_ct_recno and X10.to_tot_recno = 7' +
  " left outer join dbo.hi_history X11 on X1.ct_recno = X11.hi_id and X11.hi_entity = N'Contact' and X11.hi_ct_recno  in (200194)" +
  ' left outer join dbo.ad_address X12 on X1.ct_recno = X12.ad_ct_recno and ( X12.ad_adt_recno =2)' +
  " left outer join dbo.co_country X13 on X12.ad_co_recno = X13.co_recno and X13.co_lan_code  = N'NOR'" +
  ' left outer join dbo.ad_address X14 on X1.ct_recno = X14.ad_ct_recno and ( X14.ad_adt_recno =50001)' +
  " left outer join dbo.scv_codevalues X15 on X1.ct_gender = X15.scv_value and X15.scv_lan_code  = N'NOR' and X15.scv_source =N'Contact.Gender'" +
  " left outer join dbo.ddc_docdispatchchannel X16 on X1.ct_ddc_recno = X16.ddc_recno and X16.ddc_lan_code  = N'NOR'" +
  ' left outer join dbo.uag_accessgroup X17 on X1.ct_uag_recno = X17.uag_recno' +
  " left outer join dbo.ct_contact X18 on X1.ct_company_recno = X18.ct_recno and (( X18.ct_domain =1)) and  exists (select  1 from dbo.urp_rowpermission where urp_entity= N'Contact' and X18.ct_recno = urp_key and urp_uag_recno in (select uam_uag_recno from dbo.uam_activemembership where uam_ct_recno = 200194)   )" +
  ' left outer join dbo.to_teleobject X19 on X18.ct_recno = X19.to_ct_recno and X19.to_tot_recno = 1' +
  ' left outer join dbo.ad_address X20 on X18.ct_recno = X20.ad_ct_recno and ( X20.ad_adt_recno =2)' +
  " left outer join dbo.co_country X21 on X20.ad_co_recno = X21.co_recno and X21.co_lan_code  = N'NOR'" +
  ' join dbo.ccc_contactcat X22 on X1.ct_recno = X22.ccc_ct_recno' +
  " join dbo.cc_category X23 on X22.ccc_cc_recno = X23.cc_recno and X23.cc_lan_code  = N'NOR'" +
  ' left outer join dbo.to_teleobject X24 on X1.ct_recno = X24.to_ct_recno and  X24.to_tot_recno =6' +
  ' left outer join dbo.to_teleobject X25 on X1.ct_recno = X25.to_ct_recno and  X25.to_tot_recno =3' +
  ' where ((X1.ct_active  =  -1 and X23.cc_recno  =  10) and EXISTS (select  1  from dbo.urp_rowpermission X26' +
  " where (((X26.urp_uag_recno IN( select uam_uag_recno from dbo.uam_activemembership where uam_ct_recno = 200194 ))) and X26.urp_entity  =  N'Contact') and X1.ct_recno = X26.urp_key))" +
  ' order by X1.ct_searchname'

var politicianCommittees = 'select X1.ctct_from as recno, X2.ct_recno as groupRecno, X2.ct_searchname as name, X4.ccr_roleto as role, X4.ccr_desc as roleDescription, X9.ad_address as address, X9.ad_zipplace as place, ad_zip_code as zip, X10.to_no as mail, X11.to_no as tlf, X12.to_no as url ' +
  'from dbo.ctct_connection X1 ' +
  "join dbo.ct_contact X2 on X1.ctct_to = X2.ct_recno and  exists (select  1 from dbo.urp_rowpermission where urp_entity= N'Contact' and X2.ct_recno = urp_key and urp_uag_recno in (select uam_uag_recno from dbo.uam_activemembership where uam_ct_recno = 200194)) " +
  "join dbo.ccr_role X4 on X1.ctct_ccr_recno = X4.ccr_recno and X4.ccr_lan_code  = N'NOR' " +
  'left outer join dbo.ad_address X9 on X2.ct_recno = X9.ad_ct_recno and X9.ad_adt_recno = 2 ' +
  'left outer join dbo.to_teleobject X10 on X2.ct_recno = X10.to_ct_recno and X10.to_tot_recno = 6 ' +
  'left outer join dbo.to_teleobject X11 on X2.ct_recno = X11.to_ct_recno and X11.to_tot_recno = 1 ' +
  'left outer join dbo.to_teleobject X12 on X2.ct_recno = X12.to_ct_recno and X12.to_tot_recno = 3 ' +
  'where X1.ctct_from = @PARAM'

var query = {
  allPoliticians: allPoliticians,
  politicianCommittees: politicianCommittees
}

module.exports = query
