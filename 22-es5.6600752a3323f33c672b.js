!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{ysJF:function(n,i,o){"use strict";o.r(i),o.d(i,"ExercisemenuPageModule",function(){return m});var s=o("ofXK"),r=o("3Pt+"),c=o("tyNb"),a=o("TEn/"),b=o("qQr3"),u=o("yuQg"),g=o("AeRP"),l=o("fXoL"),p=o("qlzE");function _(e,t){if(1&e){var n=l.Lb();l.Kb(0,"ion-item",3),l.Sb("click",function(){l.cc(n);var e=t.$implicit,i=t.index;return l.Ub().goTo(3,e-1,i)}),l.Kb(1,"p",4),l.Kb(2,"b"),l.ic(3),l.Jb(),l.Kb(4,"span",5),l.ic(5," medium "),l.Jb(),l.Jb(),l.Jb()}if(2&e){var i=t.$implicit;l.xb(3),l.kc("Exercise ",i,"")}}function v(e,t){if(1&e){var n=l.Lb();l.Kb(0,"ion-item",3),l.Sb("click",function(){l.cc(n);var e=t.$implicit,i=t.index;return l.Ub().goTo(2,e-1,i)}),l.Kb(1,"p",4),l.Kb(2,"b"),l.ic(3),l.Jb(),l.Kb(4,"span",5),l.ic(5," medium "),l.Jb(),l.Jb(),l.Jb()}if(2&e){var i=t.$implicit;l.xb(3),l.kc("Exercise ",i,"")}}function d(e,t){if(1&e){var n=l.Lb();l.Kb(0,"ion-item",3),l.Sb("click",function(){l.cc(n);var e=t.$implicit,i=t.index;return l.Ub().goTo(1,e-1,i)}),l.Kb(1,"p",4),l.Kb(2,"b"),l.ic(3),l.Jb(),l.Kb(4,"span",5),l.ic(5," medium "),l.Jb(),l.Jb(),l.Jb()}if(2&e){var i=t.$implicit;l.xb(3),l.kc("Exercise ",i,"")}}var f,h,x=[{path:"",component:(f=function(){function n(t,i,o,s,r){e(this,n),this.router=t,this.http=i,this.currentView=o,this.stateService=s,this.keyboardService=r,this.group_ex_verb_list={},this.verb_conjug_list={},this.lesson_conjug_list=[],this.lesson_vb_group_list=[],this.lesson_sentence_conjug_list=[],this.page_title=""}var i,o,s;return i=n,(o=[{key:"ngOnInit",value:function(){var e=this,t=this.stateService.get("currentExercise");t&&this.router.navigate([t]),this.http.get("assets/data/lessons_verb_group.json").subscribe(function(t){var n;for(e.group_ex_verb_list=JSON.parse(t._body),n=0;n<e.group_ex_verb_list.lessons.length;n++)e.lesson_vb_group_list[n]=n+1}),this.http.get("assets/data/lessons_conjugaison.json").subscribe(function(t){var n;for(e.verb_conjug_list=JSON.parse(t._body),n=0;n<e.verb_conjug_list.lessons.length;n++)e.lesson_conjug_list[n]=n+1}),this.http.get("assets/data/lessons_conjugaison_sentences.json").subscribe(function(t){var n;for(e.sentence_conjug_list=JSON.parse(t._body),n=0;n<e.sentence_conjug_list.lessons.length;n++)e.lesson_sentence_conjug_list[n]=n+1})}},{key:"goTo",value:function(e,t,n){var i;switch(t+=1,e){case 1:var o=t;this.router.navigate(["exercise-verb-group/"+o]),(i=this.stateService.get("currentExercise"))&&-1==i.indexOf("exercise-verb-group/"+o)&&localStorage.removeItem("progressInExercise"),this.stateService.store("currentExercise","exercise-verb-group/"+o),this.page_title="Exverbgroup"+t;break;case 2:var s=t;this.router.navigate(["exercise-conjugation/"+s]),(i=this.stateService.get("currentExercise"))&&-1==i.indexOf("exercise-conjugation/"+s)&&localStorage.removeItem("progressInExercise"),this.stateService.store("currentExercise","exercise-conjugation/"+s),this.page_title="Exconjug"+t;break;case 3:var r=t;this.router.navigate(["exercise-conjugation-in-sentences/"+r]),(i=this.stateService.get("currentExercise"))&&-1==i.indexOf("exercise-conjugation-in-sentences/"+r)&&localStorage.removeItem("progressInExercise"),this.stateService.store("currentExercise","exercise-conjugation-in-sentences/"+r),this.page_title="ExcerciseSentences"+t}this.currentView.currentPageTitle=this.page_title}}])&&t(i.prototype,o),s&&t(i,s),n}(),f.\u0275fac=function(e){return new(e||f)(l.Hb(c.g),l.Hb(p.a),l.Hb(b.a),l.Hb(u.a),l.Hb(g.a))},f.\u0275cmp=l.Bb({type:f,selectors:[["app-exercisemenu"]],decls:20,vars:3,consts:[["slot","start"],["mode","ios"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"lesson-title"],["slot","end",1,"level-ex","ion-padding-start"]],template:function(e,t){1&e&&(l.Kb(0,"ion-header"),l.Kb(1,"ion-toolbar"),l.Kb(2,"ion-buttons",0),l.Ib(3,"ion-menu-button",1),l.Jb(),l.Kb(4,"ion-title"),l.Kb(5,"b"),l.ic(6,"Exercises Menu"),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Kb(7,"ion-content"),l.Kb(8,"ion-item"),l.Kb(9,"h1"),l.ic(10,"Sentences Conjugation"),l.Jb(),l.Jb(),l.hc(11,_,6,1,"ion-item",2),l.Kb(12,"ion-item"),l.Kb(13,"h1"),l.ic(14,"Individual Conjugation"),l.Jb(),l.Jb(),l.hc(15,v,6,1,"ion-item",2),l.Kb(16,"ion-item"),l.Kb(17,"h1"),l.ic(18,"Verb Groups"),l.Jb(),l.Jb(),l.hc(19,d,6,1,"ion-item",2),l.Jb()),2&e&&(l.xb(11),l.Xb("ngForOf",t.lesson_sentence_conjug_list),l.xb(4),l.Xb("ngForOf",t.lesson_conjug_list),l.xb(4),l.Xb("ngForOf",t.lesson_vb_group_list))},directives:[a.l,a.F,a.f,a.t,a.D,a.i,a.o,s.i],styles:["ion-toolbar[_ngcontent-%COMP%]{--background:#387ef5!important}ion-menu-button[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{--color:#fff!important}.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;font-size:.8rem}.tabbed[_ngcontent-%COMP%]{font-size:.9rem;padding:0 15px 0 25px}h1[_ngcontent-%COMP%]{margin-top:20px;font-size:25px!important}.sc-ion-card-ios-h[_ngcontent-%COMP%]{color:#000!important;-webkit-box-shadow:0 2px 6px rgba(0,0,0,.1)}.btn-style[_ngcontent-%COMP%]{padding:5px;border:1px solid #0aa8e7!important;background:transparent!important;color:#0aa8e7!important;border-radius:5px!important}.ion-padding-start[_ngcontent-%COMP%], [padding-start][_ngcontent-%COMP%]{padding-left:unset;-webkit-padding-start:var(--ion-padding,20px);padding-inline-start:var(--ion-padding,226px)!important}"]}),f)}],m=((h=function t(){e(this,t)}).\u0275mod=l.Fb({type:h}),h.\u0275inj=l.Eb({factory:function(e){return new(e||h)},imports:[[s.b,r.c,a.G,c.i.forChild(x)]]}),h)}}])}();