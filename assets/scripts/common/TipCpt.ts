import { _decorator, Component, find, Color, tween,v3, Label, Sprite} from "cc";
const { ccclass, property } = _decorator;

@ccclass("TipCpt")
export class TipCpt extends Component {
    msgLab: Label|any = null;
    onLoad () {
        this.msgLab = find('MsgLab',this.node)?.getComponent(Label);
    }
    // 展示tip
    ShowMsgTip(msgStr: string) {
        const height = 300;
        this.msgLab.string  = msgStr;
        this.node.position = v3(0,height,this.node.position.z);
        tween(this.node)
        .delay(1)
        .to(1,{position:v3(0,height + 200,this.node.position.z)},{easing: 'fade'})
        .removeSelf()
        .start();

        var color = new Color(255,255,255,10);
        tween(this.node.getComponent(Sprite))
        .delay(1)
        .to(0.9,{ color:color})
        .start();
    }
}
