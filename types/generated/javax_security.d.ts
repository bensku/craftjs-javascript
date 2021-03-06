//@ts-nocheck

declare module 'javax.security.auth' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Set as java_util_Set } from 'java.util';
import { Principal as java_security_Principal, AccessControlContext as java_security_AccessControlContext, PrivilegedAction as java_security_PrivilegedAction, PrivilegedExceptionAction as java_security_PrivilegedExceptionAction } from 'java.security';
import { Subject as javax_security_auth_Subject } from 'javax.security.auth';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Subject extends java_lang_Object implements java_io_Serializable {
principals: java_util_Set<T>;
principals: java_util_Set<java_security_Principal>;
privateCredentials: java_util_Set<T>;
privateCredentials: java_util_Set<java_lang_Object>;
publicCredentials: java_util_Set<T>;
publicCredentials: java_util_Set<java_lang_Object>;
static subject: javax_security_auth_Subject;
equals(arg0: java_lang_Object): boolean;
getPrincipals(): java_util_Set<java_security_Principal>;
getPrincipals<T extends java_security_Principal>(arg0: java_lang_Class<T>): java_util_Set<T>;
getPrivateCredentials(): java_util_Set<java_lang_Object>;
getPrivateCredentials<T extends java_lang_Object>(arg0: java_lang_Class<T>): java_util_Set<T>;
getPublicCredentials(): java_util_Set<java_lang_Object>;
getPublicCredentials<T extends java_lang_Object>(arg0: java_lang_Class<T>): java_util_Set<T>;
hashCode(): number;
isReadOnly(): boolean;
setReadOnly(): void;
static doAs<T extends java_lang_Object>(arg0: javax_security_auth_Subject, arg1: java_security_PrivilegedAction<T>): T;
static doAs<T extends java_lang_Object>(arg0: javax_security_auth_Subject, arg1: java_security_PrivilegedExceptionAction<T>): T;
static doAsPrivileged<T extends java_lang_Object>(arg0: javax_security_auth_Subject, arg1: java_security_PrivilegedAction<T>, arg2: java_security_AccessControlContext): T;
static doAsPrivileged<T extends java_lang_Object>(arg0: javax_security_auth_Subject, arg1: java_security_PrivilegedExceptionAction<T>, arg2: java_security_AccessControlContext): T;
static getSubject(arg0: java_security_AccessControlContext): javax_security_auth_Subject;
toString(): string;
constructor();
constructor(arg0: boolean, arg1: java_util_Set<java_security_Principal>, arg2: java_util_Set<java_lang_Object>, arg3: java_util_Set<java_lang_Object>);
  }
}