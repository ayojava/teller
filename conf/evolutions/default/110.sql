# --- !Ups
ALTER TABLE USER_ACCOUNT ADD COLUMN EMAIL VARCHAR(254) AFTER PERSON_ID;
CREATE TABLE IF NOT EXISTS PASSWORD_IDENTITY(
  USER_ID BIGINT,
  EMAIL VARCHAR(254) NOT NULL,
  PASSWORD VARCHAR(254) NOT NULL,
  FIRST_NAME VARCHAR(254),
  LAST_NAME VARCHAR(254),
  HASHER VARCHAR(254) NOT NULL
);
RENAME TABLE `LOGIN_IDENTITY` TO `SOCIAL_IDENTITY`;
CREATE TABLE IF NOT EXISTS `MAIL_TOKEN`(
  USER_ID VARCHAR(254) NOT NULL PRIMARY KEY,
  EMAIL VARCHAR(254) NOT NULL,
  CREATED DATETIME NOT NULL,
  EXPIRE DATETIME NOT NULL,
  SIGN_UP TINYINT(1) NOT NULL DEFAULT 0
);

# --- !Downs
ALTER TABLE USER_ACCOUNT DROP COLUMN EMAIL;
DROP TABLE PASSWORD_IDENTITY;
RENAME TABLE `SOCIAL_IDENTITY` TO `LOGIN_IDENTITY`;
DROP TABLE IF EXISTS `MAIL_TOKEN`;
