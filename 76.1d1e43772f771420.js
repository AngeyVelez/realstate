"use strict";(self.webpackChunkngx_admin_demo=self.webpackChunkngx_admin_demo||[]).push([[76],{60076:(I,c,d)=>{d.r(c),d.d(c,{InmueblesModule:()=>S});var u=d(36895),s=d(24006),i=d(36517),p=d(7672),e=d(82963),g=d(5830);function h(a,r){if(1&a&&(e.\u0275\u0275elementStart(0,"nb-option",28),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&a){const l=r.$implicit;e.\u0275\u0275property("value",l.id),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(l.nombre)}}function b(a,r){if(1&a&&(e.\u0275\u0275elementStart(0,"nb-option",28),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&a){const l=r.$implicit;e.\u0275\u0275property("value",l.id),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(l.nombre)}}function C(a,r){if(1&a&&(e.\u0275\u0275elementStart(0,"nb-option",28),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&a){const l=r.$implicit;e.\u0275\u0275property("value",l.id),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(l.nombre)}}const f=[{path:"create-inmuebles",component:(()=>{class a{constructor(l){this.apiServices=l,this.idEstado=1,this.lista_sucursal=[],this.lista_inmueble=[],this.lista_personas=[]}ngOnInit(){this.get_sucursal(),this.get_inmueble(),this.get_persona()}validarCampos(){return!!(this.direccion&&this.superficie&&this.Venta&&this.estado&&this.habitaciones&&this.banos&&this.cocina&&this.alquiler&&this.gas&&this.parqueadero&&this.ventaI&&this.alquilerI&&this.idSucursal&&this.referencia)&&new Date(this.fechaF)>=new Date(this.fechaI)}limpiarDatosIngresados(){this.idSucursal=null,this.direccion="",this.superficie=null,this.Venta=null,this.estado=1,this.habitaciones=null,this.banos=null,this.cocina=null,this.alquiler=null,this.idTipoInmueble=null,this.fechaI=null,this.fechaF=null,this.idPersona=null,this.referencia=""}Post(){if(this.validarCampos()){let l={idSucursal:this.idSucursal,idTipoInmueble:this.idTipoInmueble,idPersona:this.idPersona,idEstado:this.idEstado,referencia:this.referencia,direccion:this.direccion,superficie:this.superficie,nroHabitaciones:this.habitaciones,nroBanios:this.banos,nroCocinas:this.cocina,tieneGas:this.gas,tieneParqueadero:this.parqueadero},n={idInmueblle:this.idPersona,idEstado:this.estado,fechaInicio:this.fechaI,fechafin:this.fechaF,montoVenta:this.Venta,montoalquiler:this.alquiler,esAlquiler:this.alquilerI,esVenta:this.ventaI};window.confirm("\xbfEst\xe1s seguro de enviar el formulario?")?(this.apiServices.callServices("http://localhost:5235/ServicioInmuebles","post",l).subscribe(t=>{const m=window.confirm("Registro Exitoso \xa1\xa1\xa1");console.log(m),console.log("Response ApiService:",t)},t=>{console.error("Error ApiService:",t)}),this.apiServices.callServices("http://localhost:5235/ServicioOfertas","post",n).subscribe(t=>{const m=window.confirm("Registro Exitoso \xa1\xa1\xa1");console.log(m),console.log("Response ApiService:",t)},t=>{console.error("Error ApiService:",t)})):window.alert("\xa1Registro Incompleto!")}this.limpiarDatosIngresados()}get_sucursal(){this.apiServices.callServices("http://localhost:5235/ServicioSucursales","get").subscribe(l=>{console.log("Response ApiService: ",l),this.lista_sucursal=l.datos,console.log(l)})}get_inmueble(){this.apiServices.callServices("http://localhost:5235/ServicioTipoInmuebles","get").subscribe(l=>{console.log("Response ApiService: ",l),this.lista_inmueble=l.datos,console.log(l)})}get_persona(){this.apiServices.callServices("http://localhost:5235/ServicioPersonas","get").subscribe(l=>{console.log("Response ApiService: ",l),this.lista_personas=l.datos,console.log(l)})}}return a.\u0275fac=function(l){return new(l||a)(e.\u0275\u0275directiveInject(g.s))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ngx-create-inmuebles"]],decls:164,vars:30,consts:[[1,"row"],[1,"col-sm-2"],[1,"form-group"],[1,"col-sm-4","label"],[1,"required-asterisk"],[1,"col-sm-10"],[1,"w-100",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["for","Direccion",1,"label"],["type","text","nbInput","","fullWidth","","id","Direccion","placeholder","Direccion","required","required",1,"form-control",3,"ngModel","ngModelChange"],["for","Superficie",1,"label"],["type","number","nbInput","","fullWidth","","id","Superficie","placeholder","Superficie","required","required",3,"ngModel","ngModelChange"],[1,"col-sm-3"],["for","Venta",1,"label"],["type","number","nbInput","","fullWidth","","id","Venta","placeholder","Valor Venta","required","",3,"ngModel","ngModelChange"],[1,"col-sm-2","label"],["selected","1",3,"ngModel","ngModelChange"],["value","1"],["for","Habitantes",1,"label"],["type","number","nbInput","","fullWidth","","id","Habitantes","placeholder","Habitantes","required","",3,"ngModel","ngModelChange"],["for","Ba\xf1os",1,"label"],["type","number","nbInput","","fullWidth","","id","Ba\xf1os","placeholder","Ba\xf1os","required","",3,"ngModel","ngModelChange"],["for","Cocina",1,"label"],["type","number","nbInput","","fullWidth","","id","Cocina","placeholder","Cocinas","required","",3,"ngModel","ngModelChange"],["for","Alquiler",1,"label"],["type","number","nbInput","","fullWidth","","id","Alquiler","placeholder","Valor Alquiler","required","",3,"ngModel","ngModelChange"],[1,"col-sm-12"],[3,"ngModel","ngModelChange"],[3,"value"],["for","FechaInicio",1,"label"],["type","date","nbInput","","fullWidth","","id","FechaInicio","placeholder","Inicio","required","",3,"ngModel","ngModelChange"],["for","FechaFin",1,"label"],["type","date","nbInput","","fullWidth","","id","FechaFin","placeholder","Fin","required","",3,"ngModel","ngModelChange"],["for","Referencia",1,"label"],["type","text","nbInput","","fullWidth","","id","Referencia","placeholder","Referencia","required","required",1,"form-control",3,"ngModel","ngModelChange"],[3,"click"],["type","submit","nbButton","","status","success",3,"disabled"],["_ngcontent-bbs-c259","","type","submit","nbButton","","status","success"],["_ngcontent-bbs-c259","","routerlink","../dashboard","ng-reflect-router-link","../dashboard","href","/src/app/pages/dashboard/dashboard.component.html"]],template:function(l,n){1&l&&(e.\u0275\u0275elementStart(0,"div")(1,"div")(2,"nb-card")(3,"nb-card-header"),e.\u0275\u0275text(4,"Registro de Inmuebles"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"nb-card-body")(6,"div",0)(7,"div",1)(8,"div",2)(9,"label",3),e.\u0275\u0275text(10,"Sucursal"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"span",4),e.\u0275\u0275text(12," *"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"div",5)(14,"nb-select",6),e.\u0275\u0275listener("ngModelChange",function(t){return n.idSucursal=t}),e.\u0275\u0275template(15,h,2,2,"nb-option",7),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(16,"div",1)(17,"div",2)(18,"label",8),e.\u0275\u0275text(19,"Direcci\xf3n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"span",4),e.\u0275\u0275text(21," *"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"input",9),e.\u0275\u0275listener("ngModelChange",function(t){return n.direccion=t}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(23,"div",1)(24,"div",2)(25,"label",10),e.\u0275\u0275text(26,"Superficie (M2)"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"span",4),e.\u0275\u0275text(28," *"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"input",11),e.\u0275\u0275listener("ngModelChange",function(t){return n.superficie=t}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(30,"div",12)(31,"div",2)(32,"label",13),e.\u0275\u0275text(33,"Valor de Venta del Inmueble"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(34,"span",4),e.\u0275\u0275text(35," *"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(36,"input",14),e.\u0275\u0275listener("ngModelChange",function(t){return n.Venta=t}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(37,"div",12)(38,"div",2)(39,"label",15),e.\u0275\u0275text(40,"Estado "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(41,"div",5),e.\u0275\u0275elementStart(42,"nb-select",16),e.\u0275\u0275listener("ngModelChange",function(t){return n.estado=t}),e.\u0275\u0275elementStart(43,"nb-option",17),e.\u0275\u0275text(44,"Activo"),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(45,"div",0)(46,"div",1)(47,"div",2)(48,"label",18),e.\u0275\u0275text(49,"N\xb0 de Habitantes"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(50,"span",4),e.\u0275\u0275text(51," *"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(52,"input",19),e.\u0275\u0275listener("ngModelChange",function(t){return n.habitaciones=t}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(53,"div",1)(54,"div",2)(55,"label",20),e.\u0275\u0275text(56,"N\xb0 de Ba\xf1os"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(57,"span",4),e.\u0275\u0275text(58," *"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(59,"input",21),e.\u0275\u0275listener("ngModelChange",function(t){return n.banos=t}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(60,"div",1)(61,"div",2)(62,"label",22),e.\u0275\u0275text(63,"N\xb0 de Cocinas"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(64,"span",4),e.\u0275\u0275text(65," *"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(66,"input",23),e.\u0275\u0275listener("ngModelChange",function(t){return n.cocina=t}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(67,"div",12)(68,"div",2)(69,"label",24),e.\u0275\u0275text(70,"Valor Alquiler del Inmueble"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(71,"span",4),e.\u0275\u0275text(72," *"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(73,"input",25),e.\u0275\u0275listener("ngModelChange",function(t){return n.alquiler=t}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(74,"div",12)(75,"div",2)(76,"label",3),e.\u0275\u0275text(77,"Inmueble"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(78,"div",26)(79,"nb-select",6),e.\u0275\u0275listener("ngModelChange",function(t){return n.idTipoInmueble=t}),e.\u0275\u0275template(80,b,2,2,"nb-option",7),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(81,"div",0)(82,"div",12)(83,"div",2)(84,"nb-card")(85,"nb-card-header"),e.\u0275\u0275text(86,"Gas Domiciliario"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(87,"nb-card-body")(88,"nb-select",27),e.\u0275\u0275listener("ngModelChange",function(t){return n.gas=t}),e.\u0275\u0275elementStart(89,"nb-option",28),e.\u0275\u0275text(90,"Si"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(91,"nb-option",28),e.\u0275\u0275text(92,"No"),e.\u0275\u0275elementEnd()()()()()(),e.\u0275\u0275elementStart(93,"div",12)(94,"div",2)(95,"nb-card")(96,"nb-card-header"),e.\u0275\u0275text(97,"Parqueadero"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(98,"nb-card-body")(99,"nb-select",27),e.\u0275\u0275listener("ngModelChange",function(t){return n.parqueadero=t}),e.\u0275\u0275elementStart(100,"nb-option",28),e.\u0275\u0275text(101,"Si"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(102,"nb-option",28),e.\u0275\u0275text(103,"No"),e.\u0275\u0275elementEnd()()()()()(),e.\u0275\u0275elementStart(104,"div",12)(105,"div",2)(106,"nb-card")(107,"nb-card-header"),e.\u0275\u0275text(108,"Ofrecer para Venta"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(109,"nb-card-body")(110,"nb-select",27),e.\u0275\u0275listener("ngModelChange",function(t){return n.ventaI=t}),e.\u0275\u0275elementStart(111,"nb-option",28),e.\u0275\u0275text(112,"Si"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(113,"nb-option",28),e.\u0275\u0275text(114,"No"),e.\u0275\u0275elementEnd()()()()()(),e.\u0275\u0275elementStart(115,"div",12)(116,"div",2)(117,"nb-card")(118,"nb-card-header"),e.\u0275\u0275text(119,"Ofrecer para Alquiler"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(120,"nb-card-body")(121,"nb-select",27),e.\u0275\u0275listener("ngModelChange",function(t){return n.alquilerI=t}),e.\u0275\u0275elementStart(122,"nb-option",28),e.\u0275\u0275text(123,"Si"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(124,"nb-option",28),e.\u0275\u0275text(125,"No"),e.\u0275\u0275elementEnd()()()()()()(),e.\u0275\u0275elementStart(126,"div",0)(127,"div",12)(128,"div",2)(129,"label",29),e.\u0275\u0275text(130,"Fecha inicio de disponibilidad"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(131,"input",30),e.\u0275\u0275listener("ngModelChange",function(t){return n.fechaI=t}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(132,"div",12)(133,"div",2)(134,"label",31),e.\u0275\u0275text(135,"Fecha fin de disponibilidad"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(136,"input",32),e.\u0275\u0275listener("ngModelChange",function(t){return n.fechaF=t}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(137,"div",12)(138,"div",2)(139,"label",3),e.\u0275\u0275text(140,"Due\xf1o"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(141,"div",5)(142,"nb-select",6),e.\u0275\u0275listener("ngModelChange",function(t){return n.idPersona=t}),e.\u0275\u0275template(143,C,2,2,"nb-option",7),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(144,"div",1)(145,"div",2)(146,"label",33),e.\u0275\u0275text(147,"Referencia"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(148,"span",4),e.\u0275\u0275text(149," *"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(150,"input",34),e.\u0275\u0275listener("ngModelChange",function(t){return n.referencia=t}),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(151,"div",0)(152,"div",1)(153,"div",2),e.\u0275\u0275element(154,"p"),e.\u0275\u0275elementStart(155,"form",35),e.\u0275\u0275listener("click",function(){return n.Post()}),e.\u0275\u0275elementStart(156,"button",36),e.\u0275\u0275text(157,"Guardar"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(158,"div",1)(159,"div",2),e.\u0275\u0275element(160,"p"),e.\u0275\u0275elementStart(161,"button",37)(162,"a",38),e.\u0275\u0275text(163,"Cancelar"),e.\u0275\u0275elementEnd()()()()()()()()()),2&l&&(e.\u0275\u0275advance(14),e.\u0275\u0275property("ngModel",n.idSucursal),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",n.lista_sucursal),e.\u0275\u0275advance(7),e.\u0275\u0275property("ngModel",n.direccion),e.\u0275\u0275advance(7),e.\u0275\u0275property("ngModel",n.superficie),e.\u0275\u0275advance(7),e.\u0275\u0275property("ngModel",n.Venta),e.\u0275\u0275advance(6),e.\u0275\u0275property("ngModel",n.estado),e.\u0275\u0275advance(10),e.\u0275\u0275property("ngModel",n.habitaciones),e.\u0275\u0275advance(7),e.\u0275\u0275property("ngModel",n.banos),e.\u0275\u0275advance(7),e.\u0275\u0275property("ngModel",n.cocina),e.\u0275\u0275advance(7),e.\u0275\u0275property("ngModel",n.alquiler),e.\u0275\u0275advance(6),e.\u0275\u0275property("ngModel",n.idTipoInmueble),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",n.lista_inmueble),e.\u0275\u0275advance(8),e.\u0275\u0275property("ngModel",n.gas),e.\u0275\u0275advance(1),e.\u0275\u0275property("value",!0),e.\u0275\u0275advance(2),e.\u0275\u0275property("value",!1),e.\u0275\u0275advance(8),e.\u0275\u0275property("ngModel",n.parqueadero),e.\u0275\u0275advance(1),e.\u0275\u0275property("value",!0),e.\u0275\u0275advance(2),e.\u0275\u0275property("value",!1),e.\u0275\u0275advance(8),e.\u0275\u0275property("ngModel",n.ventaI),e.\u0275\u0275advance(1),e.\u0275\u0275property("value",!0),e.\u0275\u0275advance(2),e.\u0275\u0275property("value",!1),e.\u0275\u0275advance(8),e.\u0275\u0275property("ngModel",n.alquilerI),e.\u0275\u0275advance(1),e.\u0275\u0275property("value",!0),e.\u0275\u0275advance(2),e.\u0275\u0275property("value",!1),e.\u0275\u0275advance(7),e.\u0275\u0275property("ngModel",n.fechaI),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngModel",n.fechaF),e.\u0275\u0275advance(6),e.\u0275\u0275property("ngModel",n.idPersona),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",n.lista_personas),e.\u0275\u0275advance(7),e.\u0275\u0275property("ngModel",n.referencia),e.\u0275\u0275advance(6),e.\u0275\u0275property("disabled",!n.validarCampos()))},dependencies:[u.sg,i.h8i,i.Asz,i.yKW,i.ndF,i.DPz,i.rs,i.q51,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.Q7,s.On,s.F],styles:['@charset "UTF-8";[_nghost-%COMP%]   .calendars[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:-1rem -.5rem;justify-content:center}[_nghost-%COMP%]   .calendar-container[_ngcontent-%COMP%]{margin:1rem .5rem}[_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem}@media (min-width: 768px){[_nghost-%COMP%]   .calendars[_ngcontent-%COMP%]{justify-content:flex-start}}@media (min-width: 992px){[_nghost-%COMP%]   .calendars[_ngcontent-%COMP%]{margin:-1.1rem}[_nghost-%COMP%]   .calendar-container[_ngcontent-%COMP%]{margin:1rem}}@media (min-width: 1600px){[_nghost-%COMP%]   .calendars[_ngcontent-%COMP%]{margin:-1rem}}[_nghost-%COMP%]   nb-checkbox[_ngcontent-%COMP%]{margin-bottom:1rem}[_nghost-%COMP%]   .form-inline[_ngcontent-%COMP%]   [fullWidth][_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   .form-inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 1.5rem 1.5rem 0}[_nghost-%COMP%]   nb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding-bottom:0}[_nghost-%COMP%]   .required-asterisk[_ngcontent-%COMP%]{color:red;margin-left:\\a0 5px}[_nghost-%COMP%]   .error-message[_ngcontent-%COMP%]{color:red;font-size:14px;margin-top:5px}  .custom-select{width:300px;height:40px}']}),a})()}];let v=(()=>{class a{}return a.\u0275fac=function(l){return new(l||a)},a.\u0275mod=e.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=e.\u0275\u0275defineInjector({imports:[p.Bz.forChild(f),p.Bz]}),a})();var _=d(43493),M=d(59120);let S=(()=>{class a{}return a.\u0275fac=function(l){return new(l||a)},a.\u0275mod=e.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=e.\u0275\u0275defineInjector({imports:[M.O,i.nKr,i.zyh,i.T2N,i.MAY,i.AE1,i.MfT,i.YNG,i.OA,_.O,i.IIj,i.KdK,s.u5,s.UX,u.ez,v]}),a})()}}]);