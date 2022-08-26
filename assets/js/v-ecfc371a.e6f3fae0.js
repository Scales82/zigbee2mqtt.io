"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[48036],{90970:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-ecfc371a",path:"/devices/AIRAM-CTR.U.html",title:"Airam AIRAM-CTR.U control via MQTT",lang:"en-US",frontmatter:{title:"Airam AIRAM-CTR.U control via MQTT",description:"Integrate your Airam AIRAM-CTR.U via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Deprecated click event",slug:"deprecated-click-event",children:[]},{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/AIRAM-CTR.U.md",git:{updatedTime:1661526679e3}}},45023:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var i=a(66252);const n=(0,i.uE)('<h1 id="airam-airam-ctr-u" tabindex="-1"><a class="header-anchor" href="#airam-airam-ctr-u" aria-hidden="true">#</a> Airam AIRAM-CTR.U</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>AIRAM-CTR.U</td></tr><tr><td>Vendor</td><td>Airam</td></tr><tr><td>Description</td><td>CTR.U remote</td></tr><tr><td>Exposes</td><td>action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/AIRAM-CTR.U.jpg" alt="Airam AIRAM-CTR.U"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="deprecated-click-event" tabindex="-1"><a class="header-anchor" href="#deprecated-click-event" aria-hidden="true">#</a> Deprecated click event</h3><p>By default this device exposes a deprecated <code>click</code> event. It&#39;s recommended to use the <code>action</code> event instead.</p><p>To disable the <code>click</code> event, set <code>legacy: false</code> for this device in <code>configuration.yaml</code>. Example:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">devices</span><span class="token punctuation">:</span>\n  <span class="token key atrule">&#39;0x12345678&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_device\n    <span class="token key atrule">legacy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Hold small reset button pressed (located under battery cover on the backside of remote) for 4 seconds and device will reset and will attempt to join network. Keep clicking any button on the frontside of the device to keep device awake while pairing. You should be clicking every two seconds until pairing is complete.</p><p>Device seems to join network also when it is paired directly to Airam bulb (which is joined to network already) (https://www.zigbee2mqtt.io/devices/4713407.html) by keeping ON and DIM buttons pressed while holding remote within 5 centimeters away from Airam bulb.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',11),d=(0,i.Uk)("How to use device type specific configuration"),o=(0,i.uE)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_down_click</code>, <code>brightness_up_click</code>, <code>brightness_down_hold</code>, <code>brightness_up_hold</code>, <code>brightness_down_release</code>, <code>brightness_up_release</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',6),s={},c=(0,a(83744).Z)(s,[["render",function(e,t){const a=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[n,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[d])),_:1})])]),o],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);