import {IBattleInfo} from "../info/BattleInfo";
import LogsManager from "../utils/LogsManager";
import GameCtrl from "./GameCtrl";
import HandleCtrl from "./HandleCtrl";
import LevelCtrl from "./LevelCtrl";
import LogicCtrl from "./LogicCtrl";
import RandomCtrl from "./RandomCtrl";
import { EGameType, EGameResult } from "../utils/UtilsEnum";

/**
 * @class BattleCtrl
 * @author YeXiao
 * @description 战斗总控制器、用于处理战斗逻辑
 * @since 2019-3-12 17:15:08
 *
 */
export default class BattleCtrl {
    private readonly batleInfo: IBattleInfo = null; // 进战斗数据
    private randomCtrl: RandomCtrl = null; // 随机种子处理
    private gameCtrl: GameCtrl = null;
    private levelCtrl: LevelCtrl = null;
    private logicCtrl: LogicCtrl = null;
    private handleCtrl: HandleCtrl = null;
    private gameType: EGameType = EGameType.dummy;
    private battleResult: EGameResult = null; //战斗结束与否

    constructor(bInfo: IBattleInfo, gType?: EGameType) {
        if (gType) {
            this.gameType = gType;
        }
        this.batleInfo = bInfo;
        // 在日志控制器里面装载battleCtrl
        LogsManager.getInstance().setBattleCtrl( this);
        
        this.randomCtrl = new RandomCtrl( this.batleInfo.randomSeed);
        this.levelCtrl = new LevelCtrl( this);
        this.gameCtrl = new GameCtrl( this);
        this.logicCtrl = new LogicCtrl( this);
        this.handleCtrl = new HandleCtrl( this);
    }
    public startOneBattle() {
        this.gameCtrl.startBattle();
    }
    /**
     * - 更新战斗结束状态
     * @params bResult
     */
    updateBattleResult(bResult: EGameResult) {
        this.battleResult = bResult;
    }
    /**
     * @description 存储战报
     */
    saveBattleReport(rtList: any) {
        LogsManager.getInstance().dumpBattleReport(rtList);
    }
    /**
     * - 获取游戏模式
     */
    get GameType(): EGameType {
        return this.gameType;
    }
    /**
     * @description 获取进战斗时的数据
     * @returns batleInfo
     */
    get BattleInfo(): IBattleInfo {
        return this.batleInfo;
    }
    /**
     * @description 获取关卡控制器
     * @returns levelCtrl
     */
    get LevelCtrl() {
        return this.levelCtrl;
    }
    /**
     * @description 获取游戏控制器
     * @returns gameCtrl
     */
    get GameCtrl() {
        return this.gameCtrl;
    }
    /**
     * @description 获取逻辑控制器
     * @returns logicCtrl
     */
    get LogicCtrl() {
        return this.logicCtrl;
    }
    /**
     * @description 获取随机种子控制器
     * @returns randomCtrl
     */
    get RandomCtrl() {
        return this.randomCtrl;
    }
    /**
     * @description 获取出手控制器
     * @returns handleCtrl
     */
    get HandleCtrl() {
        return this.handleCtrl;
    }
}
