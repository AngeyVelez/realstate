"use strict";(self.webpackChunkngx_admin_demo=self.webpackChunkngx_admin_demo||[]).push([[362],{35362:(F,l,o)=>{o.r(l),o.d(l,{SolicitarvisitaModule:()=>E});var s=o(36895),a=o(24006),c=o(7672),e=o(82963),d=o(80529);let v=(()=>{class t{constructor(i){this.httpClient=i}ServicesVisit(i,n,f){const z=btoa("calosegc11@gmail.com:12345"),u={headers:new d.WM({"Content-Type":"application/json",Authorization:"Basic "+z})};return"get"==n?this.httpClient.get(i,u):(n="post")?this.httpClient.post(i,f,u):void 0}}return t.\u0275fac=function(i){return new(i||t)(e.\u0275\u0275inject(d.eN))},t.\u0275prov=e.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function p(t,r){1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Se requiere fecha"),e.\u0275\u0275elementEnd())}function h(t,r){1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1," La fecha debe ser una fecha v\xe1lida con el formato AAAA-MM-DD"),e.\u0275\u0275elementEnd())}function S(t,r){if(1&t&&(e.\u0275\u0275elementStart(0,"div",15),e.\u0275\u0275template(1,p,2,0,"div",16),e.\u0275\u0275template(2,h,2,0,"div",16),e.\u0275\u0275elementEnd()),2&t){const i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.f.fecha.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.f.fecha.errors.pattern)}}function g(t,r){1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Este campo es requerido"),e.\u0275\u0275elementEnd())}function C(t,r){if(1&t&&(e.\u0275\u0275elementStart(0,"div",15),e.\u0275\u0275template(1,g,2,0,"div",16),e.\u0275\u0275elementEnd()),2&t){const i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.f.realizada.errors.required)}}const m=function(t){return{"is-invalid":t}},b=[{path:"solicitar",component:(()=>{class t{constructor(i,n){this.fb=i,this.visitaservices=n,this.submitted=!1,this.visita=""}get f(){return this.angForm.controls}ngOnInit(){this.angForm=this.fb.group({fecha:["",[a.kI.required,a.kI.pattern(/^(000[1-9]|00[1-9]\d|0[1-9]\d\d|100\d|10[1-9]\d|1[1-9]\d{2}|[2-9]\d{3}|[1-9]\d{4}|1\d{5}|2[0-6]\d{4}|27[0-4]\d{3}|275[0-6]\d{2}|2757[0-5]\d|275760)-(0[1-9]|1[012])-(0[1-9]|[12]\d|3[01])T(0\d|1\d|2[0-4]):(0\d|[1-5]\d)(?::(0\d|[1-5]\d))?(?:.(00\d|0[1-9]\d|[1-9]\d{2}))?$/)]],realizada:["",a.kI.required]})}Post(){this.submitted=!0,this.angForm.valid&&(this.fecha=this.angForm.value,this.realizada="true"==this.fecha.realizada,this.visitaservices.ServicesVisit("http://localhost:5235/ServicioVisitas","post",{idOferta:1,idPersona:1,fecha:this.fecha.fecha,realizada:this.realizada,comentario:""}).subscribe(n=>{this.visita=JSON.parse(n.completa),alert("La visita se asign\xf3 correctamente")}))}}return t.\u0275fac=function(i){return new(i||t)(e.\u0275\u0275directiveInject(a.qu),e.\u0275\u0275directiveInject(v))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-solicitar"]],decls:25,vars:9,consts:[[1,"row"],[1,"col-md-12"],[1,"card"],[1,"mt-3","text-center"],[1,"card-body"],["novalidate","",3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col-md-6"],["type","datetime-local","formControlName","fecha",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["formControlName","realizada",1,"form-control",3,"ngClass"],["value","true","selected",""],["value","false"],[1,"form-group","text-center"],[1,"btn","btn-primary"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(i,n){1&i&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),e.\u0275\u0275text(4,"Solicitar Visita"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"div",4)(6,"form",5),e.\u0275\u0275listener("ngSubmit",function(){return n.Post()}),e.\u0275\u0275elementStart(7,"div",6)(8,"div",7)(9,"label"),e.\u0275\u0275text(10,"Fecha"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(11,"input",8),e.\u0275\u0275template(12,S,3,2,"div",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"div",7)(14,"label"),e.\u0275\u0275text(15,"Se reliz\xf3 la visita"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"select",10)(17,"option",11),e.\u0275\u0275text(18,"Si"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"option",12),e.\u0275\u0275text(20,"No"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(21,C,2,1,"div",9),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(22,"div",13)(23,"button",14),e.\u0275\u0275text(24,"Enviar"),e.\u0275\u0275elementEnd()()()()()()()),2&i&&(e.\u0275\u0275advance(6),e.\u0275\u0275property("formGroup",n.angForm),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(5,m,n.submitted&&n.f.fecha.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.submitted&&n.f.fecha.errors),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(7,m,n.submitted&&n.f.realizada.errors)),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",n.submitted&&n.f.realizada.errors))},dependencies:[s.mk,s.O5,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.sg,a.u]}),t})()}];let y=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[c.Bz.forChild(b),c.Bz]}),t})(),E=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[s.ez,y,a.u5,d.JF,a.UX]}),t})()}}]);