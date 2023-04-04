import CryptoJS from 'crypto-js'
import {APP_CONFIGS} from "../constants";

const encrypt = (data: string): Promise<string> => {
    return new Promise((resolve) => {
        const _data = CryptoJS.AES.encrypt(data, APP_CONFIGS.ENC_KEY).toString()
        resolve(_data)
    })
}

const decrypt = (data: string): Promise<any> => {
    return new Promise((resolve) => {
        const bytes = CryptoJS.AES.decrypt(data, APP_CONFIGS.ENC_KEY)
        const _data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
        resolve(_data)
    })
}

const numberToCurrency = (i: number) => {
    return i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const utils = {
    encrypt,
    decrypt,
    numberToCurrency
}