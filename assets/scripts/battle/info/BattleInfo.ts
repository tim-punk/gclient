import {ECamp, EGameMode, EUserType} from "../utils/UtilsEnum";
/**
 * @class BattleInfo
 * @author YeXiao
 * @description 进战斗对应的json数据对象
 * @since 2019-3-12 17:15:30
 *
 */
/**
 * @interface 进战斗卡牌数据
 */
export interface IHeroInfo {
    readonly hId: number;
    readonly level: number;
    readonly star: number;
    readonly quality: number;
    readonly posIdx: number; // 对应的位置
}
/**
 * @interface 进战斗玩家数据
 */
export interface IUserInfo {
    readonly userId: number;
    readonly userName: string;
    readonly userType: EUserType;
    readonly camp: ECamp;
    readonly heros: IHeroInfo[];
    readonly robotId?: number; // 当 userType = EUserType.robot时有值
}
/**
 * @interface 进战斗战场数据
 */
export interface IBattleInfo {
    readonly battleId: number;
    readonly randomSeed: number;
    readonly gameMode: EGameMode;
    readonly userId: number;
    readonly users: IUserInfo[];
}
