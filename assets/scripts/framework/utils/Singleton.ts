/**
 * @author punk
 * @description 单例，可继承
 */
export function Singleton<E>() {
    class SingletonE {
        protected constructor() {}
        private static _inst: SingletonE = null!;
        public static get instance(): E {
            if(SingletonE._inst == null) {
                SingletonE._inst = new this();
            }
            return SingletonE._inst as E;
        }
    }

    return SingletonE;
}