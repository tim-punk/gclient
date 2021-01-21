import ModelBase from "../ModelBase";

/**
 * @author punk
 * @description 角色模型中的基础组件、采用ecs模式，使用事件分发
 *
 */
export default class BaseComponent {
    private model: ModelBase = null!; // 对应的角色模型
    constructor(model: ModelBase) {
        this.model = model;
    }
    get Model() {
        return this.model;
    }
}
