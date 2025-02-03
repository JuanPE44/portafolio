/* empty css                                 */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as createAstro, i as renderSlot, j as renderComponent, k as renderScript, l as renderHead } from '../chunks/astro/server_DAqzDwQc.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$r = createAstro();
const $$IconWork = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$IconWork;
  const { width = 15, height = 15, className = "fill-bg" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(className, "class")} viewBox="0 0 24 24"><path d="M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v11q0 .825-.587 1.413T20 21zm6-15h4V4h-4z"></path></svg>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/icons/IconWork.astro", undefined);

const $$Astro$q = createAstro();
const $$IconRowRigth = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$IconRowRigth;
  const { width = 20, height = 20, className = "stroke-primary" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(className, "class")} viewBox="0 0 15 15"><path fill="none" stroke-linecap="square" d="m6.5 10.5l3-3l-3-3"></path></svg>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/icons/IconRowRigth.astro", undefined);

const $$Astro$p = createAstro();
const $$IconGithub = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$IconGithub;
  const { width = 15, height = 15, className = "fill-bg" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(className, "class")} viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path> </svg>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/icons/IconGithub.astro", undefined);

const $$Astro$o = createAstro();
const $$IconLinkedin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$IconLinkedin;
  const { width = 15, height = 15, className = "fill-bg" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(className, "class")} viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path></svg>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/icons/IconLinkedin.astro", undefined);

const $$Astro$n = createAstro();
const $$HeroIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$HeroIcon;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${className}  cursor-pointer p-5 lg:p-7 bg-[#d8d8d896] filter backdrop-blur-lg border-[1px] border-[#ffffff5e] absolute  rounded-full`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/sections/hero/HeroIcon.astro", undefined);

const $$Astro$m = createAstro();
const $$ContainerSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$ContainerSection;
  const { className = "py-20 md:py-28" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`relative w-full md:min-h-screen ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/ui/ContainerSection.astro", undefined);

const $$Astro$l = createAstro();
const $$CardHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$CardHero;
  const { className = "", title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`p-3 bg-primary absolute rounded-2xl ${className}`, "class")}> <h3 class="text-white font-bold text-base sm:text-sm lg:text-base"> ${title} </h3> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/sections/hero/CardHero.astro", undefined);

const $$Astro$k = createAstro();
const $$IconCheck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$IconCheck;
  const { width = 15, height = 15, className = "fill-bg" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(className, "class")} viewBox="0 0 24 24"><path d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"></path></svg>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/icons/IconCheck.astro", undefined);

const $$ListOfHabilities = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul class="text-gray text-sm"> <li class="flex gap-2 items-center"> ${renderComponent($$result, "IconCheck", $$IconCheck, { "className": "fill-secondary" })}<span>Diseño UX/UI</span> </li> <li class="flex gap-2 items-center"> ${renderComponent($$result, "IconCheck", $$IconCheck, { "className": "fill-secondary" })}<span>Desarrollo Frontend</span> </li> <li class="flex gap-2 items-center"> ${renderComponent($$result, "IconCheck", $$IconCheck, { "className": "fill-secondary" })}<span>Resolucion de problemas</span> </li> </ul>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/sections/hero/ListOfHabilities.astro", undefined);

const $$Astro$j = createAstro();
const $$IconAstro = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$IconAstro;
  const { width = 15, height = 15, className = "fill-white" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(className, "class")} viewBox="0 0 24 24"><path d="M9.24 19.035c-.901-.826-1.164-2.561-.789-3.819c.65.793 1.552 1.044 2.486 1.186c1.44.218 2.856.137 4.195-.524c.153-.076.295-.177.462-.278c.126.365.159.734.115 1.11c-.107.915-.56 1.622-1.283 2.158c-.289.215-.594.406-.892.608c-.916.622-1.164 1.35-.82 2.41l.034.114a2.4 2.4 0 0 1-1.07-.918a2.6 2.6 0 0 1-.412-1.401c-.003-.248-.003-.497-.036-.74c-.081-.595-.36-.86-.883-.876a1.034 1.034 0 0 0-1.075.843q-.013.058-.033.126M4.1 15.007s2.666-1.303 5.34-1.303l2.016-6.26c.075-.304.296-.51.544-.51c.25 0 .47.206.545.51l2.016 6.26c3.167 0 5.34 1.303 5.34 1.303L15.363 2.602c-.13-.366-.35-.602-.645-.602H9.283c-.296 0-.506.236-.645.602c-.01.024-4.538 12.405-4.538 12.405"></path></svg>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/icons/IconAstro.astro", undefined);

const $$Astro$i = createAstro();
const $$IconReact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$IconReact;
  const { width = 15, height = 15, className = "fill-[#61DAFB]" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 128 128"><g${addAttribute(className, "class")}><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8M92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9M81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4q-3.3-4.8-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4q3.3 4.8 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10m8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2M64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2s4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3m-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1m-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2M64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2s-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3m22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2M31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6M7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64m28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9M96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6m9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4"></path></g></svg>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/icons/IconReact.astro", undefined);

const $$Astro$h = createAstro();
const $$IconTypescript = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$IconTypescript;
  const { width = 15, height = 15, className = "fill-[#007ACC]" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256"${addAttribute(className, "class")} rx="60"></rect><path fill="#fff" d="m56.611 128.849l-.081 10.484h33.32v94.679h23.569v-94.679h33.32v-10.281c0-5.689-.121-10.443-.284-10.565c-.122-.162-20.399-.244-44.983-.203l-44.739.122zm149.956-10.741c6.501 1.626 11.459 4.511 16.01 9.224c2.357 2.52 5.851 7.112 6.136 8.209c.081.325-11.053 7.802-17.798 11.987c-.244.163-1.22-.894-2.317-2.519c-3.291-4.795-6.745-6.868-12.028-7.233c-7.761-.529-12.759 3.535-12.718 10.321c0 1.991.284 3.169 1.097 4.795c1.706 3.535 4.876 5.648 14.832 9.955c18.326 7.884 26.168 13.085 31.045 20.48c5.445 8.249 6.664 21.415 2.966 31.208c-4.063 10.646-14.141 17.879-28.323 20.277c-4.388.772-14.791.65-19.504-.203c-10.281-1.829-20.033-6.908-26.047-13.572c-2.357-2.601-6.949-9.387-6.664-9.875c.121-.162 1.178-.812 2.356-1.503c1.138-.65 5.446-3.129 9.509-5.486l7.355-4.267l1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305c8.167 4.308 19.383 3.698 24.909-1.259c2.357-2.154 3.332-4.389 3.332-7.68c0-2.967-.366-4.267-1.91-6.502c-1.991-2.844-6.054-5.242-17.595-10.24c-13.206-5.689-18.895-9.224-24.096-14.832c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.616-1.219-12.678-.447-16.335c2.722-12.759 12.353-21.658 26.25-24.3c4.511-.853 14.994-.528 19.424.569"></path></g></svg>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/icons/IconTypescript.astro", undefined);

const $$Astro$g = createAstro();
const $$ListOfTechnologies = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$ListOfTechnologies;
  return renderTemplate`${maybeRenderHead()}<ul class="text-gray text-sm"> <li class="flex gap-2 items-center"> ${renderComponent($$result, "IconTypescript", $$IconTypescript, {})} <span>Typescript</span> </li> <li class="flex gap-2 items-center"> ${renderComponent($$result, "IconReact", $$IconReact, {})} <span>React</span> </li> <li class="flex gap-2 items-center"> ${renderComponent($$result, "IconAstro", $$IconAstro, {})} <span>Astro</span> </li> </ul>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/sections/hero/ListOfTechnologies.astro", undefined);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ContainerSection", $$ContainerSection, { "className": "py-0" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full flex flex-col sm:flex-row min-h-screen"> <div class="w-full sm:w-1/2 pt-28 sm:pt-0 min-h-screen flex flex-col gap-10 sm:justify-center relative"> <div class="sm:hidden w-96 h-96 bg-gradient-to-r -bottom-1/3 from-primary to-secondary opacity-25 blur-3xl absolute left-1/2 transform -translate-x-1/2 rounded-full -z-10"></div> <div class="flex flex-col gap-4"> <p class="text-zinc-400 text-sm md:text-base">
Llevando tus proyectos web al siguiente nivel
</p> <div class="flex flex-col gap-3"> <h1 class="text-white text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
Desarrollador Frontend <span class="text-primary">React</span> & <span class="text-primary">Typescript</span> </h1> <h2 class="text-gray text-base sm:text-base lg:text-lg">
Soy Juan. Diseño y programo experiencias web simples, funcionales y
            hermosas.
</h2> </div> </div> <div class="flex flex-col gap-3"> <div class="flex gap-3"> <a href="/work" class="bg-secondary text-bg font-bold py-2 px-4 rounded-2xl flex gap-2 items-center"> ${renderComponent($$result2, "IconWork", $$IconWork, {})} <span>Trabajos</span> </a> <a href="/about" class="border-[1px] border-white text-white font-bold py-2 px-4 rounded-2xl">Sobre mi</a> </div> <div class="flex justify-center sm:hidden fixed bottom-5 w-full"> <div id="fadeElement" class="p-1 border border-primary rounded-full animate-bounce filter backdrop-blur-2xl z-50"> ${renderComponent($$result2, "IconRowRigth", $$IconRowRigth, { "width": "35", "height": "35", "className": "rotate-90 stroke-primary" })} </div> </div> </div> </div> <div class="w-full sm:w-1/2 min-h-screen flex justify-center items-center"> <div class="relative"> <!-- Card habilidades --> ${renderComponent($$result2, "CardHero", $$CardHero, { "className": "-top-[60%] -left-[15%] sm:-top-[40%] sm:-left-[10%]  md:-left-1/4 md:-top-[40%] lg:-left-1/2 lg:-top-[35%]", "title": "Habilidades" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ListOfHabilities", $$ListOfHabilities, {})} ` })} <!-- Card Github --> ${renderComponent($$result2, "HeroIcon", $$HeroIcon, { "className": "-top-[15%] -right-[15%]" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "IconGithub", $$IconGithub, { "width": "35", "height": "35" })} ` })} <img class="rounded-2xl w-60 h-52 object-cover" src="/images/foto-hero.png" alt=""> <!-- Card Linkedin --> ${renderComponent($$result2, "HeroIcon", $$HeroIcon, { "className": " -bottom-[15%] -left-[15%] " }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "IconLinkedin", $$IconLinkedin, { "width": "35", "height": "35" })} ` })} <!-- Card Tecnologicas --> ${renderComponent($$result2, "CardHero", $$CardHero, { "className": "-bottom-[60%] -right-[19%] sm:-bottom-[45%] sm:-right-[20%] md:-bottom-[40%] md:-right-1/3 lg:-right-[43%]", "title": "Mis tecnologias preferidas" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ListOfTechnologies", $$ListOfTechnologies, {})} ` })} </div> </div> </div> ` })} ${renderScript($$result, "C:/programacion JavaScript/repositorios/portafolio/src/components/sections/hero/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/sections/hero/Hero.astro", undefined);

const $$Astro$f = createAstro();
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Badge;
  const { name, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(`${className} text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-2xl`, "class")}> ${name} </span>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/ui/Badge.astro", undefined);

const $$Astro$e = createAstro();
const $$BadgeTecnologie = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$BadgeTecnologie;
  const { name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> ${name == "Astro" ? renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "name": name, "className": "bg-[#ff6a3d]" })}` : name == "Figma" ? renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "name": name, "className": "bg-[#f21eab]" })}` : name == "Typescript" ? renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "name": name, "className": "bg-[#007acc]" })}` : name == "React" ? renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "name": name, "className": "bg-[#61DBFB]" })}` : name == "Tailwind" ? renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "name": name, "className": "bg-[#38B2AC]" })}` : renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "name": name })}`} </div>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/ui/BadgeTecnologie.astro", undefined);

const $$Astro$d = createAstro();
const $$CardWork = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$CardWork;
  const { url, title, jobTitle, description, details, tecnologies } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex md:flex-row flex-col items-center bg-gray-bg rounded-2xl border-[#fff1] border-[1px]"> <div class="w-full md:w-1/2 relative"> <img class="rounded-2xl w-full h-72 md:h-[400px] object-cover object-top filter"${addAttribute(url, "src")} alt=""> <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-primary to-secondary opacity-20 rounded-2xl"></div> </div> <div class="flex flex-col w-full md:w-1/2 p-4"> <h3 class="text-secondary text-3xl font-bold text-left mt-3 md:mt-0"> ${title} </h3> <h5 class="text-zinc-400 italic">${jobTitle}</h5> <div class="flex mt-4"> ${tecnologies.map((tecnology) => renderTemplate`${renderComponent($$result, "BadgeTecnologie", $$BadgeTecnologie, { "name": tecnology })}`)} </div> <p class="text-gray mt-5">${description}</p> <div class="mt-3"> ${details.map((detail) => renderTemplate`<div class="flex gap-1 items-center text-lg text-white"> ${renderComponent($$result, "IconCheck", $$IconCheck, { "className": "fill-primary", "width": "20", "height": "20" })} <span>${detail}</span> </div>`)} </div> <div class="mt-10 flex gap-3"> <a href="/work" class="border-[1px] border-white text-white font-bold py-2 px-4 rounded-2xl">Ver más</a> <a href="/work" class="bg-primary text-white font-bold py-2 px-4 rounded-2xl">Link</a> </div> </div> </div>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/sections/works/CardWork.astro", undefined);

const $$Astro$c = createAstro();
const $$ListOfWork = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ListOfWork;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-6"> <div class="flex flex-col w-full items-center"> ${renderComponent($$result, "CardWork", $$CardWork, { "url": "/images/work-1.png", "title": "Mamparas esmeralda", "jobTitle": "Freelancer", "description": "Encargado del dise\xF1o y desarrollo del sitio web para Mamparas Esmeralda, donde lider\xE9 la planificaci\xF3n del proyecto y realic\xE9 el dise\xF1o personalizado del sitio. ", "details": ["Dise\xF1o UX/UI", "Desarrollo Frontend"], "tecnologies": ["Astro", "Figma", "Typescript", "Tailwind"] })} </div> <a href="" class="py-2 px-4 relative text-center text-bg bg-secondary font-bold rounded-2xl border border-[#fff1]">Ver mas trabajos
</a> </div>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/sections/works/ListOfWork.astro", undefined);

const $$Astro$b = createAstro();
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { text, className = "mb-20" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2${addAttribute(`text-white text-2xl sm:text-3xl font-bold flex gap-2 items-center w-full justify-center  ${className}`, "class")}> <div class="border-[1px] border-primary rounded-full p-1"> ${renderSlot($$result, $$slots["default"])} </div> <span>${text}</span> </h2>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/ui/SectionTitle.astro", undefined);

const $$Works = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ContainerSection", $$ContainerSection, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "text": "Mi trabajo" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "IconWork", $$IconWork, { "className": "fill-primary" })} ` })} ${renderComponent($$result2, "ListOfWork", $$ListOfWork, {})} ` })}`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/sections/works/Works.astro", undefined);

const $$Astro$a = createAstro();
const $$IconLigth = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$IconLigth;
  const { width = 15, height = 15, className = "fill-primary" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 24 24"><path${addAttribute(className, "class")} d="M12 6a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V19a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1.8c-1.79-1.04-3-2.98-3-5.2a6 6 0 0 1 6-6m2 15v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1zm6-10h3v2h-3zM1 11h3v2H1zM13 1v3h-2V1zM4.92 3.5l2.13 2.14l-1.42 1.41L3.5 4.93zm12.03 2.13l2.12-2.13l1.43 1.43l-2.13 2.12z"></path></svg>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/icons/IconLigth.astro", undefined);

const $$Astro$9 = createAstro();
const $$CardProject = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$CardProject;
  const { title, urlDemo, urlGithub } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex w-full flex-col gap-4"> <div class="bg-gray-bg w-full flex items-center justify-between px-4 py-3 rounded-2xl border-[#fff1] border-[1px]"> <h3 class="text-secondary text-xl md:text-3xl font-bold text-left"> ${title} </h3> <div class="flex gap-2 items-center"> <a class="px-4 py-2 rounded-2xl bg-primary text-white font-bold"${addAttribute(urlDemo, "href")}>Demo</a> <a${addAttribute(urlGithub, "href")} class="flex gap-2 px-4 py-2 rounded-2xl bg-secondary text-bg font-bold"> ${renderComponent($$result, "IconGithub", $$IconGithub, { "className": "fill-bg", "width": "20", "height": "20" })} <span>Codigo</span> </a> </div> </div> <div class="flex justify-center items-center bg-gray-bg rounded-2xl p-4 relative gap-4 border-[#fff1] border-[1px]"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/sections/projects/CardProject.astro", undefined);

const $$Astro$8 = createAstro();
const $$ButtonRow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ButtonRow;
  const { className = "", id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute(`${className} w-10 h-10 flex justify-center items-center bg-gray-bg rounded-lg border-[1px] border-gray cursor-pointer`, "class")}> ${renderComponent($$result, "IconRowRigth", $$IconRowRigth, { "className": "fill-gray" })} </div>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/sections/projects/ButtonRow.astro", undefined);

const $$Game2048 = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col sm:flex-row justify-center items-center rounded-2xl relative gap-4"> <div class="absolute top-0 w-full" id="disable-scroll"></div> <div id="header" class="flex w-full sm:w-auto flex-col-reverse gap-3 sm:flex-col p-3 rounded-2xl bg-gray-bg min-w-52"> <div class="container-score flex flex-row sm:flex-col gap-2 font-bold"> <div class="bg-gray-bg text-white p-1 rounded-2xl flex flex-row sm:flex-col w-1/2 sm:w-full items-center justify-center gap-1"> <h3>SCORE</h3> <span id="score">0</span> </div> <div class="bg-gray-bg text-white p-1 rounded-2xl flex flex-row sm:flex-col w-1/2 sm:w-full justify-center items-center gap-1"> <h3>BEST</h3> <span id="best-score">0</span> </div> </div> <div class="newgame flex flex-col mt-1 sm:mt-5"> <div class="hidden sm:grid container-buttons grid-cols-3 grid-rows-2 place-content-center gap-y-2"> <div></div> ${renderComponent($$result, "ButtonRow", $$ButtonRow, { "id": "row-up", "className": "-rotate-90 m-auto" })} <div></div> ${renderComponent($$result, "ButtonRow", $$ButtonRow, { "id": "row-left", "className": "rotate-180 ml-auto" })} ${renderComponent($$result, "ButtonRow", $$ButtonRow, { "id": "row-bottom", "className": "rotate-90 m-auto" })} ${renderComponent($$result, "ButtonRow", $$ButtonRow, { "id": "row-right", "className": "mr-auto" })} </div> <button class="mt-5 px-4 py-3 rounded-2xl bg-primary text-bold text-white">Nuevo juego</button> </div> </div> <div id="app"> <div class="container-game flex gap-5 w-full"></div> <div class="board min-h-80 min-w-80"> <div class="container-win"> <h1>YOU WON!</h1> <div class="win-score">Score: <span>1000</span></div> <button class="button-win">New Game</button> </div> </div> </div> <div class="bg-gray-bg p-3 sm:min-h-80 relative rounded-2xl text-white"> <h3 class="text-secondary text-xl font-bold text-left mb-2">Como Jugar</h3> <p class="text-gray">
Puedes mover las fichas en las cuatro direcciones (arriba, abajo,
      izquierda y derecha) utilizando las flechas del teclado.
</p> <p class="text-gray mt-3">
El objetivo del juego es combinar las fichas numeradas hasta alcanzar el
      número 2048.
</p> </div> </div> ${renderScript($$result, "C:/programacion JavaScript/repositorios/portafolio/src/components/sections/projects/Game2048.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/sections/projects/Game2048.astro", undefined);

const $$AnalogicClock = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="analogic-clock" class="min-w-72 min-h-72"></div> ${renderScript($$result, "C:/programacion JavaScript/repositorios/portafolio/src/components/sections/projects/AnalogicClock.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/sections/projects/AnalogicClock.astro", undefined);

const $$ListOfProjects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-6"> <div class="flex flex-col items-center gap-20"> ${renderComponent($$result, "CardProject", $$CardProject, { "title": "2048", "urlDemo": "ada", "urlGithub": "ada" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Game2048", $$Game2048, {})} ` })} ${renderComponent($$result, "CardProject", $$CardProject, { "title": "Relog analogico", "urlDemo": "ada", "urlGithub": "ada" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AnalogicClock", $$AnalogicClock, {})} ` })} <!--
      <CardProject title="Simulador arena" urlDemo="ada" urlGithub="ada">
        <Sand />
      </CardProject>
    --> </div> <a href="" class="py-2 px-4 relative text-white text-center bg-primary font-bold rounded-2xl">Ver proyectos
</a> </div>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/sections/projects/ListOfProjects.astro", undefined);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ContainerSection", $$ContainerSection, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "text": "Proyectos/Experimentos" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "IconLigth", $$IconLigth, {})} ` })} ${renderComponent($$result2, "ListOfProjects", $$ListOfProjects, {})} ` })}`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/sections/projects/Projects.astro", undefined);

const $$Astro$7 = createAstro();
const $$IconExperience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$IconExperience;
  const { width = 20, height = 20, className = "fill-primary" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path><path${addAttribute(className, "class")} d="M7.416 3A5 5 0 0 0 7 5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2c0-.711-.148-1.388-.416-2H18a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM12 14H9a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2m3-4H9a1 1 0 0 0-.117 1.993L9 12h6a1 1 0 1 0 0-2m-3-8a3 3 0 0 1 2.236 1c.428.478.704 1.093.755 1.772L15 5H9c0-.725.257-1.39.685-1.908L9.764 3c.55-.614 1.348-1 2.236-1"></path></g></svg>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/icons/IconExperience.astro", undefined);

const $$Astro$6 = createAstro();
const $$IconCalendar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$IconCalendar;
  const { width = 15, height = 15, className = "fill-gray" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 24 24"><path${addAttribute(className, "class")} d="M12 14q-.425 0-.712-.288T11 13t.288-.712T12 12t.713.288T13 13t-.288.713T12 14m-4 0q-.425 0-.712-.288T7 13t.288-.712T8 12t.713.288T9 13t-.288.713T8 14m8 0q-.425 0-.712-.288T15 13t.288-.712T16 12t.713.288T17 13t-.288.713T16 14m-4 4q-.425 0-.712-.288T11 17t.288-.712T12 16t.713.288T13 17t-.288.713T12 18m-4 0q-.425 0-.712-.288T7 17t.288-.712T8 16t.713.288T9 17t-.288.713T8 18m8 0q-.425 0-.712-.288T15 17t.288-.712T16 16t.713.288T17 17t-.288.713T16 18M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"></path></svg>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/icons/IconCalendar.astro", undefined);

const $$Circle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-secondary min-w-4 h-4 mt-1 rounded-full"></div>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/ui/Circle.astro", undefined);

const $$Astro$5 = createAstro();
const $$CardExperience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CardExperience;
  const { title, date, description, jobTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative -left-2 flex gap-2"> ${renderComponent($$result, "Circle", $$Circle, {})} <div class="flex flex-col lg:flex-row gap-10"> <div class="flex flex-col lg:w-1/3"> <h3 class="text-secondary text-2xl font-bold text-left"> ${title} </h3> <p class="text-white italic mt-2">${jobTitle}</p> <div class="flex gap-2 text-xs text-zinc-400 mt-2"> ${renderComponent($$result, "IconCalendar", $$IconCalendar, { "className": "fill-zinc-400" })} <span>${date}</span> </div> </div> <div class="flex flex-col gap-3 flex-1"> <p class="text-gray"> ${description} </p> <a href="/work" class="text-primary font-bold flex items-center"> <span>Saber mas</span> ${renderComponent($$result, "IconRowRigth", $$IconRowRigth, {})} </a> </div> </div> </div>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/sections/experience/CardExperience.astro", undefined);

const $$ListOfExperiences = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="borde-parcial-l pb-12 pt-28 flex flex-col gap-10" data-astro-cid-lozvbnti> ${renderComponent($$result, "CardExperience", $$CardExperience, { "title": "Desarrollador Frontend", "jobTitle": "Frelancer", "date": "Actualmente...", "description": "Actualmente, me dedico a desarrollar sitios web que combinan dise\xF1o moderno y funcionalidad, ayudando a negocios a destacar en el entorno digital. Una de mis experiencias m\xE1s destacadas fue la creaci\xF3n de un sitio web para una vidrier\xEDa que buscaba presencia en l\xEDnea. ", "data-astro-cid-lozvbnti": true })} ${renderComponent($$result, "CardExperience", $$CardExperience, { "title": "Pr\xE1cticas Profesionales en Programaci\xF3n", "jobTitle": "Escuela Tecnica N\xBA2 Ing. Felipe Senillosa", "date": "Marzo 2020 - Diciembre 2023", "description": "Durante el \xFAltimo a\xF1o de mi tecnicatura en programaci\xF3n, tuve la oportunidad de participar en proyectos destacados que fortalecieron mis habilidades t\xE9cnicas y mi capacidad de trabajo en equipo.", "data-astro-cid-lozvbnti": true })} </div> `;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/sections/experience/ListOfExperiences.astro", undefined);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ContainerSection", $$ContainerSection, { "className": "pt-28" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "text": "Mi experiencia", "className": "mb-10" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "IconExperience", $$IconExperience, {})} ` })} ${renderComponent($$result2, "ListOfExperiences", $$ListOfExperiences, {})} ` })}`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/sections/experience/Experience.astro", undefined);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="flex gap-2 items-center justify-center bg-gray-bg p-4 rounded-2xl mb-4"> <div class="flex gap-2 items-center justify-between w-full"> <p class="text-gray">
Derechos reservados <span class="text-secondary text-bold">Juan Peñalba</span> &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} </p> <div class="flex gap-2"> <a href="https://github.com/JuanPe44" target="_blank"> ${renderComponent($$result, "IconGithub", $$IconGithub, { "className": "fill-white", "width": "30", "height": "30" })} </a> <a href="https://www.linkedin.com/in/JuanPe44/" target="_blank"> ${renderComponent($$result, "IconLinkedin", $$IconLinkedin, { "className": "fill-white", "width": "30", "height": "30" })} </a> </div> </div> </footer>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/layouts/Footer.astro", undefined);

const $$ContainerPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="max-w-4xl px-4 sm:px-10 md:px-12 lg:px-0 sm:mx-auto relative overflow-x-hidden lg:overflow-x-visible"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/ui/ContainerPage.astro", undefined);

const $$Astro$4 = createAstro();
const $$IconLogo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$IconLogo;
  const { width = 25, height = 17, className = "fill-[#E126EB]" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 25 17" fill="none"> <path d="M4.375 0.85C4.55833 0.816666 4.85 0.774999 5.25 0.725C5.65 0.658333 6.03333 0.625 6.4 0.625C6.78333 0.625 7.11667 0.658333 7.4 0.725C7.7 0.774999 7.95 0.874999 8.15 1.025C8.35 1.175 8.5 1.38333 8.6 1.65C8.7 1.91667 8.75 2.26667 8.75 2.7V11.95C8.75 13.4333 8.325 14.55 7.475 15.3C6.625 16.0333 5.375 16.4 3.725 16.4C2.85833 16.4 2.15833 16.2667 1.625 16C1.24167 15.8167 0.958333 15.5667 0.775 15.25C0.608333 14.9333 0.525 14.575 0.525 14.175C0.525 13.8417 0.566667 13.55 0.65 13.3C0.75 13.05 0.866667 12.85 1 12.7C1.31667 12.7667 1.58333 12.8167 1.8 12.85C2.03333 12.8667 2.28333 12.875 2.55 12.875C3.2 12.875 3.66667 12.7167 3.95 12.4C4.23333 12.0667 4.375 11.5833 4.375 10.95V0.85ZM17.6027 7.875C18.3027 7.875 18.8361 7.71667 19.2027 7.4C19.5861 7.06667 19.7777 6.56667 19.7777 5.9C19.7777 5.26667 19.5777 4.78333 19.1777 4.45C18.7944 4.1 18.2277 3.925 17.4777 3.925C17.2111 3.925 16.9861 3.93333 16.8027 3.95C16.6361 3.95 16.4611 3.96667 16.2777 4V7.875H17.6027ZM16.3027 15.9C16.1194 15.95 15.8277 16 15.4277 16.05C15.0444 16.1 14.6611 16.125 14.2777 16.125C13.8944 16.125 13.5527 16.0917 13.2527 16.025C12.9694 15.975 12.7277 15.875 12.5277 15.725C12.3277 15.575 12.1777 15.3667 12.0777 15.1C11.9777 14.8333 11.9277 14.4833 11.9277 14.05V2.275C11.9277 1.925 12.0194 1.65833 12.2027 1.475C12.4027 1.275 12.6694 1.11667 13.0027 0.999999C13.5694 0.799999 14.2111 0.658332 14.9277 0.574999C15.6611 0.474999 16.3944 0.424999 17.1277 0.424999C19.4277 0.424999 21.1861 0.916666 22.4027 1.9C23.6194 2.88333 24.2277 4.21667 24.2277 5.9C24.2277 6.71667 24.0944 7.45833 23.8277 8.125C23.5777 8.775 23.1944 9.34167 22.6777 9.825C22.1777 10.2917 21.5361 10.6583 20.7527 10.925C19.9861 11.175 19.0944 11.3 18.0777 11.3H16.3027V15.9Z"${addAttribute(className, "class")}></path> </svg>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/icons/IconLogo.astro", undefined);

const $$Astro$3 = createAstro();
const $$IconMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$IconMenu;
  const { width = 15, height = 15, className = "stroke-white", id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(className, "class")}${addAttribute(id, "id")} viewBox="0 0 24 24"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6.001h18m-18 6h18m-18 6h18"></path></svg>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/icons/IconMenu.astro", undefined);

const $$Astro$2 = createAstro();
const $$IconCross = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$IconCross;
  const { width = 15, height = 15, className = "fill-bg", id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 15 15"${addAttribute(className, "class")}${addAttribute(id, "id")}><path d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"></path></svg>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/icons/IconCross.astro", undefined);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="z-50 text-white flex w-full max-w-4xl left-1/2 -translate-x-1/2 top-3 fixed"> <div class="w-full flex justify-between items-center relative mx-4 sm:mx-10 md:mx-12 lg:mx-0 px-3 py-3 sm:py-2 bg-gray-bg rounded-2xl filter backdrop-blur-2xl"> <a href="/" class="cursor-pointer"> ${renderComponent($$result, "IconLogo", $$IconLogo, {})} </a> <nav class="hidden sm:flex absolute left-1/2 -translate-x-1/2"> <ul class="flex gap-4"> <li><a href="/work">Trabajos</a></li> <li><a href="/about">Proyectos</a></li> <li><a href="/about">Sobre mi</a></li> <li><a href="/blog">Blog</a></li> </ul> </nav> <div> <a class="hidden sm:flex border border-white text-white font-bold py-2 px-4 rounded-2xl" href="/contact">Contacto</a> ${renderComponent($$result, "IconMenu", $$IconMenu, { "className": "stroke-white sm:hidden z-50 cursor-pointer", "width": "25", "height": "25", "id": "menu-mobile" })} </div> </div> <nav id="nav-mobile" class="translate-y-full opacity-0 absolute top-0 transition-[3s] flex flex-col right-0 rounded-2xl bg-secondary w-full h-screen py-2 px-4"> <div class="w-full flex justify-end"> ${renderComponent($$result, "IconCross", $$IconCross, { "width": "25", "height": "25", "className": "fill-bg cursor-pointer", "id": "menu-close" })} </div> <div class="w-full"> <ul class="flex flex-col items-center mt-20 gap-3 text-3xl text-bg font-bold"> <li><a href="/work">Trabajos</a></li> <li><a href="/about">Proyectos</a></li> <li><a href="/about">Sobre mi</a></li> <li><a href="/blog">Blog</a></li> <li><a href="/contact">Contacto</a></li> </ul> </div> </nav> </header> ${renderScript($$result, "C:/programacion JavaScript/repositorios/portafolio/src/components/layouts/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/layouts/Header.astro", undefined);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="icon" type="image/png" href="/images/logo.png"><title>Juan Peñalba</title>${renderHead()}</head> <body> ${renderComponent($$result, "ContainerPage", $$ContainerPage, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderSlot($$result2, $$slots["default"])} ` })} </body></html>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/layouts/Layout.astro", undefined);

const $$Astro = createAstro();
const $$IconBook = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$IconBook;
  const { width = 15, height = 15, className = "fill-primary" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 512 512"><path${addAttribute(className, "class")} d="M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 0 0-17.92 5.33A32 32 0 0 0 16 79.9V366c0 19.34 13.76 33.93 32 33.93c71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 0 0 6.94-3V106.82a15.9 15.9 0 0 0-5.46-12A143 143 0 0 0 202.24 74m279.68-20.7A31.33 31.33 0 0 0 464 48c-67.61.3-118.11 8.71-154.24 26a143.3 143.3 0 0 0-32.31 20.78a15.93 15.93 0 0 0-5.45 12v337.13a3.93 3.93 0 0 0 6.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0 0 32-32v-288a32 32 0 0 0-14.12-26.61"></path></svg>`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/icons/IconBook.astro", undefined);

const $$Education = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ContainerSection", $$ContainerSection, { "className": "pb-20", "data-astro-cid-l5uvoc5x": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "text": "Educaci\xF3n", "className": "border-l-[2px] pt-28 pb-4 border-border-color", "data-astro-cid-l5uvoc5x": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "IconBook", $$IconBook, { "data-astro-cid-l5uvoc5x": true })} ` })} ${maybeRenderHead()}<div class="p-5 border-l-[2px] w-20 border-b-[2px] border-border-color rounded-bl-2xl" data-astro-cid-l5uvoc5x></div> <div class="w-full" data-astro-cid-l5uvoc5x> <div class="w-full flex flex-col items-start" data-astro-cid-l5uvoc5x> <div class="w-1/2 borde-parcial-t" data-astro-cid-l5uvoc5x></div> <div class="w-[90%] sm:w-1/2 rounded-tr-2xl relative borde-parcial-r flex flex-col gap-10 pt-10 pb-20" data-astro-cid-l5uvoc5x> <div class="absolute -top-[2px] -right-[2px] w-[97%] h-11 rounded-tr-2xl bg-bg border-t-[2px] border-r-[2px] border-border-color" data-astro-cid-l5uvoc5x> <div class="absolute -top-[2px] -right-[2px] w-5 h-72 rounded-tr-2xl bg-bg border-t-[2px] border-r-[2px] border-border-color" data-astro-cid-l5uvoc5x></div> </div> <div class="mt-10 flex w-full relative -right-2 gap-2" data-astro-cid-l5uvoc5x> <div class="w-full flex justify-end" data-astro-cid-l5uvoc5x> <div class="flex flex-col" data-astro-cid-l5uvoc5x> <h3 class="text-secondary text-xl sm:text-2xl font-bold sm:max-w-72 text-left" data-astro-cid-l5uvoc5x>
Universidad Nacional del Centro de la Provincia de Buenos Aires
</h3> <p class="text-white italic mt-2" data-astro-cid-l5uvoc5x>Ingenieria en sistemas</p> <div class="flex gap-2 text-xs text-zinc-400 mt-2" data-astro-cid-l5uvoc5x> ${renderComponent($$result2, "IconCalendar", $$IconCalendar, { "className": "fill-zinc-400", "data-astro-cid-l5uvoc5x": true })} <span data-astro-cid-l5uvoc5x>Marzo 2024 - Actualmente..</span> </div> </div> </div> ${renderComponent($$result2, "Circle", $$Circle, { "data-astro-cid-l5uvoc5x": true })} </div> <div class="flex w-full relative -right-2 gap-2" data-astro-cid-l5uvoc5x> <div class="w-full flex justify-start relative sm:ml-4 sm:-right-full" data-astro-cid-l5uvoc5x> <div class="flex flex-col" data-astro-cid-l5uvoc5x> <h3 class="text-secondary text-xl sm:text-2xl font-bold sm:max-w-72 text-left" data-astro-cid-l5uvoc5x>
ESCUELA TECNICA N°2 ING. FELIPE SENILLOSA
</h3> <p class="text-white italic mt-2" data-astro-cid-l5uvoc5x>
Tecnicatura, Progamacion infomatica Aplicaciones especificas
</p> <div class="flex gap-2 text-xs text-zinc-400 mt-2" data-astro-cid-l5uvoc5x> ${renderComponent($$result2, "IconCalendar", $$IconCalendar, { "className": "fill-zinc-400", "data-astro-cid-l5uvoc5x": true })} <span data-astro-cid-l5uvoc5x>Marzo 2020 - Diciembre 2023</span> </div> </div> </div> ${renderComponent($$result2, "Circle", $$Circle, { "data-astro-cid-l5uvoc5x": true })} </div> </div> </div> </div> ` })} `;
}, "C:/programacion JavaScript/repositorios/portafolio/src/components/sections/education/Education.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "Education", $$Education, {})} ${renderComponent($$result2, "Works", $$Works, {})} ${renderComponent($$result2, "Projects", $$Projects, {})}  ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} <!-- shadow 
  <div
    class="w-96 h-96 bg-gradient-to-r from-primary to-secondary opacity-15 blur-3xl absolute left-1/2 transform -translate-x-1/2 rounded-full -z-10"
  >
    -->`;
}, "C:/programacion JavaScript/repositorios/portafolio/src/pages/index.astro", undefined);

const $$file = "C:/programacion JavaScript/repositorios/portafolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
