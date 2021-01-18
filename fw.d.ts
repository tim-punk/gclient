import { Prefab } from 'cc';

/**
 * @description 全局声明的类
 * @author punk
 * @since 2021-01-18 18:14:48
 */
declare module fw {
    export function log(msg:string):void;
    export function bLog(msg:string):void;
    export module ViewManager{
        export function pushView(name:string,prefab:Prefab,data:any):void;
        export function popView(deptt?:number):void;
    }
    
    //声明本地化相关方法
    export module Localization {
        export function loadText():string;
        export function getText(keyStr: string):string;
    }
}