
import { _decorator, Component, Node, resources, Prefab, find, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameInit')
export class GameInit extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    start () {
        // Your initialization goes here.
    }
    onLoad () {
        const canvas = find('Canvas');
        resources.load('prefabs/ui/LoginPrefab', Prefab, function (err, asset) {
            const loginNd: any = instantiate(asset);
            loginNd.parent = canvas;
        });
    }
}
