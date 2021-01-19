import { assetManager } from "cc";
import { Singleton } from "../utils/Singleton";

const _URL = 'http://127.0.0.1/api';

export default class HttpManager extends Singleton<HttpManager>() {

    public async Request(json: any) {
        return new Promise(function(resolve: any,reject: any){
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                // cc.log('xhr.readyState=' + xhr.readyState + '  xhr.status=' + xhr.status);
                if (xhr.readyState === 4 && xhr.status == 200) {
                    let respone = xhr.responseText;
                    let rsp = JSON.parse(respone);
                    return resolve(rsp);
                } 
                // else {
                //     console.log('res---error');
                //     return reject()
                // }
            };
            xhr.onerror = function() {
                return reject();
            }
            xhr.open('POST', _URL, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.timeout = 40000;
            xhr.send(JSON.stringify(json));
        });
    }
}
