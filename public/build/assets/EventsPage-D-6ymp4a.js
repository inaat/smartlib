import{d as D,r as b,p as F,o as M,c as a,b as e,f as n,n as v,u as d,t as o,F as N,h as J,j as m,m as k,i}from"./main-LmoJNTKn.js";import{s as _}from"./studentApi-Fuy8gtT3.js";import{u as U}from"./useSwal-Bx6tXRyy.js";import{R as C}from"./refresh-cw-BTTkzbJd.js";import{C as y}from"./calendar-CusmJAK5.js";import{C as A}from"./clock-Bs9T6tHW.js";import{M as R}from"./map-pin-DXa1QUPm.js";import{U as I}from"./users-eqSE3c1P.js";import{C as L}from"./circle-check-big-DJKB8xD-.js";import{P as W}from"./printer-B-Anwuds.js";/* empty css              */import"./createLucideIcon-Crl-gBPB.js";const z={class:"p-6 space-y-6 max-w-7xl mx-auto"},H={class:"flex items-center justify-between"},O=["disabled"],Y={class:"text-sm font-medium text-gray-600 dark:text-gray-300"},Z={key:0,class:"flex items-center justify-center py-20"},q={key:1,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},G={class:"aspect-video relative overflow-hidden bg-gray-100 dark:bg-gray-900"},K=["src","alt"],Q={key:1,class:"w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-400"},X={class:"absolute top-2 right-2"},tt={class:"p-5"},et={class:"flex justify-between items-start mb-3"},st={class:"text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider"},rt={class:"flex items-center text-xs text-gray-500 dark:text-gray-400"},at={class:"font-bold text-xl text-gray-900 dark:text-white mb-2 line-clamp-1"},ot={class:"text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2"},it={class:"space-y-2 mb-4"},nt={class:"flex items-center text-sm text-gray-500 dark:text-gray-400"},dt={key:0,class:"flex items-center text-sm text-gray-500 dark:text-gray-400"},lt={class:"pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between"},ct={class:"text-xs text-gray-500 dark:text-gray-400 flex items-center"},pt={key:0,class:"flex flex-col space-y-2"},gt={disabled:"",class:"w-full px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 cursor-default"},ut=["onClick"],mt=["onClick","disabled"],xt={key:0,class:"w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"},ht={key:2,class:"bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 py-20 text-center"},Vt=D({__name:"EventsPage",setup(bt){const x=b([]),l=b(!1),g=b(null),h=async()=>{l.value=!0;try{const s=await _.getEvents();x.value=s}catch(s){console.error("Error fetching events:",s)}finally{l.value=!1}},{showConfirm:j,showSuccess:$,showError:E}=U(),{user:p}=F(),P=async s=>{if(await j("Join Event",`Are you sure you want to join "${s.title}"?`,"Yes, Join")){g.value=s.id;try{await _.registerForEvent(s.id.toString()),await h(),$("Joined!","Successfully registered for the event!")}catch(r){console.error("Error joining event:",r),E("Join Failed",r.message||"Failed to join event.")}finally{g.value=null}}},S=s=>{if(!p.value)return;const r=window.open("","_blank");if(!r)return;const t=p.value.name,c=p.value.profile_photo||p.value.profile_picture,V=c?c.startsWith("http")?c:`/storage/${c}`:"https://ui-avatars.com/api/?name="+encodeURIComponent(t),w=s.title,T=s.venue||"TBA",B=`${f(s.date)} @ ${u(s.start_time)} - ${u(s.end_time)}`;r.document.write(`
    <html>
      <head>
        <title>Event Pass - ${w}</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <style>
          @media print {
            @page { margin: 0; }
            body { margin: 1cm; }
            .no-print { display: none; }
          }
          .ticket-gradient {
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          }
        </style>
      </head>
      <body class="bg-gray-50 font-sans">
        <div class="max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div class="ticket-gradient p-8 text-white text-center relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
            </div>
            <h1 class="text-xs font-black uppercase tracking-[0.3em] mb-2 opacity-80">Official Entry Pass</h1>
            <h2 class="text-2xl font-bold leading-tight">${w}</h2>
          </div>
          
          <div class="p-8 space-y-6">
            <div class="flex items-center space-x-6">
              <div class="relative">
                <div class="w-24 h-24 rounded-2xl overflow-hidden border-4 border-blue-50 shadow-inner">
                  <img src="${V}" class="w-full h-full object-cover">
                </div>
                <div class="absolute -bottom-2 -right-2 bg-green-500 text-white p-1 rounded-full border-2 border-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
              </div>
              <div>
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Attendee</p>
                <h3 class="text-xl font-bold text-gray-900">${t}</h3>
                <p class="text-sm text-blue-600 font-medium">Verified Student</p>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-6 pt-6 border-t border-dashed border-gray-200">
              <div>
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Venue</p>
                <p class="text-sm font-bold text-gray-800">${T}</p>
              </div>
              <div>
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Time</p>
                <p class="text-sm font-bold text-gray-800">${B}</p>
              </div>
            </div>

            <div class="bg-gray-50 rounded-2xl p-4 flex flex-col items-center justify-center border border-gray-100">
                <div class="w-full h-12 bg-[repeating-linear-gradient(90deg,#000,#000_2px,transparent_2px,transparent_4px)] opacity-20 mb-2"></div>
                <p class="text-[10px] font-mono text-gray-400">EVT-${s.id}-${p.value.id}-${Date.now().toString().slice(-6)}</p>
            </div>
          </div>
          
          <div class="bg-gray-900 p-4 text-center">
            <p class="text-[10px] text-gray-400">Please present this pass at the entrance.</p>
          </div>
        </div>
        
        <div class="no-print mt-8 text-center">
          <button onclick="window.print()" class="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all">
            Confirm Print
          </button>
        </div>
      </body>
    </html>
  `),r.document.close()},f=s=>s?new Date(s).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}):"",u=s=>s?new Date(`2000-01-01T${s}`).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}):"";return M(()=>{h()}),(s,r)=>(i(),a("div",z,[e("div",H,[r[0]||(r[0]=e("div",null,[e("h1",{class:"text-3xl font-bold text-gray-900 dark:text-white"},"Upcoming Events"),e("p",{class:"text-gray-600 dark:text-gray-400 mt-1"},"Discover and join library events")],-1)),e("button",{onClick:h,disabled:l.value,class:"px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center space-x-2 disabled:opacity-50"},[n(d(C),{class:v(["w-4 h-4 text-gray-600 dark:text-gray-300",l.value?"animate-spin":""])},null,8,["class"]),e("span",Y,o(l.value?"Refreshing...":"Refresh"),1)],8,O)]),l.value?(i(),a("div",Z,[n(d(C),{class:"w-8 h-8 text-blue-600 animate-spin"})])):x.value.length>0?(i(),a("div",q,[(i(!0),a(N,null,J(x.value,t=>(i(),a("div",{key:t.id,class:"bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden group hover:shadow-md transition-all"},[e("div",G,[t.image?(i(),a("img",{key:0,src:t.image,alt:t.title,class:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"},null,8,K)):(i(),a("div",Q,[n(d(y),{class:"w-12 h-12"})])),e("div",X,[e("span",{class:v(["px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm",t.is_paid?"bg-yellow-500 text-white":"bg-green-500 text-white"])},o(t.is_paid?t.price?`$${t.price}`:"Paid":"Free"),3)])]),e("div",tt,[e("div",et,[e("span",st,o(t.type.replace("_"," ")),1),e("div",rt,[n(d(y),{class:"w-3 h-3 mr-1"}),m(" "+o(f(t.date)),1)])]),e("h3",at,o(t.title),1),e("p",ot,o(t.description),1),e("div",it,[e("div",nt,[n(d(A),{class:"w-4 h-4 mr-2"}),m(" "+o(u(t.start_time))+" - "+o(u(t.end_time)),1)]),t.venue?(i(),a("div",dt,[n(d(R),{class:"w-4 h-4 mr-2"}),m(" "+o(t.venue),1)])):k("",!0)]),e("div",lt,[e("div",ct,[n(d(I),{class:"w-3 h-3 mr-1"}),m(" "+o(t.registered_count||0)+" / "+o(t.capacity||"∞"),1)]),t.is_registered?(i(),a("div",pt,[e("button",gt,[n(d(L),{class:"w-4 h-4"}),r[1]||(r[1]=e("span",null,"Joined",-1))]),e("button",{onClick:c=>S(t),class:"w-full px-4 py-2 bg-white dark:bg-gray-800 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg text-sm font-bold transition-all flex items-center justify-center space-x-2 shadow-sm"},[n(d(W),{class:"w-4 h-4"}),r[2]||(r[2]=e("span",null,"Print Pass",-1))],8,ut)])):(i(),a("button",{key:1,onClick:c=>P(t),disabled:g.value===t.id||t.capacity&&(t.registered_count||0)>=t.capacity,class:"px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"},[g.value===t.id?(i(),a("span",xt)):k("",!0),e("span",null,o(t.capacity&&(t.registered_count||0)>=t.capacity?"Full":"Join Event"),1)],8,mt))])])]))),128))])):(i(),a("div",ht,[n(d(y),{class:"w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4"}),r[3]||(r[3]=e("h3",{class:"text-lg font-medium text-gray-900 dark:text-white"},"No upcoming events",-1)),r[4]||(r[4]=e("p",{class:"text-gray-500 dark:text-gray-400"},"Check back later for new events",-1))]))]))}});export{Vt as default};
