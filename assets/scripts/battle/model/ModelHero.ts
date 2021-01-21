import GameCtrl from "../controller/GameCtrl";
import {HeroInfo} from "../info/HeroInfo";
import ModelBase from "../model/ModelBase";
import LogsManager from "../utils/LogsManager";

/**
 * @author punk
 * @description 战场上卡牌对象，负责攻击相关处理（目前暂时无用、感觉继承不太好，应该用组合）
 *
 */
export default class ModelHero extends ModelBase {
    constructor(controler: GameCtrl, heroInfo: HeroInfo) {
        super(controler, heroInfo);
        LogsManager.instance.log("初始化 " + heroInfo.HeroDB.name + " 的数据 " + "[camp:" + heroInfo.HeroAttr.camp
                + " hp:" + heroInfo.HeroAttr.hp + " atk:" + heroInfo.HeroAttr.phyAtk + " def:" + heroInfo.HeroAttr.phyDef
                + " speed:" + heroInfo.HeroAttr.atkSpeed + " crit" + heroInfo.HeroAttr.crit + " pos:" + heroInfo.HeroAttr.posIdx + "]");
        // heroInfo.printLogInfo();
    }
}
