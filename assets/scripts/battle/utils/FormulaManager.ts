import { Singleton } from "../../framework/utils/Singleton";
import { IDamageInfo } from "../info/DamageInfo";
import {SkillInfo} from "../info/SkillInfo";
import ModelBase from "../model/ModelBase";

/**
 * @author punk
 * @description 战斗公式单例
 *
 */
export default class FormulaManager extends Singleton<FormulaManager>() {
    /**
     * 获取技能伤害值
     */
    public getSkillDamage(atkerMd: ModelBase, deferMd: ModelBase, skill: SkillInfo): IDamageInfo {
        const dmgInfo: IDamageInfo = {damage: 10, isCrit: false, isHit: true, isKilled: false};
        return dmgInfo;
    }
}
