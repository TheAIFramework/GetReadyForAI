"use strict";(self.webpackChunkAI_Maturity_Assessment=self.webpackChunkAI_Maturity_Assessment||[]).push([[790],{4286:(b,d,r)=>{r.d(d,{S:()=>a});var a=(()=>{return(g=a||(a={}))[g.Agree=1]="Agree",g[g.FreeText=2]="FreeText",a;var g})()},2790:(b,d,r)=>{r.r(d),r.d(d,{TestModule:()=>I});var a=r(9808),g=r(4132),u=r(4286),l=r(5101),i=r(3075),w=r(5698),f=r(8746),n=r(7587),m=r(8161),p=r(9288);function C(e,s){if(1&e){const t=n.EpF();n.TgZ(0,"a",12),n.NdJ("click",function(){return n.CHM(t),n.oxw(2).backStep()}),n._UZ(1,"img",13),n._uU(2),n.qZA()}if(2&e){const t=n.oxw(2);n.xp6(2),n.hij(" Go back to ",t.prevStepTitle," ")}}const O=function(e){return{width:e}};function h(e,s){if(1&e){const t=n.EpF();n.TgZ(0,"div",14),n.NdJ("click",function(){const _=n.CHM(t).index;return n.oxw(2).goToStep(_)}),n.TgZ(1,"h6",15),n._uU(2),n.qZA(),n._UZ(3,"div",16),n.qZA()}if(2&e){const t=s.$implicit,o=s.index,c=n.oxw(2);n.ekj("active",c.activeStepIdx===o),n.xp6(2),n.Oqu(t.title),n.xp6(1),n.Q6J("ngStyle",n.VKq(4,O,c.getStepProgressWidthByIdx(o)))}}function M(e,s){if(1&e&&(n.TgZ(0,"label",28),n._uU(1),n.qZA()),2&e){const t=s.index,o=n.oxw(2).index;n.Q6J("for","q_"+o+"answer_"+t),n.xp6(1),n.Oqu(t+1)}}function P(e,s){if(1&e&&(n.TgZ(0,"div"),n._UZ(1,"input",29)(2,"label",30),n.qZA()),2&e){const t=s.$implicit,o=s.index,c=n.oxw(2).index;n.xp6(1),n.Q6J("id","q_"+c+"answer_"+o)("value",o+1),n.xp6(1),n.Q6J("for","q_"+c+"answer_"+o)("ngClass",t.className)}}function v(e,s){if(1&e&&(n.TgZ(0,"label",32),n._uU(1),n.qZA()),2&e){const t=n.oxw(),o=t.index,c=t.$implicit,_=n.oxw(2).index;n.Q6J("for","q_"+_+"answer_"+o),n.xp6(1),n.Oqu(c.text)}}function x(e,s){if(1&e&&(n.ynx(0),n.YNc(1,v,2,2,"label",31),n.BQk()),2&e){const t=s.$implicit;n.xp6(1),n.Q6J("ngIf",t.text)}}function k(e,s){if(1&e&&(n.TgZ(0,"div",23)(1,"div",24),n.YNc(2,M,2,2,"label",25),n.qZA(),n.TgZ(3,"div",26),n.YNc(4,P,3,4,"div",27),n.qZA(),n.TgZ(5,"div",24),n.YNc(6,x,2,1,"ng-container",27),n.qZA()()),2&e){const t=n.oxw(3);n.xp6(2),n.Q6J("ngForOf",t.answers),n.xp6(2),n.Q6J("ngForOf",t.answers),n.xp6(2),n.Q6J("ngForOf",t.answers)}}function T(e,s){1&e&&n._UZ(0,"textarea",33)}function y(e,s){if(1&e&&(n.TgZ(0,"section",17)(1,"p",18),n._uU(2),n.qZA(),n.TgZ(3,"h4",19),n._uU(4),n.qZA(),n.ynx(5,20),n.YNc(6,k,7,3,"div",21),n.YNc(7,T,1,0,"textarea",22),n.BQk(),n.qZA()),2&e){const t=s.$implicit,o=s.index,c=n.oxw(2);n.Q6J("formArrayName",o),n.xp6(2),n.AsE("",o+1,"/",c.categories[c.activeStepIdx].questions.length,""),n.xp6(2),n.Oqu(t.question),n.xp6(1),n.Q6J("ngSwitch",t.questionType),n.xp6(1),n.Q6J("ngSwitchCase",c.questionTypes.Agree),n.xp6(1),n.Q6J("ngSwitchCase",c.questionTypes.FreeText)}}function S(e,s){if(1&e){const t=n.EpF();n.TgZ(0,"div",2)(1,"section",3),n.YNc(2,C,3,1,"a",4),n.TgZ(3,"nav",5),n.YNc(4,h,4,6,"div",6),n.qZA()(),n.TgZ(5,"div",7)(6,"div",8),n.YNc(7,y,8,7,"section",9),n.TgZ(8,"div",10)(9,"button",11),n.NdJ("click",function(){return n.CHM(t),n.oxw().submitStep()}),n._uU(10,"Submit"),n.qZA()()()()()}if(2&e){const t=n.oxw();n.Q6J("formGroup",t.form),n.xp6(2),n.Q6J("ngIf",t.activeStepIdx),n.xp6(2),n.Q6J("ngForOf",t.categories),n.xp6(2),n.Q6J("formArrayName",t.activeStepIdx),n.xp6(1),n.Q6J("ngForOf",t.categories[t.activeStepIdx].questions)}}function A(e,s){1&e&&(n.TgZ(0,"div",34)(1,"div",35)(2,"span",36),n._uU(3,"Loading..."),n.qZA()()())}let Z=(()=>{class e{constructor(t,o,c){this.apiService=t,this.appService=o,this.router=c,this.activeStepIdx=0,this.answers=[{text:"Strongly disagree",className:"danger"},{className:"semi-danger"},{text:"Neutral",className:"warning"},{className:"semi-success"},{text:"Strongly agree",className:"success"}],this.questionTypes=u.S,this.isLoading=!0}get prevStepTitle(){return this.categories[this.activeStepIdx-1].title}ngOnInit(){this.getTestData()}initForm(t){this.form=new l.C({answers:new l.Z(t.map(o=>new l.Z(o.questions.map(c=>{const _={};switch(c.questionType){case u.S.Agree:_.score=new i.NI(0);break;case u.S.FreeText:_.freeText=new i.NI("")}return new l.C(_)}))))}),this.appService.answers$.pipe((0,w.q)(1)).subscribe(o=>{var c;return null===(c=this.form)||void 0===c?void 0:c.patchValue(o||{})}),this.form.valueChanges.subscribe(o=>this.appService.setAnswers(o))}getTestData(){this.isLoading=!0,this.apiService.getTestData().subscribe(t=>{this.categories=t,this.initForm(this.categories),this.isLoading=!1})}getStepProgressWidthByIdx(t){if(!this.form)return 0;const o=this.form.controls.answers.controls[t].controls;return o.filter(_=>_.value.score||_.value.freeText).length/o.length*100+"%"}submitStep(){var t;if(!this.categories)return;const o=null===(t=this.categories)||void 0===t?void 0:t.length;this.activeStepIdx===o-1?this.submit():this.goToStep(this.activeStepIdx+1)}submit(){!this.form||!this.categories||(this.isLoading=!0,this.apiService.submitAnswers(this.form.value).pipe((0,f.x)(()=>this.isLoading=!1)).subscribe(()=>{this.router.navigateByUrl("/test/result")}))}backStep(){!this.activeStepIdx||this.goToStep(this.activeStepIdx-1)}goToStep(t){this.activeStepIdx!==t&&(this.activeStepIdx=t,window.scrollTo(0,0))}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(m.s),n.Y36(p.z),n.Y36(g.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-test"]],decls:3,vars:2,consts:[["class","container",3,"formGroup",4,"ngIf","ngIfElse"],["loaderTmp",""],[1,"container",3,"formGroup"],[1,"steps","position-sticky","sticky-top"],["class","d-flex align-items-center mb-4","href","javascript:",3,"click",4,"ngIf"],[1,"d-flex"],["class","step",3,"active","click",4,"ngFor","ngForOf"],["formArrayName","answers",1,"row"],[1,"col-lg-8",3,"formArrayName"],["class","question",3,"formArrayName",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end","mt-4","mb-5","actions"],[1,"btn","btn-primary","mt-2",3,"click"],["href","javascript:",1,"d-flex","align-items-center","mb-4",3,"click"],["alt","back","src","assets/icons/chevron-left.svg",1,"back-icon","me-2"],[1,"step",3,"click"],[1,"step__name"],[1,"step__progress",3,"ngStyle"],[1,"question",3,"formArrayName"],[1,"question__number"],[1,"question__text"],[3,"ngSwitch"],["class","answers my-50",4,"ngSwitchCase"],["class","form-control my-50","formControlName","freeText","rows","5",4,"ngSwitchCase"],[1,"answers","my-50"],[1,"d-flex","justify-content-between"],["class","answer__number",3,"for",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between","answer__bar"],[4,"ngFor","ngForOf"],[1,"answer__number",3,"for"],["formControlName","score","type","radio",3,"id","value"],[1,"answer__btn",3,"for","ngClass"],["class","answer__text",3,"for",4,"ngIf"],[1,"answer__text",3,"for"],["formControlName","freeText","rows","5",1,"form-control","my-50"],[1,"vh-100","vw-100","d-flex","flex-column","align-items-center","justify-content-center"],["role","status",1,"spinner-border",2,"width","5rem","height","5rem"],[1,"visually-hidden"]],template:function(t,o){if(1&t&&(n.YNc(0,S,11,5,"div",0),n.YNc(1,A,4,0,"ng-template",null,1,n.W1O)),2&t){const c=n.MAs(2);n.Q6J("ngIf",!o.isLoading&&o.categories&&o.form)("ngIfElse",c)}},directives:[a.O5,i.JL,i.sg,a.sg,a.PC,i.CE,a.RF,a.n9,i.Fj,i._,i.JJ,i.u,a.mk],styles:['.steps[_ngcontent-%COMP%]{background-color:#fff;margin:20px 0;padding:20px 0}@media (min-width: 768px){.steps[_ngcontent-%COMP%]{margin:40px 0;padding:40px 0}}@media (min-width: 992px){.steps[_ngcontent-%COMP%]{margin:65px 0;padding:65px 0}}.step[_ngcontent-%COMP%]{border-bottom:6px solid #C4C4C4;position:relative;min-width:72px;cursor:pointer}.step[_ngcontent-%COMP%] + .step[_ngcontent-%COMP%]{margin-inline-start:1rem}.step[_ngcontent-%COMP%]:hover   .step__name[_ngcontent-%COMP%]{transition:all .25s;transform:scale(1.05)}@media (min-width: 992px){.step[_ngcontent-%COMP%]{min-width:92px}.step.active[_ngcontent-%COMP%]{position:relative}.step.active[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-12px;left:0;width:100%;height:3px;background-color:#c4c4c4}.step[_ngcontent-%COMP%] + .step[_ngcontent-%COMP%]{margin-inline-start:1.5rem}}@media (max-width: 991.98px){.step.active[_ngcontent-%COMP%]{flex-shrink:0}.step[_ngcontent-%COMP%]:not(.active)   .step__name[_ngcontent-%COMP%]{display:none}}@media (max-width: 767.98px){.step[_ngcontent-%COMP%]{min-width:30px}.step[_ngcontent-%COMP%] + .step[_ngcontent-%COMP%]{margin-inline-start:.5rem}}.step__progress[_ngcontent-%COMP%]{transition:all .25s;height:6px;background-color:#22af49;position:absolute;bottom:-6px;left:0}.question[_ngcontent-%COMP%] + .question[_ngcontent-%COMP%]{margin-top:150px}.question__number[_ngcontent-%COMP%]{font-size:18px}.question__text[_ngcontent-%COMP%]{font-size:30px}.my-50[_ngcontent-%COMP%]{margin:50px 0}.answers[_ngcontent-%COMP%]{font-size:20px;font-weight:700}.answer__bar[_ngcontent-%COMP%]{position:relative;margin:20px 0}.answer__bar[_ngcontent-%COMP%]:before{content:"";height:4px;width:100%;background-color:#000;position:absolute;top:50%;left:0;transform:translateY(-50%);z-index:-1}.answer__bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.answer__number[_ngcontent-%COMP%]{width:24px;text-align:center}.answer__btn[_ngcontent-%COMP%]{display:block;height:24px;width:24px;border-radius:50%;border:4px solid;background-color:#fff;cursor:pointer}.answer__btn.primary[_ngcontent-%COMP%]{color:#000;border-color:#000}.answer__btn.primary[_ngcontent-%COMP%]:hover{color:#fff;background-color:#000;border-color:#000}.btn-check[_ngcontent-%COMP%]:focus + .answer__btn.primary[_ngcontent-%COMP%], .answer__btn.primary[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.primary[_ngcontent-%COMP%], .btn-check[_ngcontent-%COMP%]:active + .answer__btn.primary[_ngcontent-%COMP%], .answer__btn.primary[_ngcontent-%COMP%]:active, .answer__btn.primary.active[_ngcontent-%COMP%], .answer__btn.primary.dropdown-toggle.show[_ngcontent-%COMP%]{color:#fff;background-color:#000;border-color:#000}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.primary[_ngcontent-%COMP%]:focus, .btn-check[_ngcontent-%COMP%]:active + .answer__btn.primary[_ngcontent-%COMP%]:focus, .answer__btn.primary[_ngcontent-%COMP%]:active:focus, .answer__btn.primary.active[_ngcontent-%COMP%]:focus, .answer__btn.primary.dropdown-toggle.show[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.answer__btn.primary[_ngcontent-%COMP%]:disabled, .answer__btn.primary.disabled[_ngcontent-%COMP%]{color:#000;background-color:transparent}input[_ngcontent-%COMP%]:checked ~ .answer__btn.primary[_ngcontent-%COMP%]{background-color:#000}.answer__btn.success[_ngcontent-%COMP%]{color:#000;border-color:#000}.answer__btn.success[_ngcontent-%COMP%]:hover{color:#000;background-color:#22af49;border-color:#22af49}.btn-check[_ngcontent-%COMP%]:focus + .answer__btn.success[_ngcontent-%COMP%], .answer__btn.success[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.success[_ngcontent-%COMP%], .btn-check[_ngcontent-%COMP%]:active + .answer__btn.success[_ngcontent-%COMP%], .answer__btn.success[_ngcontent-%COMP%]:active, .answer__btn.success.active[_ngcontent-%COMP%], .answer__btn.success.dropdown-toggle.show[_ngcontent-%COMP%]{color:#000;background-color:#22af49;border-color:#22af49}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.success[_ngcontent-%COMP%]:focus, .btn-check[_ngcontent-%COMP%]:active + .answer__btn.success[_ngcontent-%COMP%]:focus, .answer__btn.success[_ngcontent-%COMP%]:active:focus, .answer__btn.success.active[_ngcontent-%COMP%]:focus, .answer__btn.success.dropdown-toggle.show[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.answer__btn.success[_ngcontent-%COMP%]:disabled, .answer__btn.success.disabled[_ngcontent-%COMP%]{color:#000;background-color:transparent}input[_ngcontent-%COMP%]:checked ~ .answer__btn.success[_ngcontent-%COMP%]{background-color:#22af49}.answer__btn.semi-success[_ngcontent-%COMP%]{color:#000;border-color:#000}.answer__btn.semi-success[_ngcontent-%COMP%]:hover{color:#000;background-color:#a8bf19;border-color:#a8bf19}.btn-check[_ngcontent-%COMP%]:focus + .answer__btn.semi-success[_ngcontent-%COMP%], .answer__btn.semi-success[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.semi-success[_ngcontent-%COMP%], .btn-check[_ngcontent-%COMP%]:active + .answer__btn.semi-success[_ngcontent-%COMP%], .answer__btn.semi-success[_ngcontent-%COMP%]:active, .answer__btn.semi-success.active[_ngcontent-%COMP%], .answer__btn.semi-success.dropdown-toggle.show[_ngcontent-%COMP%]{color:#000;background-color:#a8bf19;border-color:#a8bf19}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.semi-success[_ngcontent-%COMP%]:focus, .btn-check[_ngcontent-%COMP%]:active + .answer__btn.semi-success[_ngcontent-%COMP%]:focus, .answer__btn.semi-success[_ngcontent-%COMP%]:active:focus, .answer__btn.semi-success.active[_ngcontent-%COMP%]:focus, .answer__btn.semi-success.dropdown-toggle.show[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.answer__btn.semi-success[_ngcontent-%COMP%]:disabled, .answer__btn.semi-success.disabled[_ngcontent-%COMP%]{color:#000;background-color:transparent}input[_ngcontent-%COMP%]:checked ~ .answer__btn.semi-success[_ngcontent-%COMP%]{background-color:#a8bf19}.answer__btn.warning[_ngcontent-%COMP%]{color:#000;border-color:#000}.answer__btn.warning[_ngcontent-%COMP%]:hover{color:#000;background-color:#fff500;border-color:#fff500}.btn-check[_ngcontent-%COMP%]:focus + .answer__btn.warning[_ngcontent-%COMP%], .answer__btn.warning[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.warning[_ngcontent-%COMP%], .btn-check[_ngcontent-%COMP%]:active + .answer__btn.warning[_ngcontent-%COMP%], .answer__btn.warning[_ngcontent-%COMP%]:active, .answer__btn.warning.active[_ngcontent-%COMP%], .answer__btn.warning.dropdown-toggle.show[_ngcontent-%COMP%]{color:#000;background-color:#fff500;border-color:#fff500}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.warning[_ngcontent-%COMP%]:focus, .btn-check[_ngcontent-%COMP%]:active + .answer__btn.warning[_ngcontent-%COMP%]:focus, .answer__btn.warning[_ngcontent-%COMP%]:active:focus, .answer__btn.warning.active[_ngcontent-%COMP%]:focus, .answer__btn.warning.dropdown-toggle.show[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.answer__btn.warning[_ngcontent-%COMP%]:disabled, .answer__btn.warning.disabled[_ngcontent-%COMP%]{color:#000;background-color:transparent}input[_ngcontent-%COMP%]:checked ~ .answer__btn.warning[_ngcontent-%COMP%]{background-color:#fff500}.answer__btn.semi-danger[_ngcontent-%COMP%]{color:#000;border-color:#000}.answer__btn.semi-danger[_ngcontent-%COMP%]:hover{color:#000;background-color:#ff9d47;border-color:#ff9d47}.btn-check[_ngcontent-%COMP%]:focus + .answer__btn.semi-danger[_ngcontent-%COMP%], .answer__btn.semi-danger[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.semi-danger[_ngcontent-%COMP%], .btn-check[_ngcontent-%COMP%]:active + .answer__btn.semi-danger[_ngcontent-%COMP%], .answer__btn.semi-danger[_ngcontent-%COMP%]:active, .answer__btn.semi-danger.active[_ngcontent-%COMP%], .answer__btn.semi-danger.dropdown-toggle.show[_ngcontent-%COMP%]{color:#000;background-color:#ff9d47;border-color:#ff9d47}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.semi-danger[_ngcontent-%COMP%]:focus, .btn-check[_ngcontent-%COMP%]:active + .answer__btn.semi-danger[_ngcontent-%COMP%]:focus, .answer__btn.semi-danger[_ngcontent-%COMP%]:active:focus, .answer__btn.semi-danger.active[_ngcontent-%COMP%]:focus, .answer__btn.semi-danger.dropdown-toggle.show[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.answer__btn.semi-danger[_ngcontent-%COMP%]:disabled, .answer__btn.semi-danger.disabled[_ngcontent-%COMP%]{color:#000;background-color:transparent}input[_ngcontent-%COMP%]:checked ~ .answer__btn.semi-danger[_ngcontent-%COMP%]{background-color:#ff9d47}.answer__btn.danger[_ngcontent-%COMP%]{color:#000;border-color:#000}.answer__btn.danger[_ngcontent-%COMP%]:hover{color:#000;background-color:#ff4740;border-color:#ff4740}.btn-check[_ngcontent-%COMP%]:focus + .answer__btn.danger[_ngcontent-%COMP%], .answer__btn.danger[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.danger[_ngcontent-%COMP%], .btn-check[_ngcontent-%COMP%]:active + .answer__btn.danger[_ngcontent-%COMP%], .answer__btn.danger[_ngcontent-%COMP%]:active, .answer__btn.danger.active[_ngcontent-%COMP%], .answer__btn.danger.dropdown-toggle.show[_ngcontent-%COMP%]{color:#000;background-color:#ff4740;border-color:#ff4740}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.danger[_ngcontent-%COMP%]:focus, .btn-check[_ngcontent-%COMP%]:active + .answer__btn.danger[_ngcontent-%COMP%]:focus, .answer__btn.danger[_ngcontent-%COMP%]:active:focus, .answer__btn.danger.active[_ngcontent-%COMP%]:focus, .answer__btn.danger.dropdown-toggle.show[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.answer__btn.danger[_ngcontent-%COMP%]:disabled, .answer__btn.danger.disabled[_ngcontent-%COMP%]{color:#000;background-color:transparent}input[_ngcontent-%COMP%]:checked ~ .answer__btn.danger[_ngcontent-%COMP%]{background-color:#ff4740}@media (max-width: 991.98px){.answer__text[_ngcontent-%COMP%]:nth-child(2){display:none}}.answer__text[_ngcontent-%COMP%]:last-child{text-align:end}label[_ngcontent-%COMP%]{cursor:pointer}@media (min-width: 768px){.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{min-width:160px}}']}),e})();var q=r(4004);const F=[{path:"",component:Z},{path:"result",canActivate:[(()=>{class e{constructor(t,o){this.appService=t,this.router=o}canActivate(t,o){return this.appService.answers$.pipe((0,q.U)(c=>!!c||this.router.createUrlTree(["/test"])))}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(p.z),n.LFG(g.F0))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()],loadChildren:()=>r.e(908).then(r.bind(r,5908)).then(e=>e.ResultModule)}];let N=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[g.Bz.forChild(F)],g.Bz]}),e})(),I=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[a.ez,N,i.UX]]}),e})()}}]);