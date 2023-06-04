SELECT_USER = """
SELECT `USER_ID`
     , `USER_PW`
     , `USER_NM`
     , `EMAIL`
     , 'PHONE`
     , 
  FROM loginInfo.USER_INFO
 WHERE USER_ID = %(user_id)s
"""
SELECT_USER_LOGIN_ID_PW = """
SELECT * 
  FROM loginInfo.USER_INFO
 WHERE USER_ID = %(user_id)s
   AND USER_PW = %(user_pw)s
;
"""
INSERT_USER = """
INSERT INTO USERS.USER(
  `USER_ID`,`USER_PW`, `USER_NM`, `EMAIL`, `PHONE`, `CREATED_DTTM`, `CREATED_BY`
  ,`UPDATED_DTTM`,`UPDATED_BY`)
VALUE(
  %(user_id)s, %(user_pw)s, %(user_nm)s, %(email)s, %(phone)s, NOW(), NULL
  , NULL, NULL
);
"""