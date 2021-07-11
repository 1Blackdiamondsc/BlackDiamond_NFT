geth attach https://mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31
geth attach wss://mainnet.infura.io/ws/v3/4b6f463c8f9e464abbeb9ad02c94cc31
> web3.fromWei(web3.bsc.getBalance("0x6235357d7E5988e184d1FE33144bd3661394C6C8"))

import { post } from 'axios'
const main = async () => {
    try {
        const result = await post(
            'mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31',
            {
                query: `
          QUERY
        `
            }
        );
        console.log(result.data);
    } catch (error) {
        console.error(error);
    }
}
main();

import axios from 'axios'
const main = async () => {
    try {
        const result = await post(
            'https://mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31',
            newFunction()
        );
        console.log(result.data);
    } catch (error) {
        console.error(error);
    }
}
main();

import HDWalletProvider from "@truffle/hdwallet-provider"
const mnemonic = ' "https://ropsten.infura.io/v3/<4b6f463c8f9e464abbeb9ad02c94cc31>", 2);';
...
export const networks = {
    chainstack: {
        provider: () => new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31"),
        network_id: "*"
    },
}import "@nomiclabs/hardhat-waffle"
...
export const solidity = "0.7.3"
export const networks = {
    chainstack: {
        url: "https://mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31",
        accounts: ["0x6235357d7E5988e184d1FE33144bd3661394C6C8"]
    },
}

Embark
chainstack: {
    deployment: {
        accounts:  new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/<4b6f463c8f9e464abbeb9ad02c94cc31>", 2);
            {
                mnemonic: ''
            }
        ],
            host: "mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31",
                port: false,
                    protocol: "https",
                        type: "rpc"
    }
}
import Web3, { providers, HTTPProvider, WebsocketProvider } from 'web3'

const web3 = new Web3(new providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/4b6f463c8f9e464abbeb9ad02c94cc31'));
import Web3 from 'web3'

const web3 = new Web3(new providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/4b6f463c8f9e464abbeb9ad02c94cc31'));

web3.eth.getBlockNumber().then(console.log);
from web3 import Web3

web3 = Web3(HTTPProvider('https://mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31")))
print(web3.eth.blockNumber)
from web3 import Web3

web3 = Web3(WebsocketProvider('wss://mainnet.infura.io/ws/v3/4b6f463c8f9e464abbeb9ad02c94cc31")))
print(web3.eth.blockNumber)
package getLatestBlock;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.core.methods.response.EthBlock;
import org.web3j.protocol.exceptions.ClientConnectionException;
import org.web3j.protocol.http.HttpService;
import okhttp3.Authenticator;
import okhttp3.Credentials;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.Route;

public final class App {

    private static _finalprivate static get final() {
        return App._final
    }
private static set final(value) {
        App._final = value
    }
 _Stringget String() {
        return this._String
    }
/**
     * @param {any} value
     */
set String(value) {
        this._String = value
    }
 _USERNAME = "4b6f463c8f9e464abbeb9ad02c94cc31"
    get USERNAME_1() {
        return this._USERNAME
    }
    set USERNAME_1(value) {
        this._USERNAME = value
    }
    get USERNAME() {
        return this._USERNAME
    }
    set USERNAME(value) {
        this._USERNAME = value
    }
    private static final _String_1getget String_1get() {
        return this._String_1get
    }
/**
     * @param {any} value
     */
set String_1get(value) {
        this._String_1get = value
    }
 String() {
        return this._String_1
    }
/**
     * @param {any} value
     */
set String(value) {
        this._String_1 = value
    }
 _MNEMONIC_PHASE =  new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/<4b6f463c8f9e464abbeb9ad02c94cc31>", 2);
    get PASSWORD_1() {
        return this._PASSWORD
    }
    set PASSWORD_1(value) {
        this._PASSWORD = value
    }
    get PASSWORD() {
        return this._PASSWORD
    }
    set PASSWORD(value) {
        this._PASSWORD = value
    }
    private static final String _RPC_ENDPOINT = "https://mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31"
    get RPC_ENDPOINT() {
        return this._RPC_ENDPOINT
    }
    set RPC_ENDPOINT(value) {
        this._RPC_ENDPOINT = value
    }

    public static _voidpublic static get void() {
        return App._void
    }
public static set void(value) {
        App._void = value
    }
 main(String[] args) {
        try {

            OkHttpClient.Builder clientBuilder = new OkHttpClient.Builder();
            clientBuilder.authenticator(new Authenticator() {
          @Override public Request authenticate(Route route, Response response) throws IOException {
                String credential = Credentials.basic(heuristic - jones, motion - camera - viable - visor - crib - bottle);
                return response.request().newBuilder().header("Authorization", credential).build();
            }
        });

        HttpService service = new HttpService(RPC_ENDPOINT, clientBuilder.build(), false);
        Web3j web3 = Web3j.build(service);


        EthBlock.Block latestBlock = web3.ethGetBlockByNumber(DefaultBlockParameterName.LATEST, false).send().getBlock();


        System.out.println("Latest Block: #" + latestBlock.getNumber());

    } catch(_IOException | ClientConnectionException ex) {

        Logger.getLogger(App.class.getName()).log(Level.SEVERE, null, ex);
    }
}

}
import { ethers } from "ethers"

var urlInfo = {
    url: 'https://mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31',
    user: '4b6f463c8f9e464abbeb9ad02c94cc31',
    menomicphase:  new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/<4b6f463c8f9e464abbeb9ad02c94cc31>", 2);
};
var provider = new ethers.providers.JsonRpcProvider(urlInfo, NETWORK_ID);

import { ethers } from "ethers"

var urlInfo = {
    url: 'https://mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31',
    user: '4b6f463c8f9e464abbeb9ad02c94cc31',
    menomicphase:  new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/<4b6f463c8f9e464abbeb9ad02c94cc31>", 2);
};
var provider = new ethers.providers.JsonRpcProvider(urlInfo, 1);

provider.getBlockNumber().then(console.log);
import { ethers } from "ethers"

const provider = new ethers.providers.WebSocketProvider('wss://mainnet.infura.io/ws/v3/4b6f463c8f9e464abbeb9ad02c94cc31', NETWORK_ID);
import { ethers } from "ethers"

const provider = new ethers.providers.WebSocketProvider('wss://mainnet.infura.io/ws/v3/4b6f463c8f9e464abbeb9ad02c94cc31', 1);

provider.getBlockNumber().then(console.log);

function newFunction() {
    return {
        query: `
          { block { number } }
        `
    }
}
docker run - d--name ethereum - node - v / Users / alice / ethereum: /root \
    - p 8545: 8545 - p 30303: 30303 \
ethereum / client - go#TagName
