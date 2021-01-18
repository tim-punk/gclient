import { find,resources,instantiate, Scheduler, UITransform } from "cc";

export class FuncUtil {
    // 弹出文字提示[TODO:注意层级]
    static showTips(msgStr: string) {
        resources.load("prefabs/common/TipsPrefab", function (err:any, prefab: any) {
            const canvas = find("Canvas");
            var tipNd = instantiate(prefab);
            tipNd.parent = canvas;
            var script = tipNd.getComponent('TipCpt');
            script.ShowMsgTip(msgStr);
        });
    }
}