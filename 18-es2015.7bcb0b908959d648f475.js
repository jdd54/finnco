(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"3A9U":function(e,n,o){"use strict";o.r(n),o.d(n,"SettingsPageModule",function(){return d});var t=o("ofXK"),a=o("3Pt+"),i=o("TEn/"),l=o("tyNb"),s=o("5Pvz"),r=o("s3a0"),c=o("fXoL");const b=[{path:"",component:(()=>{class e{constructor(e){this.settingService=e}ngOnInit(){const e=this.settingService.settings;e&&(this.selectedAppLanguage=e[s.a.APPLANGUAGE_SETTING_KEY],this.selectedTranslateLanguage=e[s.a.TRANSLATE_LANGUAGE_SETTING_KEY],this.selectedColorBlindMode=e[s.a.COLOR_BLIND_MODE_SETTING_KEY],this.selectedColorGrayscaleMode=e[s.a.COLOR_GRAYSCALE_MODE_SETTING_KEY])}onAppLanguageChange(){this.settingService.update(s.a.APPLANGUAGE_SETTING_KEY,this.selectedAppLanguage)}onTranslateLanguageChange(){this.settingService.update(s.a.TRANSLATE_LANGUAGE_SETTING_KEY,this.selectedTranslateLanguage)}onColorBlindModeChange(){this.settingService.update(s.a.COLOR_BLIND_MODE_SETTING_KEY,this.selectedColorBlindMode),this.settingService.applyBlindColorChange()}onColorGrayscaleModeChange(){this.settingService.update(s.a.COLOR_GRAYSCALE_MODE_SETTING_KEY,this.selectedColorGrayscaleMode),this.settingService.applyGrayscaleColorChange()}}return e.\u0275fac=function(n){return new(n||e)(c.Hb(r.a))},e.\u0275cmp=c.Bb({type:e,selectors:[["app-settings"]],decls:37,vars:6,consts:[["slot","start"],["mode","ios"],["slot","end",3,"ngModel","disabled","ngModelChange","ionChange"],["placeholder","Select One","value","en",3,"ngModel","ngModelChange","ionChange"],["value","en","selected",""],["placeholder","Select One","value","en","disabled","",3,"ngModel","ngModelChange","ionChange"]],template:function(e,n){1&e&&(c.Kb(0,"ion-header"),c.Kb(1,"ion-toolbar"),c.Kb(2,"ion-buttons",0),c.Ib(3,"ion-menu-button",1),c.Jb(),c.Kb(4,"ion-title"),c.Kb(5,"b"),c.ic(6,"Settings"),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Kb(7,"ion-content"),c.Kb(8,"ion-list"),c.Kb(9,"ion-list-header"),c.Kb(10,"h3"),c.Kb(11,"strong"),c.ic(12,"Color Accessibility"),c.Jb(),c.Jb(),c.Jb(),c.Kb(13,"ion-item"),c.Kb(14,"ion-label"),c.ic(15,"Grayscale mode "),c.Jb(),c.Kb(16,"ion-toggle",2),c.Sb("ngModelChange",function(e){return n.selectedColorGrayscaleMode=e})("ionChange",function(){return n.onColorGrayscaleModeChange()}),c.Jb(),c.Jb(),c.Kb(17,"ion-item"),c.Kb(18,"ion-label"),c.ic(19,"Red/Green color blind mode "),c.Jb(),c.Kb(20,"ion-toggle",2),c.Sb("ngModelChange",function(e){return n.selectedColorBlindMode=e})("ionChange",function(){return n.onColorBlindModeChange()}),c.Jb(),c.Jb(),c.Kb(21,"ion-list-header"),c.Kb(22,"h3"),c.Kb(23,"strong"),c.ic(24,"Language"),c.Jb(),c.Jb(),c.Jb(),c.Kb(25,"ion-item"),c.Kb(26,"ion-label"),c.ic(27,"Application language"),c.Jb(),c.Kb(28,"ion-select",3),c.Sb("ngModelChange",function(e){return n.selectedAppLanguage=e})("ionChange",function(){return n.onAppLanguageChange()}),c.Kb(29,"ion-select-option",4),c.ic(30,"English"),c.Jb(),c.Jb(),c.Jb(),c.Kb(31,"ion-item"),c.Kb(32,"ion-label"),c.ic(33,"Translations language"),c.Jb(),c.Kb(34,"ion-select",5),c.Sb("ngModelChange",function(e){return n.selectedTranslateLanguage=e})("ionChange",function(){return n.onTranslateLanguageChange()}),c.Kb(35,"ion-select-option",4),c.ic(36,"English"),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb()),2&e&&(c.xb(16),c.Xb("ngModel",n.selectedColorGrayscaleMode)("disabled",n.selectedColorBlindMode),c.xb(4),c.Xb("ngModel",n.selectedColorBlindMode)("disabled",n.selectedColorGrayscaleMode),c.xb(8),c.Xb("ngModel",n.selectedAppLanguage),c.xb(6),c.Xb("ngModel",n.selectedTranslateLanguage))},directives:[i.l,i.F,i.f,i.t,i.D,i.i,i.q,i.r,i.o,i.p,i.E,i.c,a.f,a.g,i.x,i.O,i.y],styles:["ion-toolbar[_ngcontent-%COMP%]{--background:#387ef5!important}ion-menu-button[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{--color:#fff!important}"]}),e})()}];let g=(()=>{class e{}return e.\u0275mod=c.Fb({type:e}),e.\u0275inj=c.Eb({factory:function(n){return new(n||e)},imports:[[l.i.forChild(b)],l.i]}),e})(),d=(()=>{class e{}return e.\u0275mod=c.Fb({type:e}),e.\u0275inj=c.Eb({factory:function(n){return new(n||e)},imports:[[t.b,a.c,i.G,g]]}),e})()}}]);