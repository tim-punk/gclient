
import { _decorator, Component, Node, EditBox, find, Button, log,resources,instantiate,director } from 'cc';
import { IS_DEBUG } from '../../common/Const';
import { FuncUtil } from '../../common/FuncUtil';
import { NetWork } from '../../common/NetWork';
const { ccclass, property } = _decorator;

@ccclass('Login')
export class Login extends Component {
    nameLab: EditBox|any = null;
    passwdLab: EditBox|any = null;

    start () {
        const loginBtn = find('LoginBtn',this.node);
        loginBtn?.getComponent(Button)?.node.on('click',this.LoginClick,this);
        this.nameLab = find('NameNd/EditBox',this.node)?.getComponent(EditBox);
        this.passwdLab = find('PasswdNd/EditBox',this.node)?.getComponent(EditBox);
    }
    onLogin(user: any) {
        log('uuuu:',user);
        if(user.roles.length <= 0 ) {
            const self = this;
            resources.load('prefab/ui/RoleNd', function (err: any, prefab: any) {
                var tipNd = instantiate(prefab);
                tipNd.parent = find('Canvas');
                self.node.removeFromParent();
            });
        }else {
            this.loadMainScene();
        }
    }
    loadMainScene () {
        director.preloadScene("MainScene", function () {
            director.loadScene("MainScene");
        });
    }
    LoginClick() {
        if (IS_DEBUG) {
            this.loadMainScene();
            return;
        }
        const reg = new RegExp('^[a-zA-Z0-9_]{2,8}$');
        const login = this.nameLab.string || '';
        const pwd = this.passwdLab.string || '';
        log("账号：%s 密码：%s",login,pwd);
        if (login == '' || pwd == '') {
            FuncUtil.showTips('请输入账号及密码!');
            return;
        }
        if (!reg.test(login) || !reg.test(pwd) ) {
            FuncUtil.showTips('只能输入长度为2~6的英文及数字!');
            return;
        }
        const query  = {query:`query{login(user:{id:"${login}",passwd:"${pwd}"}){id nickName roles{id roleId}}}`};
        NetWork.RequestMsg(query)
        .then((resp: any)=>{
            if (resp.errors) {
                const errMsg = resp.errors[0].message;
                if (errMsg == 'passwd error') {
                    FuncUtil.showTips('密码错误');
                }else if(errMsg == 'user not exit'){
                    // 直接拿账号密码注册
                    const mutation  = {query:`mutation{addUser(user:{id:"${login}",passwd:"${pwd}"}){id nickName roles{id}}}`};
                    NetWork.RequestMsg(mutation)
                    .then((r: any)=>{
                        if (!r.errors && r.data.addUser) {
                            FuncUtil.showTips('注册成功!');
                            this.onLogin(r.data.addUser)
                        }else {
                            FuncUtil.showTips('注册失败(账号已存在)!');
                        }
                    })
                }else {
                    FuncUtil.showTips('服务器异常!' + errMsg);
                }
            }else{
                if (resp.data) {
                    this.onLogin(resp.data.login[0])
                }else {
                    FuncUtil.showTips('账号不存在');
                }
            }
        })
    }
}
