import CCAuraSkill from "./caocao/CCAuraSkill";
import CCBigSkill from "./caocao/CCBigSkill";
import CCNormalSkill from "./caocao/CCNormalSkill";
import CCPassiveSkill from "./caocao/CCPassiveSkill";
import CCSmallSkill from "./caocao/CCSmallSkill";

import DWAuraSkill from "./dianwei/DWAuraSkill";
import DWBigSkill from "./dianwei/DWBigSkill";
import DWNormalSkill from "./dianwei/DWNormalSkill";
import DWPassiveSkill from "./dianwei/DWPassiveSkill";
import DWSmallSkill from "./dianwei/DWSmallSkill";

/**
 * @class AiConst
 * @author YeXiao
 * @description Ai技能扩展类，用于记录需要的技能脚本。理论上这个文件是自动生成的，
 * 当导表工具生成的时候，自动生成这里面的方法
 * @since 2019-3-17 11:57:12
 */
export default class AiConst {
    // 曹操技能
    public static readonly CCNormalSkill = CCNormalSkill;
    public static readonly CCSmallSkill = CCSmallSkill;
    public static readonly CCAuraSkill = CCAuraSkill;
    public static readonly CCBigSkill = CCBigSkill;
    public static readonly CCPassiveSkill = CCPassiveSkill;
    // 典韦技能
    public static readonly DWNormalSkill = DWNormalSkill;
    public static readonly DWSmallSkill = DWSmallSkill;
    public static readonly DWAuraSkill = DWAuraSkill;
    public static readonly DWBigSkill = DWBigSkill;
    public static readonly DWPassiveSkill = DWPassiveSkill;
}
