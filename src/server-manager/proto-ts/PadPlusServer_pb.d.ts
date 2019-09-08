// package: PadPlusServer
// file: PadPlusServer.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class RequestObject extends jspb.Message { 

    hasUin(): boolean;
    clearUin(): void;
    getUin(): string | undefined;
    setUin(value: string): void;


    hasRequestid(): boolean;
    clearRequestid(): void;
    getRequestid(): string | undefined;
    setRequestid(value: string): void;


    hasToken(): boolean;
    clearToken(): void;
    getToken(): string | undefined;
    setToken(value: string): void;


    hasApitype(): boolean;
    clearApitype(): void;
    getApitype(): ApiType | undefined;
    setApitype(value: ApiType): void;


    hasParams(): boolean;
    clearParams(): void;
    getParams(): string | undefined;
    setParams(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestObject.AsObject;
    static toObject(includeInstance: boolean, msg: RequestObject): RequestObject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestObject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestObject;
    static deserializeBinaryFromReader(message: RequestObject, reader: jspb.BinaryReader): RequestObject;
}

export namespace RequestObject {
    export type AsObject = {
        uin?: string,
        requestid?: string,
        token?: string,
        apitype?: ApiType,
        params?: string,
    }
}

export class ResponseObject extends jspb.Message { 

    hasResult(): boolean;
    clearResult(): void;
    getResult(): string | undefined;
    setResult(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResponseObject.AsObject;
    static toObject(includeInstance: boolean, msg: ResponseObject): ResponseObject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResponseObject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResponseObject;
    static deserializeBinaryFromReader(message: ResponseObject, reader: jspb.BinaryReader): ResponseObject;
}

export namespace ResponseObject {
    export type AsObject = {
        result?: string,
    }
}

export class InitConfig extends jspb.Message { 

    hasToken(): boolean;
    clearToken(): void;
    getToken(): string | undefined;
    setToken(value: string): void;


    hasWxid(): boolean;
    clearWxid(): void;
    getWxid(): string | undefined;
    setWxid(value: string): void;


    hasUin(): boolean;
    clearUin(): void;
    getUin(): string | undefined;
    setUin(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InitConfig.AsObject;
    static toObject(includeInstance: boolean, msg: InitConfig): InitConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InitConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InitConfig;
    static deserializeBinaryFromReader(message: InitConfig, reader: jspb.BinaryReader): InitConfig;
}

export namespace InitConfig {
    export type AsObject = {
        token?: string,
        wxid?: string,
        uin?: string,
    }
}

export class StreamResponse extends jspb.Message { 

    hasUin(): boolean;
    clearUin(): void;
    getUin(): string | undefined;
    setUin(value: string): void;


    hasRequestid(): boolean;
    clearRequestid(): void;
    getRequestid(): string | undefined;
    setRequestid(value: string): void;


    hasData(): boolean;
    clearData(): void;
    getData(): string | undefined;
    setData(value: string): void;


    hasResponsetype(): boolean;
    clearResponsetype(): void;
    getResponsetype(): ResponseType | undefined;
    setResponsetype(value: ResponseType): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StreamResponse): StreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamResponse;
    static deserializeBinaryFromReader(message: StreamResponse, reader: jspb.BinaryReader): StreamResponse;
}

export namespace StreamResponse {
    export type AsObject = {
        uin?: string,
        requestid?: string,
        data?: string,
        responsetype?: ResponseType,
    }
}

export enum ApiType {
    GET_QRCODE = 0,
    RECONNECT = 1,
    LOGOUT = 2,
    GET_CONTACT = 10,
    SEARCH_CONTACT = 11,
    ADD_CONTACT = 12,
    ACCEPT_CONTACT = 13,
    SYNC_CONTACT = 14,
    CONTACT_ALIAS = 15,
    ADD_CHATROOM_CONTACT = 16,
    CREATE_ROOM = 30,
    GET_ROOM_MEMBER = 31,
    ADD_ROOM_MEMBER = 32,
    REMOVE_ROOM_MEMBER = 33,
    CHANGE_TOPIC = 34,
    SEND_MESSAGE = 50,
    SEND_FILE = 51,
    REVOKE_MESSAGE = 52,
    GET_MESSAGE_MEDIA = 53,
    GET_ALL_LABEL = 70,
    ADD_LABEL = 71,
    MODIFY_LABEL = 72,
}

export enum ResponseType {
    REQUEST_RESPONSE = 0,
    LOGIN_QRCODE = 10,
    QRCODE_SCAN = 11,
    ACCOUNT_LOGIN = 12,
    ACCOUNT_LOGOUT = 13,
    QRCODE_LOGIN = 14,
    AUTO_LOGIN = 15,
    CONTACT_LIST = 20,
    CONTACT_MODIFY = 21,
    CONTACT_DELETE = 22,
    ROOM_MEMBER_LIST = 23,
    ROOM_MEMBER_MODIFY = 24,
    MESSAGE_RECEIVE = 30,
    STATUS_NOTIFY = 31,
}