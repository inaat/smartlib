import{d as Q,p as U,D as j,r as c,o as B,c as i,b as e,m as _,f as v,n as k,u as b,v as u,B as S,F as C,h as q,t as a,s as D,x as $,z as I,Q as f,j as L,i as n}from"./main-LmoJNTKn.js";import{R as T}from"./refresh-cw-BTTkzbJd.js";import{P as A}from"./printer-B-Anwuds.js";import{P as O}from"./plus-CWwbjHS4.js";import{X as G}from"./x-ftrxsWXd.js";/* empty css              */import"./createLucideIcon-Crl-gBPB.js";const W={class:"p-6 space-y-6"},X={class:"flex items-center justify-between"},Z={class:"flex items-center space-x-3"},H={class:"bg-white rounded-xl shadow-sm border border-gray-200 p-4"},J={class:"flex items-center space-x-4"},K={class:"flex-1 max-w-xs"},Y=["value"],ee={class:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"},te={class:"min-w-full divide-y divide-gray-200"},oe={class:"bg-white divide-y divide-gray-200"},se={class:"px-6 py-4 whitespace-nowrap"},re={class:"text-sm font-medium text-gray-900"},ae={class:"text-xs text-gray-500"},le={class:"px-6 py-4 whitespace-nowrap"},ie={class:"text-sm text-gray-900"},ne={class:"text-xs text-gray-500"},de={class:"px-6 py-4 whitespace-nowrap"},pe={class:"text-sm text-gray-900"},ce={class:"text-xs text-green-600"},ue={class:"px-6 py-4 whitespace-nowrap"},xe={class:"px-6 py-4 whitespace-nowrap"},me={class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium"},ge=["onClick"],ve=["onClick"],be=["onClick"],fe={key:0},ye={key:0,class:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"},he={class:"bg-white rounded-xl shadow-xl max-w-md w-full mx-4 p-6"},we={class:"flex items-center justify-between mb-6"},_e={class:"text-xl font-bold text-gray-900"},ke=["value"],Se=["disabled"],Ce={key:0,class:"mt-1 text-xs text-gray-500"},qe={class:"flex items-center"},$e={class:"flex items-center space-x-3 pt-4"},Ae=["disabled"],Qe=Q({__name:"SectionManagementPage",setup(Re){const{user:R}=U();j(()=>R.value?.library_id||1);const y=c([]),h=c([]),d=c(!1),x=c(!1),p=c(!1),w=c(null),r=c({id:null,floor_id:null,name:"",gender:"mixed",total_seats:0,description:"",is_active:!0}),M=async()=>{try{const s=await f.getFloors();h.value=s}catch(s){console.error("Error fetching floors:",s)}},m=async()=>{d.value=!0;try{const s=await f.getSections(w.value||void 0);y.value=s}catch(s){console.error("Error fetching sections:",s)}finally{d.value=!1}},F=()=>{p.value=!1,r.value={id:null,floor_id:h.value[0]?.id||null,name:"",gender:"mixed",total_seats:0,description:"",is_active:!0},x.value=!0},N=s=>{p.value=!0,r.value={id:s.id,floor_id:s.floor_id,name:s.name,gender:s.gender||"mixed",total_seats:s.total_seats,description:s.description||"",is_active:s.is_active},x.value=!0},z=async()=>{d.value=!0;try{p.value&&r.value.id?await f.updateSection(r.value.id,r.value):await f.createSection(r.value),await m(),x.value=!1}catch(s){console.error("Error saving section:",s)}finally{d.value=!1}},E=async s=>{if(confirm(`Are you sure you want to delete section "${s.name}"? This will also delete all seats in this section.`))try{await f.deleteSection(s.id),await m()}catch(t){console.error("Error deleting section:",t)}},P=s=>{const t=window.open("","_blank");if(!t)return;const o=s.seats||[];let l=`
    <html>
      <head>
        <title>Print QR Codes - ${s.name}</title>
        <style>
          body { font-family: sans-serif; margin: 0; padding: 20px; }
          .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #eee; padding-bottom: 10px; }
          .qr-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
          .qr-item { border: 1px solid #ddd; padding: 15px; text-align: center; page-break-inside: avoid; border-radius: 8px; }
          .qr-image { width: 140px; height: 140px; object-fit: contain; }
          .seat-number { font-weight: bold; margin-top: 10px; font-size: 16px; color: #333; }
          .section-info { font-size: 12px; color: #666; margin-top: 4px; }
          @media print {
            .no-print { display: none; }
            body { padding: 0; }
          }
        </style>
      </head>
      <body>
        <div class="no-print" style="position: fixed; top: 20px; right: 20px; z-index: 100;">
          <button onclick="window.print()" style="padding: 10px 20px; background: #7c3aed; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            Print QR Codes
          </button>
        </div>
        <div class="header">
          <h1 style="margin: 0; color: #1a1a1a;">Seat QR Codes</h1>
          <p style="margin: 5px 0; color: #666;">Section: ${s.name} | Floor: ${s.floor?.name||"N/A"}</p>
        </div>
        <div class="qr-grid">
  `;o.forEach(g=>{l+=`
      <div class="qr-item">
        <img src="${g.qr_code_url||"/storage/qrcodes/seats/seat-"+g.id+".svg"}" class="qr-image" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(g.qr_code||g.seat_number)}'" />
        <div class="seat-number">Seat ${g.seat_number}</div>
        <div class="section-info">${s.name} - ${s.floor?.name||""}</div>
      </div>
    `}),l+=`
        </div>
      </body>
    </html>
  `,t.document.write(l),t.document.close()},V=()=>{const s=window.open("","_blank");if(!s)return;let t=`
    <html>
      <head>
        <title>Print All QR Codes</title>
        <style>
          body { font-family: sans-serif; margin: 0; padding: 20px; }
          .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #eee; padding-bottom: 10px; }
          .section-block { margin-bottom: 50px; }
          .section-title { font-size: 20px; font-bold; margin-bottom: 15px; padding-left: 10px; border-left: 4px solid #7c3aed; }
          .qr-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
          .qr-item { border: 1px solid #ddd; padding: 15px; text-align: center; page-break-inside: avoid; border-radius: 8px; }
          .qr-image { width: 140px; height: 140px; object-fit: contain; }
          .seat-number { font-weight: bold; margin-top: 10px; font-size: 16px; color: #333; }
          .section-info { font-size: 12px; color: #666; margin-top: 4px; }
          @media print {
            .no-print { display: none; }
            .section-block { page-break-after: always; }
            body { padding: 0; }
          }
        </style>
      </head>
      <body>
        <div class="no-print" style="position: fixed; top: 20px; right: 20px; z-index: 100;">
          <button onclick="window.print()" style="padding: 10px 20px; background: #7c3aed; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            Print All QR Codes
          </button>
        </div>
        <div class="header">
          <h1 style="margin: 0; color: #1a1a1a;">Library Seat QR Codes</h1>
          <p style="margin: 5px 0; color: #666;">Bulk Export - All Sections</p>
        </div>
  `;y.value.forEach(o=>{!o.seats||o.seats.length===0||(t+=`
      <div class="section-block">
        <div class="section-title">${o.name} (${o.floor?.name||"N/A"})</div>
        <div class="qr-grid">
    `,o.seats.forEach(l=>{t+=`
        <div class="qr-item">
          <img src="${l.qr_code_url||"/storage/qrcodes/seats/seat-"+l.id+".svg"}" class="qr-image" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(l.qr_code||l.seat_number)}'" />
          <div class="seat-number">Seat ${l.seat_number}</div>
          <div class="section-info">${o.name} - ${o.floor?.name||""}</div>
        </div>
      `}),t+=`
        </div>
      </div>
    `)}),t+=`
      </body>
    </html>
  `,s.document.write(t),s.document.close()};return B(()=>{M(),m()}),(s,t)=>(n(),i("div",W,[e("div",X,[t[11]||(t[11]=e("div",null,[e("h1",{class:"text-3xl font-bold text-gray-900"},"Section Management"),e("p",{class:"text-gray-600 mt-1"},"Manage seating sections across all floors")],-1)),e("div",Z,[e("button",{onClick:m,class:"p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",title:"Refresh"},[v(b(T),{class:k(["w-5 h-5 text-gray-600",d.value?"animate-spin":""])},null,8,["class"])]),e("button",{onClick:V,class:"px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"},[v(b(A),{class:"w-4 h-4 text-gray-600"}),t[9]||(t[9]=e("span",{class:"text-sm font-medium text-gray-700"},"Print All Bulk",-1))]),e("button",{onClick:F,class:"px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"},[v(b(O),{class:"w-4 h-4"}),t[10]||(t[10]=e("span",{class:"text-sm font-medium"},"Add Section",-1))])])]),e("div",H,[e("div",J,[e("div",K,[t[13]||(t[13]=e("label",{class:"block text-xs font-medium text-gray-700 mb-1"},"Filter by Floor",-1)),u(e("select",{"onUpdate:modelValue":t[0]||(t[0]=o=>w.value=o),onChange:m,class:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"},[t[12]||(t[12]=e("option",{value:null},"All Floors",-1)),(n(!0),i(C,null,q(h.value,o=>(n(),i("option",{key:o.id,value:o.id},a(o.name)+" (Level "+a(o.level)+") ",9,Y))),128))],544),[[S,w.value]])])])]),e("div",ee,[e("table",te,[t[16]||(t[16]=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Section Name"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Floor"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Seats"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Gender"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Status"),e("th",{class:"px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"},"Actions")])],-1)),e("tbody",oe,[(n(!0),i(C,null,q(y.value,o=>(n(),i("tr",{key:o.id,class:"hover:bg-gray-50"},[e("td",se,[e("div",re,a(o.name),1),e("div",ae,a(o.description||"No description"),1)]),e("td",le,[e("div",ie,a(o.floor?.name||"N/A"),1),e("div",ne,"Level "+a(o.floor?.level),1)]),e("td",de,[e("div",pe,a(o.total_seats)+" total",1),e("div",ce,a(o.available_seats)+" available",1)]),e("td",ue,[e("span",{class:k(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",o.gender==="male"?"bg-blue-100 text-blue-800":o.gender==="female"?"bg-pink-100 text-pink-800":"bg-purple-100 text-purple-800"])},a(o.gender==="male"?"Male Only":o.gender==="female"?"Female Only":"Mixed"),3)]),e("td",xe,[e("span",{class:k(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",o.is_active?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},a(o.is_active?"Active":"Inactive"),3)]),e("td",me,[e("button",{onClick:l=>P(o),class:"text-green-600 hover:text-green-900 mr-4 flex items-center inline-flex"},[v(b(A),{class:"w-3 h-3 mr-1"}),t[14]||(t[14]=L(" Print QR ",-1))],8,ge),e("button",{onClick:l=>N(o),class:"text-indigo-600 hover:text-indigo-900 mr-4"},"Edit",8,ve),e("button",{onClick:l=>E(o),class:"text-red-600 hover:text-red-900"},"Delete",8,be)])]))),128)),y.value.length===0&&!d.value?(n(),i("tr",fe,[...t[15]||(t[15]=[e("td",{colspan:"5",class:"px-6 py-12 text-center text-gray-500"}," No sections found. Add a new section to get started. ",-1)])])):_("",!0)])])]),x.value?(n(),i("div",ye,[e("div",he,[e("div",we,[e("h3",_e,a(p.value?"Edit Section":"Add New Section"),1),e("button",{onClick:t[1]||(t[1]=o=>x.value=!1),class:"p-2 hover:bg-gray-100 rounded-lg transition-colors"},[v(b(G),{class:"w-5 h-5 text-gray-500"})])]),e("form",{onSubmit:D(z,["prevent"]),class:"space-y-4"},[e("div",null,[t[17]||(t[17]=e("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Floor",-1)),u(e("select",{"onUpdate:modelValue":t[2]||(t[2]=o=>r.value.floor_id=o),required:"",class:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"},[(n(!0),i(C,null,q(h.value,o=>(n(),i("option",{key:o.id,value:o.id},a(o.name)+" (Level "+a(o.level)+") ",9,ke))),128))],512),[[S,r.value.floor_id]])]),e("div",null,[t[18]||(t[18]=e("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Section Name",-1)),u(e("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>r.value.name=o),type:"text",required:"",class:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500",placeholder:"e.g. Zone A"},null,512),[[$,r.value.name]])]),e("div",null,[t[20]||(t[20]=e("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Gender Restriction",-1)),u(e("select",{"onUpdate:modelValue":t[4]||(t[4]=o=>r.value.gender=o),required:"",class:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"},[...t[19]||(t[19]=[e("option",{value:"mixed"},"Mixed (All)",-1),e("option",{value:"male"},"Male Only",-1),e("option",{value:"female"},"Female Only",-1)])],512),[[S,r.value.gender]])]),e("div",null,[t[21]||(t[21]=e("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Total Seats",-1)),u(e("input",{"onUpdate:modelValue":t[5]||(t[5]=o=>r.value.total_seats=o),type:"number",required:"",disabled:p.value,class:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 disabled:bg-gray-100",placeholder:"e.g. 20"},null,8,Se),[[$,r.value.total_seats,void 0,{number:!0}]]),p.value?(n(),i("p",Ce,"Total seats cannot be changed after creation.")):_("",!0)]),e("div",null,[t[22]||(t[22]=e("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Description",-1)),u(e("textarea",{"onUpdate:modelValue":t[6]||(t[6]=o=>r.value.description=o),rows:"3",class:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500",placeholder:"e.g. Near the window, quiet area"},null,512),[[$,r.value.description]])]),e("div",qe,[u(e("input",{"onUpdate:modelValue":t[7]||(t[7]=o=>r.value.is_active=o),type:"checkbox",id:"is_active",class:"w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"},null,512),[[I,r.value.is_active]]),t[23]||(t[23]=e("label",{for:"is_active",class:"ml-2 text-sm text-gray-700"},"Active",-1))]),e("div",$e,[e("button",{type:"submit",disabled:d.value,class:"flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"},a(d.value?"Saving...":p.value?"Update Section":"Create Section"),9,Ae),e("button",{type:"button",onClick:t[8]||(t[8]=o=>x.value=!1),class:"px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"}," Cancel ")])],32)])])):_("",!0)]))}});export{Qe as default};
