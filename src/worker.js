(function(_0x34ee1a,_0x47c47b){const _0x386fd9=_0x52b5,_0x46de72=_0x34ee1a();while(!![]){try{const _0x630ad1=parseInt(_0x386fd9(0xaf))/0x1+parseInt(_0x386fd9(0xae))/0x2*(parseInt(_0x386fd9(0xb6))/0x3)+parseInt(_0x386fd9(0xc0))/0x4+parseInt(_0x386fd9(0xc1))/0x5*(-parseInt(_0x386fd9(0xb3))/0x6)+parseInt(_0x386fd9(0xc3))/0x7+-parseInt(_0x386fd9(0xba))/0x8*(parseInt(_0x386fd9(0xb9))/0x9)+-parseInt(_0x386fd9(0xc4))/0xa;if(_0x630ad1===_0x47c47b)break;else _0x46de72['push'](_0x46de72['shift']());}catch(_0x204415){_0x46de72['push'](_0x46de72['shift']());}}}(_0x4a86,0xed111));import{initializeParams}from'./helpers/init';import{vlessOverWSHandler}from'./protocols/vless';import{trojanOverWSHandler}from'./protocols/trojan';import{updateWarpConfigs}from'./kv/handlers';function _0x52b5(_0x4157f4,_0x5053e4){const _0x4a86ae=_0x4a86();return _0x52b5=function(_0x52b563,_0x1d6e9b){_0x52b563=_0x52b563-0xac;let _0x5b90d8=_0x4a86ae[_0x52b563];return _0x5b90d8;},_0x52b5(_0x4157f4,_0x5053e4);}import{logout,resetPassword,login}from'./authentication/auth';import{renderErrorPage}from'./pages/error';import{getXrayCustomConfigs,getXrayWarpConfigs}from'./cores-configs/xray';import{getSingBoxCustomConfig,getSingBoxWarpConfig}from'./cores-configs/sing-box';import{getClashNormalConfig,getClashWarpConfig}from'./cores-configs/clash';import{getNormalConfigs}from'./cores-configs/normalConfigs';function _0x4a86(){const _0x2a7274=['48237JnWloR','/update-warp','startsWith','72gRJDiL','476704qrNjXI','sfa','/logout','clash','userID','websocket','907516aqSMEP','20cjMQoT','/panel/password','5147450QeDOIy','6007330axdQZx','/my-ip','/secrets','singbox','50ERlZaA','727630lnxLRr','client','get','hiddify','65058eBgVsm','/tr','/sub/'];_0x4a86=function(){return _0x2a7274;};return _0x4a86();}import{fallback,getMyIP,handlePanel}from'./helpers/helpers';import{renderSecretsPage}from'./pages/secrets';export default{async 'fetch'(_0x1c44b9,_0x2e647e){const _0x2ca668=_0x52b5;try{initializeParams(_0x1c44b9,_0x2e647e);const _0x1fef13=_0x1c44b9['headers'][_0x2ca668(0xb1)]('Upgrade');if(!_0x1fef13||_0x1fef13!==_0x2ca668(0xbf))switch(globalThis['pathName']){case _0x2ca668(0xb7):return await updateWarpConfigs(_0x1c44b9,_0x2e647e);case _0x2ca668(0xb5)+globalThis[_0x2ca668(0xbe)]:if(globalThis[_0x2ca668(0xb0)]===_0x2ca668(0xbb))return await getSingBoxCustomConfig(_0x1c44b9,_0x2e647e,![]);if(globalThis[_0x2ca668(0xb0)]==='clash')return await getClashNormalConfig(_0x1c44b9,_0x2e647e);if(globalThis['client']==='xray')return await getXrayCustomConfigs(_0x1c44b9,_0x2e647e,![]);return await getNormalConfigs(_0x1c44b9,_0x2e647e);case'/fragsub/'+globalThis['userID']:return globalThis[_0x2ca668(0xb0)]==='hiddify'?await getSingBoxCustomConfig(_0x1c44b9,_0x2e647e,!![]):await getXrayCustomConfigs(_0x1c44b9,_0x2e647e,!![]);case'/warpsub/'+globalThis['userID']:if(globalThis[_0x2ca668(0xb0)]===_0x2ca668(0xbd))return await getClashWarpConfig(_0x1c44b9,_0x2e647e);if(globalThis[_0x2ca668(0xb0)]===_0x2ca668(0xad)||globalThis['client']===_0x2ca668(0xb2))return await getSingBoxWarpConfig(_0x1c44b9,_0x2e647e,globalThis['client']);return await getXrayWarpConfigs(_0x1c44b9,_0x2e647e,globalThis[_0x2ca668(0xb0)]);case'/panel':return await handlePanel(_0x1c44b9,_0x2e647e);case'/login':return await login(_0x1c44b9,_0x2e647e);case _0x2ca668(0xbc):return logout();case _0x2ca668(0xc2):return await resetPassword(_0x1c44b9,_0x2e647e);case _0x2ca668(0xc5):return await getMyIP(_0x1c44b9);case _0x2ca668(0xac):return await renderSecretsPage();default:return await fallback(_0x1c44b9);}else return globalThis['pathName'][_0x2ca668(0xb8)](_0x2ca668(0xb4))?await trojanOverWSHandler(_0x1c44b9):await vlessOverWSHandler(_0x1c44b9);}catch(_0x257eca){return await renderErrorPage(_0x257eca);}}};
