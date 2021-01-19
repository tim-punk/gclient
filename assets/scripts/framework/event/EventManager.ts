import { Singleton } from "../utils/Singleton";

interface IEvent {
    eventType: string;
    thisObject: any;
    callback: (data: any) => void;
}
/**
 * @author punk
 * @description 事件单例
 */
export default class EventManager extends Singleton<EventManager>() {
    private eventList: {[key: string]: IEvent[]} = {};
    /**
     * - 添加一个事件监听
     * @param eventType 事件类型
     * @param callback 回调方法
     * @param thisObject 监听对象
     */
    public addEventListener(eventType: string, callback: any, thisObject: any) {
        if (!eventType || !callback) {
            return;
        }
        const tmpArr: IEvent[] = this.eventList[eventType] || [];
        for (const iterator of tmpArr) {
            if (iterator.thisObject && thisObject) {
                if (iterator.thisObject === thisObject) {
                    return
                }
            }
        }
        const ievent: IEvent = {
            eventType,
            thisObject,
            callback,
        };
        tmpArr.push(ievent);
        this.eventList[eventType] = tmpArr;
    }
    /**
     * - 事件分发
     */
    public dispatchEvent(eventType: string, params?: any) {
        if (!eventType) {
            return;
        }
        const tmpArr: IEvent[] = this.eventList[eventType] || [];
        for (const iterator of tmpArr) {
            if (iterator.thisObject) {
                // 在回调的时候, 不要直接func(agrs) 而是改成 func.call(目标对象, args)
                iterator.callback.call(iterator.thisObject, params);
            }
        }
    }
    /**
     * - 移除一个事件监听
     * @param eventType
     * @param callback
     * @param thisObject 监听对象
     */
    public removeEventListener(eventType: string, callback: any, thisObject: any) {
        if (!eventType || !callback) {
            return;
         }
        const tmpArr: IEvent[]  = this.eventList[eventType] || [];

        for (let i = 0; i < tmpArr.length; i++) {
             if (tmpArr[i].thisObject === thisObject) {
                tmpArr.splice(i, 1);
                break;
             }
         }
        if (tmpArr.length === 0) {
             delete this.eventList[eventType];
         }
    }
}
