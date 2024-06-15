import{j as e,N as i,R as s,a as r,H as t,C as a,T as c,F as n,c as o,b as l}from"./index-CiGW1Fcw.js";import{V as d}from"./Video-B7CMWvh3.js";import{S as h}from"./SocialMediaButton-RXPFDYGD.js";function m(){return e.jsxs(e.Fragment,{children:[e.jsx(i,{items:["About","Demo","Links"]}),e.jsx(s,{children:e.jsx("div",{className:"flex justify-center items-center mt-32",children:e.jsxs("div",{className:"responsive-grid lg:w-2/3  place-items-center",children:[e.jsx("div",{className:" md:justify-start justify-center",children:e.jsx(r,{src:"/pages/cpu_fetcher/cpu.png",size:"small",bonus_classes:"scale-[200%] hover:scale-[210%]"})}),e.jsx("p",{className:"m-5 small-text-bg w-fit p-5 ",children:"This was a small project I made using bash script and C to communicate with eachother, to grab information about the CPU for the user, depending on their input."})]})})}),e.jsxs(s,{children:[e.jsx(t,{id:"About",children:"About"}),e.jsx("div",{className:"flex justify-center items-center mt-10",children:e.jsx("div",{className:"grid grid-cols-1 space-x-10 space-y-10 lg:w-2/3 place-items-center",children:e.jsx(a,{color:"pink",title:"What does it do?",bonus_classes:"w-[65%] h-min",can_rotate:!0,languages:["C.png"],children:`The program uses bash initially to ask the user for what information they want from the command "head /proc/cpuinfo" in Linux's bash. Then it triggers a C file that decides what part of the CPU the user wants. Then sends the information back to the bash script, which will print the corresponding line of the command output, stored in a text file, and then removed after the program closes.`})})})]}),e.jsxs(s,{children:[e.jsx(t,{id:"Demo",children:"Demo"}),e.jsx("div",{className:"flex justify-center items-center mt-12",children:e.jsx(d,{src:"/pages/cpu_fetcher/cpufetch.mp4"})})]}),e.jsxs(s,{children:[e.jsx(t,{id:"Links",children:"Links"}),e.jsx("div",{className:"flex justify-center items-center ",children:e.jsx("div",{className:"grid grid-cols-1 lg:w-2/3  place-items-center",children:e.jsx(h,{title:"Source Code",url:"https://github.com/diceccoj/cpu_info_fetch",image:"github.png"})})})]}),e.jsx(c,{}),e.jsx(n,{})]})}o.createRoot(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(m,{})}));
