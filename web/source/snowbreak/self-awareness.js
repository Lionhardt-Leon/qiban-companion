// One shared schedule for existing renderers. Explicit screen questions refresh
// the screenshot immediately; off remains off. No model/API call lives here.
export function createSelfAwarenessGate(){let counter=0;return (mode,text='')=>{if(mode==='off')return false;if(mode==='always')return true;counter++;return /(?:屏幕|画面|现在.*(?:穿|样子|有什么)|看(?:到|看).*(?:我|模型|角色))/.test(text)||counter%4===0;};}
