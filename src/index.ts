import {connectMongoDB as cmdb} from "./database/nosql";
import {compareValues as cmrVls, encrypt as encrpt} from "./general/encrypt";
import {notFound as ntFnd} from "./general/express";
import {Price as prc} from "./models/price";
import express from "express";

// database

export function connectMongoDB(uri: string) { cmdb(uri); }

// general

export function encrypt(value: string, action: Function, error: Function) { encrpt(value, action, error); }

export function compareValues(password: string, hash: string, action: Function) { cmrVls(password, hash, action); }

export function notFound(response: express.Response) { ntFnd(response); }

// models

export const Price = prc;
