import { Request, Response } from "express";
import moment from "moment";
import dotenv from "dotenv";
import querystring from "qs";
import sha256 from "crypto-js/sha256";
import hmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";

dotenv.config();

interface IParamsVNP {
  vnp_Version?: string;
  vnp_Command?: string;
  vnp_TmnCode?: string;
  vnp_Locale?: string;
  vnp_CurrCode?: string;
  vnp_TxnRef?: string;
  vnp_OrderInf?: string;
  vnp_OrderType?: string;
  vnp_Amount?: number;
  vnp_ReturnUrl?: string;
  vnp_IpAddr?: string;
  vnp_CreateDate?: any;
  vnp_BankCode?: string;
  vnp_SecureHash?: string;
}

const createTransaction = async (req: Request, res: Response) => {
  //   try {
  //     const date = new Date();
  //     const createDate = moment(date).format("YYYYMMDDHHmmss");
  //     const ipAddr = process.env.IP_SERVER;
  //     let orderId = moment(date).format("DDHHmmss");
  //     let amount = req.body.amount;
  //     let bankCode = req.body.bankCode;
  //     let locale = req.body.language;
  //     if (locale === null || locale === "") {
  //       locale = "vn";
  //     }
  //     let currCode = "VND";
  //     let vnp_Params: IParamsVNP = {};
  //     vnp_Params["vnp_Version"] = "2.1.0";
  //     vnp_Params["vnp_Command"] = "pay";
  //     vnp_Params["vnp_TmnCode"] = tmnCode;
  //     vnp_Params["vnp_Locale"] = locale;
  //     vnp_Params["vnp_CurrCode"] = currCode;
  //     vnp_Params["vnp_TxnRef"] = orderId;
  //     vnp_Params["vnp_OrderInfo"] = "Thanh toan cho ma GD:" + orderId;
  //     vnp_Params["vnp_OrderType"] = "other";
  //     vnp_Params["vnp_Amount"] = amount * 100;
  //     vnp_Params["vnp_ReturnUrl"] = process.env.CLIENT_URL_TRANSACTION;
  //     vnp_Params["vnp_IpAddr"] = ipAddr;
  //     vnp_Params["vnp_CreateDate"] = createDate;
  //     if (bankCode !== null && bankCode !== "") {
  //       vnp_Params["vnp_BankCode"] = bankCode;
  //     }
  //     const hashDigest = sha256(process.env.HASH_KEY_TRANSACTION as string);
  //     const hmac = Base64.stringify(
  //       hmacSHA512(hashDigest, process.env.HASH_KEY_TRANSACTION as string)
  //     );
  //     vnp_Params["vnp_SecureHash"] = hmac;
  //     const vnpUrl = querystring.stringify(vnp_Params, { encode: false });
  //     res.redirect(vnpUrl);
  //   } catch (error) {
  //     res.status(500).send(`${error}`);
  //   }
};

export const TransactionController = {
  createTransaction,
};
