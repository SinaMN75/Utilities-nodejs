import {connectMongoDB as cmdb} from "./database/nosql";
import {compareValues as cmrVls, encrypt as encrpt} from "./general/encrypt";
import {notFound as ntFnd} from "./general/express";
import express from "express";

export function connectMongoDB(uri: string) { cmdb(uri); }

export function encrypt(value: string, action: Function, error: Function) { encrpt(value, action, error); }

export function compareValues(password: string, hash: string, action: Function) { cmrVls(password, hash, action); }

export function notFound(response: express.Response) { ntFnd(response); }