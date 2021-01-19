import { Singleton } from "./utils/Singleton";

/**
 * @author punk
 * @description 本地化
 *
 */
export default class Localization extends Singleton<Localization>() {
    private jsonData: string[] = [];
    
    public loadText() {
        // 初始化多语言文件
    }
    public getText(keyStr: any) {
        return this.jsonData[keyStr];
    }
}
