"use strict";(self.webpackChunkngx_admin_demo=self.webpackChunkngx_admin_demo||[]).push([[8],{96152:(p,r,o)=>{o.r(r),o.d(r,{InmuebleModule:()=>u});var d=o(36895),a=o(7672),e=o(82963);const c=function(){return["/pages/inmueble/listacompleta"]},i=function(){return["/pages/inmueble/list"]},s=[{path:"list",component:(()=>{class t{constructor(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-list"]],decls:26,vars:2,consts:[["rel","stylesheet","href","https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"],["rel","stylesheet","href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"],[1,"table","table-striped","table-bordered"],[1,"thead-dark"],["scope","col",1,"text-center"],[1,"text-center"],["data-toggle","modal","data-target","#visualizarModal1",1,"btn","btn-info","btn-view",3,"routerLink"],[1,"fas","fa-eye"],["onclick","eliminarFila(1)",1,"btn","btn-danger","btn-delete"],[1,"fas","fa-trash"]],template:function(n,b){1&n&&(e.\u0275\u0275element(0,"link",0)(1,"link",1),e.\u0275\u0275elementStart(2,"table",2)(3,"thead",3)(4,"tr")(5,"th",4),e.\u0275\u0275text(6,"N\xfamero de Referencia"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"th",4),e.\u0275\u0275text(8,"Direcci\xf3n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"th",4),e.\u0275\u0275text(10,"Fecha disponibilidad"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"th",4),e.\u0275\u0275text(12,"Acciones"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(13,"tbody")(14,"tr")(15,"td",5),e.\u0275\u0275text(16,"123"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"td",5),e.\u0275\u0275text(18,"Calle 54 #20-10"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"td",5),e.\u0275\u0275text(20,"21/05/2023"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(21,"td",5)(22,"button",6),e.\u0275\u0275element(23,"i",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"button",8),e.\u0275\u0275element(25,"i",9),e.\u0275\u0275elementEnd()()()()()),2&n&&(e.\u0275\u0275advance(22),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(1,c)))},dependencies:[a.rH],styles:['@charset "UTF-8";.table[_ngcontent-%COMP%]{font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:100%}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700;background-color:#343a40;color:#fff;text-align:center;vertical-align:middle;padding:10px}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;vertical-align:middle;padding:10px}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2f2}.btn-primary[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;border-color:#007bff}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#0069d9;border-color:#0062cc}.btn-view[_ngcontent-%COMP%]{background-color:#007bff;color:#fff}.btn-delete[_ngcontent-%COMP%]{background-color:#dc3545;color:#fff}']}),t})()},{path:"listacompleta",component:(()=>{class t{constructor(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-listacompleta"]],decls:76,vars:2,consts:[["rel","stylesheet","href","https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"],["rel","stylesheet","href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"],[1,"table-container"],[1,"table","table-striped","table-bordered"],[1,"thead-dark"],["scope","col",1,"text-center"],[1,"text-center"],["data-toggle","modal","data-target","#editarModal",1,"btn","btn-primary","btn-sm"],[1,"fas","fa-edit"],["data-toggle","modal","data-target","#volverModal",1,"btn","btn-primary","btn-sm",3,"routerLink"],[1,"fas","fa-arrow-left"]],template:function(n,b){1&n&&(e.\u0275\u0275element(0,"link",0)(1,"link",1),e.\u0275\u0275elementStart(2,"div",2)(3,"table",3)(4,"thead",4)(5,"tr")(6,"th",5),e.\u0275\u0275text(7,"N\xfamero de Referencia"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"th",5),e.\u0275\u0275text(9,"Direcci\xf3n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"th",5),e.\u0275\u0275text(11,"Superficie en m^\xb2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"th",5),e.\u0275\u0275text(13,"Numero de Habitaciones"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"th",5),e.\u0275\u0275text(15,"Numero de Ba\xf1os"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"th",5),e.\u0275\u0275text(17,"Numero de cocinas"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"th",5),e.\u0275\u0275text(19,"Gas domiciliario"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"th",5),e.\u0275\u0275text(21,"Parqueadero"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"th",5),e.\u0275\u0275text(23,"Oferta Venta"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"th",5),e.\u0275\u0275text(25,"Oferta Arquiler"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"th",5),e.\u0275\u0275text(27,"Fecha Inicio"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(28,"th",5),e.\u0275\u0275text(29,"Fecha Fin"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"th",5),e.\u0275\u0275text(31,"Valor Inmueble Arquiler"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(32,"th",5),e.\u0275\u0275text(33,"Valor Inmueble Venta"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(34,"th",5),e.\u0275\u0275text(35,"Estado"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(36,"th",5),e.\u0275\u0275text(37,"Acciones"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(38,"tbody")(39,"tr")(40,"td",6),e.\u0275\u0275text(41,"123"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(42,"td",6),e.\u0275\u0275text(43,"Calle 54 #20-10"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(44,"td",6),e.\u0275\u0275text(45,"1500"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(46,"td",6),e.\u0275\u0275text(47,"2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(48,"td",6),e.\u0275\u0275text(49,"2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(50,"td",6),e.\u0275\u0275text(51,"1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(52,"td",6),e.\u0275\u0275text(53,"Si"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(54,"td",6),e.\u0275\u0275text(55,"Si"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(56,"td",6),e.\u0275\u0275text(57,"No"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(58,"td",6),e.\u0275\u0275text(59,"Si"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(60,"td",6),e.\u0275\u0275text(61,"21/05/2023"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(62,"td",6),e.\u0275\u0275text(63,"27/05/2023"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(64,"td",6),e.\u0275\u0275text(65,"0"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(66,"td",6),e.\u0275\u0275text(67,"1.000.000"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(68,"td",6),e.\u0275\u0275text(69,"Activo"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(70,"td",6)(71,"button",7),e.\u0275\u0275element(72,"i",8),e.\u0275\u0275elementEnd()()()()()(),e.\u0275\u0275elementStart(73,"button",9),e.\u0275\u0275element(74,"i",10),e.\u0275\u0275text(75," Volver\n"),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(73),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(1,i)))},dependencies:[a.rH],styles:['@charset "UTF-8";.table[_ngcontent-%COMP%]{font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:100%}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700;background-color:#343a40;color:#fff;text-align:center;vertical-align:middle;padding:10px}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;vertical-align:middle;padding:10px}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2f2}.btn-primary[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;border-color:#007bff}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#0069d9;border-color:#0062cc}.table-container[_ngcontent-%COMP%]{max-height:400px;overflow-y:auto}']}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[a.Bz.forChild(s),a.Bz]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[d.ez,f]}),t})()}}]);