// auto build by python scriptexport interface IDBModel {     id: number ;     modelRes: string ;     actionList: string[] ;}const tmpDb: {[index: string ]: IDBModel } = {   1: {id: 1, modelRes: "fbx/model1120", actionList: ["attack1,attack2,attack3,attack4,attack5,attack6,attack7,attack8,defend,die,hit1,hit2,idleWar,magic,run,runWar"]},   2: {id: 2, modelRes: "fbx/model1130", actionList: ["attack1,attack2,attack3,attack4,attack5,attack6,attack7,attack8,defend,die,hit1,hit2,idleWar,magic,run,runWar"]},   3: {id: 3, modelRes: "fbx/model1320", actionList: ["attack1,attack2,attack3,attack4,attack5,attack6,attack7,attack8,defend,die,hit1,hit2,idleWar,magic,run,runWar"]},   4: {id: 4, modelRes: "fbx/model1330", actionList: ["attack1,attack2,attack3,attack4,attack5,attack6,attack7,attack8,defend,die,hit1,hit2,idleWar,magic,run,runWar"]},};export const DBModel = {    getDBModelById : (id: string): IDBModel => {        return tmpDb[id];    },    getAllDBModel : () => {        return tmpDb;    },}
