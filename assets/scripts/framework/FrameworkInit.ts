import UIMamager from "./ui/UIManager";
import EventManager from "./event/EventManager";
import AudioManager from "./audio/AudioManager";
import Localization from "./Localization";
import LogManager from "./log/LogManager";

declare global {
    namespace globalThis {
        var UIMgr: UIMamager;
        var EventMgr: EventManager;
        var AudioMgr: AudioManager;
        var Localization: Localization;
        var LogMgr: LogManager;
    }
}

globalThis.UIMgr = UIMamager.instance;
globalThis.EventMgr = EventManager.instance;
globalThis.AudioMgr = AudioManager.instance;
globalThis.Localization = Localization.instance;
// Localization.instance.getText.bind(Localization.instance);
globalThis.LogMgr = LogManager.instance;
// LogManager.instance.log.bind(LogManager.instance);
