import { Sprite,SpriteFrame,resources } from "cc";
import { Singleton } from "../utils/Singleton";

export default class UIMamager extends Singleton<UIMamager>() {
    /**
     * @description 加载一个预制体
     * @param pfName 预制体名字
     * @param callBack 回调函数
     */
    public loadPrefab(pfName: string,callBack?: Function) {
        resources.load(pfName, function (err:any, prefab: any) {
            if (err) {
                return;
            }
            if (callBack) {
                callBack(prefab);
            }
        });
    }
    /**
     * @description 加载一张图片并赋值给对应的spriteFrame
     * @param fName 
     * @param cc.Sprite 
     */
    public loadSpriteFrameRes(fName: string,sprite: Sprite) {
        resources.load(fName,SpriteFrame, function (err:any, spriteFrame: any) {
            if (err) {
                return;
            }
            sprite.spriteFrame = spriteFrame;
        });
    }
}
