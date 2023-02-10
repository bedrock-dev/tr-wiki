(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{446:function(t,r,e){t.exports=e.p+"assets/img/pw.cca3fbcf.png"},447:function(t,r,e){t.exports=e.p+"assets/img/rsp.d7e5cd90.png"},477:function(t,r,e){"use strict";e.r(r);var a=e(59),s=Object(a.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"安装和使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装和使用"}},[t._v("#")]),t._v(" 安装和使用")]),t._v(" "),a("h2",{attrs:{id:"_0-阅读并同意免责声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-阅读并同意免责声明"}},[t._v("#")]),t._v(" 0. 阅读并同意免责声明")]),t._v(" "),a("p",[t._v("作为用户，你首先需要明确："),a("strong",[t._v("使用trapdoor带来的功能就意味着承担第三方软件带来的风险。"),a("strong",[t._v("为了不给开发者带来不必要的麻烦，请阅读如下的免责声明，如果")]),t._v("你使用了trapdoor就意味着你自动同意了该声明")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-txt extra-class"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[t._v("免责声明\n\ntrapdoor(以下简称tr)是一个利用dll远程注入技术开发的BDS辅助软（插）件，它提供了不少方便玩家的功能，给生电玩家创造了便利。此外，tr本身是开源免费的，内部没有任何恶意代码，原则上也不会对存档造成任何损害。\n\n但是考虑到此类软件的特殊性，开发者无法完全保证tr对用户的存档不造成任何破坏，万一发生意外情况，开发者不会也没有能力对tr对用户\n造成的损失负责。\n\n如果你继续使用tr插件，那么就代表你同意了该声明(或者说叫用户协议)，如果你不想承担此类风险，请停止使用tr插件。\n\n附录： 以下是一些使用建议:\n- 及时更新插件到新版本，因为目前tr还是beta版，理论上越更新bug肯会越少\n- 尽量关闭不用的功能\n- 及时备份存档永远是好习惯\n2022.1.11\n")])])]),a("h2",{attrs:{id:"_1-下载bds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载bds"}},[t._v("#")]),t._v(" 1. 下载BDS")]),t._v(" "),a("p",[t._v("插件是依托于BDS的，因此使用trapdoor之前需要下载BDS。前往"),a("a",{attrs:{href:"https://www.minecraft.net/en-us/download/server/bedrock",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.minecraft.net/en-us/download/server/bedrock"),a("OutboundLink")],1),t._v("下载"),a("strong",[t._v("正确版本")]),t._v("的Windows版的BDS文件，并解压到任意文件夹。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[a("strong",[t._v("文件夹路径中不建议包含中文字符。")])])]),t._v(" "),a("h2",{attrs:{id:"_2-开启loop-back"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-开启loop-back"}},[t._v("#")]),t._v(" 2. 开启Loop back")]),t._v(" "),a("p",[t._v("UWP应用默认关闭了loop back（默认情况下UWP应用无法连接localhost）,你需要开启才能连接本地服务器，"),a("strong",[t._v("如果是云服务器的多人游戏可以省去这一步")]),t._v("。以管理员权限打开"),a("code",[t._v("powershell")]),t._v(",并运行如下命令(该命令来自微软官网):")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("CheckNetIsolation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe LoopbackExempt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p=S-1-15-2-1958404141-86561845-1752920682-3514627264-368642714-62675701-733520436\n")])])]),a("p",[t._v("如果该步骤顺利的话"),a("code",[t._v("powershell")]),t._v('会输出"完成"二字，如下图所示：')]),t._v(" "),a("p",[a("img",{attrs:{src:e(446),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_3-安装liteloaderbds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装liteloaderbds"}},[t._v("#")]),t._v(" 3. 安装LiteLoaderBDS")]),t._v(" "),a("p",[t._v("参考"),a("a",{attrs:{href:"https://github.com/LiteLDev/LiteLoaderBDS#for-windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("LiteLoaderBDS中文安装教程"),a("OutboundLink")],1),t._v("安装服务器对应版本的Liteloader。"),a("strong",[t._v("如遇到LiteloaderBDS相关的问题请前往"),a("a",{attrs:{href:"https://github.com/LiteLDev/LiteLoaderBDS/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("这里进行反馈。而不是找本插件开发者")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"_4-下载并安装插件本体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-下载并安装插件本体"}},[t._v("#")]),t._v(" 4. 下载并安装插件本体")]),t._v(" "),a("ol",[a("li",[t._v("前往"),a("a",{attrs:{href:"https://github.com/hhhxiao/trapdoor-ll/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Trapdoor的下载页面"),a("OutboundLink")],1),t._v("下载发布的release文件")]),t._v(" "),a("li",[a("strong",[t._v("解压下载到的压缩包，把所有文件复制到BDS的根目录即可")]),t._v("这时候相关配置文件的路径如下所示：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("└───bedrock-server-xxx\n  └───plugins\n  \t└───trapdoor-xx-xx.dll\n    └───trapdoor\n         └───config.json\n")])])]),a("h2",{attrs:{id:"_5-配置配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置配置文件"}},[t._v("#")]),t._v(" 5. 配置配置文件")]),t._v(" "),a("p",[t._v("创造服一般可用不配置，生存服可能需要根据需求关闭部分功能(如"),a("code",[t._v("tick")]),t._v("，漏斗计数器等)。具体配置参考配置文件一节。")]),t._v(" "),a("h2",{attrs:{id:"_6-加载材质包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-加载材质包"}},[t._v("#")]),t._v(" 6. 加载材质包")]),t._v(" "),a("p",[t._v("前往"),a("a",{attrs:{href:"https://github.com/OEOTYAN/Trapdoor-CUI/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/OEOTYAN/Trapdoor-CUI/releases"),a("OutboundLink")],1),t._v("下载纹理包，然后客户端加载该纹理包即可("),a("strong",[t._v("不是服务端，是每个玩家都要在本地加载，和普通材质包一样使用")]),t._v(")，加载好的游戏截图如下所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(447),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_7-连接服务器进入游戏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-连接服务器进入游戏"}},[t._v("#")]),t._v(" 7. 连接服务器进入游戏")]),t._v(" "),a("p",[t._v("如果你是本地开服,ip填"),a("code",[t._v("127.0.0.1")]),t._v("或者"),a("code",[t._v("localhost")]),t._v("，如果你用的是云服务器而不是本地，填公网ip即可(不知道的问你们服务器的服主)。端口按照自己的设置在服务器的配置文件里面改，默认"),a("code",[t._v("19132")]),t._v("。")])])}),[],!1,null,null,null);r.default=s.exports}}]);