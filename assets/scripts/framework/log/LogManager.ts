import { log,js } from "cc";
import { Singleton } from "../utils/Singleton";


export default class LogManager extends Singleton<LogManager>() {

    private isLog: boolean = true;

    private _getDateString(): string {
        const d = new Date();
        let str = d.getHours() + "";
        let timeStr = "";
        timeStr += (str.length === 1 ? ("0" + str) : str) + ":";

        str = d.getMinutes() + "";
        timeStr += (str.length === 1 ? ("0" + str) : str) + ":";

        str = d.getSeconds() + "";
        timeStr += (str.length === 1 ? ("0" + str) : str) + ".";

        str = d.getMilliseconds() + "";
        if (str.length === 1) { str = "00" + str; }
        if (str.length === 2) { str = "0" + str; }
        timeStr += str;

        timeStr = "[" + timeStr + "]";

        return timeStr;
    }
}
