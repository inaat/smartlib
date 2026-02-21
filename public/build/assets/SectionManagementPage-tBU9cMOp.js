import{d as U,p as j,D as B,r as p,o as D,c as l,b as e,m as k,f as v,n as $,u as b,v as x,B as A,F as S,h as C,t as a,s as I,x as q,z as L,O as f,j as T,i as n}from"./main--TIwcAAm.js";import{R as W}from"./refresh-cw-CpkqFi_C.js";import{P as R}from"./printer-kS6Svy7S.js";import{P as O}from"./plus-C2mPNQoI.js";import{X}from"./x-ByvCzK0u.js";/* empty css              */import"./createLucideIcon-3JDq_FH1.js";const Z={class:"p-6 space-y-6"},G={class:"flex items-center justify-between"},H={class:"flex items-center space-x-3"},J={class:"bg-white rounded-xl shadow-sm border border-gray-200 p-4"},K={class:"flex items-center space-x-4"},Y={class:"flex-1 max-w-xs"},ee=["value"],te={class:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"},oe={class:"min-w-full divide-y divide-gray-200"},se={class:"bg-white divide-y divide-gray-200"},re={class:"px-6 py-4 whitespace-nowrap"},ae={class:"text-sm font-medium text-gray-900"},ie={class:"text-xs text-gray-500"},le={class:"px-6 py-4 whitespace-nowrap"},ne={class:"text-sm text-gray-900"},de={class:"text-xs text-gray-500"},ce={class:"px-6 py-4 whitespace-nowrap"},pe={class:"text-sm text-gray-900"},ue={class:"text-xs text-green-600"},xe={class:"px-6 py-4 whitespace-nowrap"},me={class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium"},ge=["onClick"],ve=["onClick"],be=["onClick"],fe={key:0},ye={key:0,class:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"},he={class:"bg-white rounded-xl shadow-xl max-w-md w-full mx-4 p-6"},we={class:"flex items-center justify-between mb-6"},_e={class:"text-xl font-bold text-gray-900"},ke=["value"],Se=["disabled"],Ce={key:0,class:"mt-1 text-xs text-gray-500"},qe={class:"flex items-center"},$e={class:"flex items-center space-x-3 pt-4"},Ae=["disabled"],Qe=U({__name:"SectionManagementPage",setup(Re){const{user:N}=j(),m=B(()=>N.value?.library_id||1),y=p([]),h=p([]),d=p(!1),u=p(!1),c=p(!1),_=p(null),r=p({id:null,floor_id:null,name:"",total_seats:0,description:"",is_active:!0}),z=async()=>{try{const s=await f.getFloors(m.value);h.value=s}catch(s){console.error("Error fetching floors:",s)}},g=async()=>{d.value=!0;try{const s=await f.getSections(m.value,_.value||void 0);y.value=s}catch(s){console.error("Error fetching sections:",s)}finally{d.value=!1}},E=()=>{c.value=!1,r.value={id:null,floor_id:h.value[0]?.id||null,name:"",total_seats:0,description:"",is_active:!0},u.value=!0},P=s=>{c.value=!0,r.value={id:s.id,floor_id:s.floor_id,name:s.name,total_seats:s.total_seats,description:s.description||"",is_active:s.is_active},u.value=!0},F=async()=>{d.value=!0;try{c.value&&r.value.id?await f.updateSection(m.value,r.value.id,r.value):await f.createSection(m.value,r.value),await g(),u.value=!1}catch(s){console.error("Error saving section:",s)}finally{d.value=!1}},M=async s=>{if(confirm(`Are you sure you want to delete section "${s.name}"? This will also delete all seats in this section.`))try{await f.deleteSection(m.value,s.id),await g()}catch(t){console.error("Error deleting section:",t)}},V=s=>{const t=window.open("","_blank");if(!t)return;const o=s.seats||[];let i=`
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
  `;o.forEach(w=>{i+=`
      <div class="qr-item">
        <img src="/storage/qrcodes/seats/seat-${w.id}.png" class="qr-image" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(w.qr_code||w.seat_number)}'" />
        <div class="seat-number">Seat ${w.seat_number}</div>
        <div class="section-info">${s.name} - ${s.floor?.name||""}</div>
      </div>
    `}),i+=`
        </div>
      </body>
    </html>
  `,t.document.write(i),t.document.close()},Q=()=>{const s=window.open("","_blank");if(!s)return;let t=`
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
    `,o.seats.forEach(i=>{t+=`
        <div class="qr-item">
          <img src="/storage/qrcodes/seats/seat-${i.id}.png" class="qr-image" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(i.qr_code||i.seat_number)}'" />
          <div class="seat-number">Seat ${i.seat_number}</div>
          <div class="section-info">${o.name} - ${o.floor?.name||""}</div>
        </div>
      `}),t+=`
        </div>
      </div>
    `)}),t+=`
      </body>
    </html>
  `,s.document.write(t),s.document.close()};return D(()=>{z(),g()}),(s,t)=>(n(),l("div",Z,[e("div",G,[t[10]||(t[10]=e("div",null,[e("h1",{class:"text-3xl font-bold text-gray-900"},"Section Management"),e("p",{class:"text-gray-600 mt-1"},"Manage seating sections across all floors")],-1)),e("div",H,[e("button",{onClick:g,class:"p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",title:"Refresh"},[v(b(W),{class:$(["w-5 h-5 text-gray-600",d.value?"animate-spin":""])},null,8,["class"])]),e("button",{onClick:Q,class:"px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"},[v(b(R),{class:"w-4 h-4 text-gray-600"}),t[8]||(t[8]=e("span",{class:"text-sm font-medium text-gray-700"},"Print All Bulk",-1))]),e("button",{onClick:E,class:"px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"},[v(b(O),{class:"w-4 h-4"}),t[9]||(t[9]=e("span",{class:"text-sm font-medium"},"Add Section",-1))])])]),e("div",J,[e("div",K,[e("div",Y,[t[12]||(t[12]=e("label",{class:"block text-xs font-medium text-gray-700 mb-1"},"Filter by Floor",-1)),x(e("select",{"onUpdate:modelValue":t[0]||(t[0]=o=>_.value=o),onChange:g,class:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"},[t[11]||(t[11]=e("option",{value:null},"All Floors",-1)),(n(!0),l(S,null,C(h.value,o=>(n(),l("option",{key:o.id,value:o.id},a(o.name)+" (Level "+a(o.level)+") ",9,ee))),128))],544),[[A,_.value]])])])]),e("div",te,[e("table",oe,[t[15]||(t[15]=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Section Name"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Floor"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Seats"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Status"),e("th",{class:"px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"},"Actions")])],-1)),e("tbody",se,[(n(!0),l(S,null,C(y.value,o=>(n(),l("tr",{key:o.id,class:"hover:bg-gray-50"},[e("td",re,[e("div",ae,a(o.name),1),e("div",ie,a(o.description||"No description"),1)]),e("td",le,[e("div",ne,a(o.floor?.name||"N/A"),1),e("div",de,"Level "+a(o.floor?.level),1)]),e("td",ce,[e("div",pe,a(o.total_seats)+" total",1),e("div",ue,a(o.available_seats)+" available",1)]),e("td",xe,[e("span",{class:$(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",o.is_active?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},a(o.is_active?"Active":"Inactive"),3)]),e("td",me,[e("button",{onClick:i=>V(o),class:"text-green-600 hover:text-green-900 mr-4 flex items-center inline-flex"},[v(b(R),{class:"w-3 h-3 mr-1"}),t[13]||(t[13]=T(" Print QR ",-1))],8,ge),e("button",{onClick:i=>P(o),class:"text-indigo-600 hover:text-indigo-900 mr-4"},"Edit",8,ve),e("button",{onClick:i=>M(o),class:"text-red-600 hover:text-red-900"},"Delete",8,be)])]))),128)),y.value.length===0&&!d.value?(n(),l("tr",fe,[...t[14]||(t[14]=[e("td",{colspan:"5",class:"px-6 py-12 text-center text-gray-500"}," No sections found. Add a new section to get started. ",-1)])])):k("",!0)])])]),u.value?(n(),l("div",ye,[e("div",he,[e("div",we,[e("h3",_e,a(c.value?"Edit Section":"Add New Section"),1),e("button",{onClick:t[1]||(t[1]=o=>u.value=!1),class:"p-2 hover:bg-gray-100 rounded-lg transition-colors"},[v(b(X),{class:"w-5 h-5 text-gray-500"})])]),e("form",{onSubmit:I(F,["prevent"]),class:"space-y-4"},[e("div",null,[t[16]||(t[16]=e("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Floor",-1)),x(e("select",{"onUpdate:modelValue":t[2]||(t[2]=o=>r.value.floor_id=o),required:"",class:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"},[(n(!0),l(S,null,C(h.value,o=>(n(),l("option",{key:o.id,value:o.id},a(o.name)+" (Level "+a(o.level)+") ",9,ke))),128))],512),[[A,r.value.floor_id]])]),e("div",null,[t[17]||(t[17]=e("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Section Name",-1)),x(e("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>r.value.name=o),type:"text",required:"",class:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500",placeholder:"e.g. Zone A"},null,512),[[q,r.value.name]])]),e("div",null,[t[18]||(t[18]=e("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Total Seats",-1)),x(e("input",{"onUpdate:modelValue":t[4]||(t[4]=o=>r.value.total_seats=o),type:"number",required:"",disabled:c.value,class:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 disabled:bg-gray-100",placeholder:"e.g. 20"},null,8,Se),[[q,r.value.total_seats,void 0,{number:!0}]]),c.value?(n(),l("p",Ce,"Total seats cannot be changed after creation.")):k("",!0)]),e("div",null,[t[19]||(t[19]=e("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Description",-1)),x(e("textarea",{"onUpdate:modelValue":t[5]||(t[5]=o=>r.value.description=o),rows:"3",class:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500",placeholder:"e.g. Near the window, quiet area"},null,512),[[q,r.value.description]])]),e("div",qe,[x(e("input",{"onUpdate:modelValue":t[6]||(t[6]=o=>r.value.is_active=o),type:"checkbox",id:"is_active",class:"w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"},null,512),[[L,r.value.is_active]]),t[20]||(t[20]=e("label",{for:"is_active",class:"ml-2 text-sm text-gray-700"},"Active",-1))]),e("div",$e,[e("button",{type:"submit",disabled:d.value,class:"flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"},a(d.value?"Saving...":c.value?"Update Section":"Create Section"),9,Ae),e("button",{type:"button",onClick:t[7]||(t[7]=o=>u.value=!1),class:"px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"}," Cancel ")])],32)])])):k("",!0)]))}});export{Qe as default};
