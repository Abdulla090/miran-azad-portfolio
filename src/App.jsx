import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChatCircleDots,
  CursorClick,
  FileText,
  Lightbulb,
  List,
  PenNib,
  Shapes,
  Stack,
  UsersThree,
  X,
} from '@phosphor-icons/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: '01', title: 'Nawa Records', type: 'Identity / Art Direction', typeKu: 'ناسنامە / ئاراستەی هونەری', art: 'nawa' },
  { id: '02', title: 'Object 17', type: 'Editorial / Print', typeKu: 'ئیدیتۆریاڵ / چاپ', art: 'object' },
  { id: '03', title: 'Kora', type: 'Packaging / Identity', typeKu: 'پەکەجینگ / ناسنامە', art: 'kora' },
  { id: '04', title: 'Field Notes', type: 'Campaign / Typography', typeKu: 'کەمپەین / تایپۆگرافی', art: 'field' },
  { id: '05', title: 'Miro House', type: 'Hospitality / Digital', typeKu: 'میوانداری / دیجیتاڵ', art: 'miro' },
  { id: '06', title: 'Index 26', type: 'Publication / System', typeKu: 'بڵاوکراوە / سیستەم', art: 'index' },
  { id: '07', title: 'Rê', type: 'Culture / Poster Series', typeKu: 'کولتوور / زنجیرە پۆستەر', art: 're' },
  { id: '08', title: 'North Studio', type: 'Strategy / Identity', typeKu: 'ستراتیژی / ناسنامە', art: 'north' },
  { id: '09', title: 'Mono / 09', type: 'Typography / Poster', typeKu: 'تایپۆگرافی / پۆستەر', art: 'mono' },
  { id: '10', title: 'Arc House', type: 'Architecture / Identity', typeKu: 'تەلارسازی / ناسنامە', art: 'arc' },
  { id: '11', title: 'Signal', type: 'Campaign / Motion', typeKu: 'کەمپەین / مووشن', art: 'signal' },
  { id: '12', title: 'Atelier 41', type: 'Fashion / Art Direction', typeKu: 'فاشن / ئاراستەی هونەری', art: 'atelier' },
  { id: '13', title: 'Fold', type: 'Packaging / Print', typeKu: 'پەکەجینگ / چاپ', art: 'fold' },
  { id: '14', title: 'Echo Journal', type: 'Editorial / Publication', typeKu: 'ئیدیتۆریاڵ / بڵاوکراوە', art: 'echo' },
  { id: '15', title: 'Terra', type: 'Culture / Identity', typeKu: 'کولتوور / ناسنامە', art: 'terra' },
  { id: '16', title: 'Volume', type: 'Music / Campaign', typeKu: 'میوزیک / کەمپەین', art: 'volume' },
];

const services = [
  {
    title: 'Brand identity',
    copy: 'Naming direction, visual identity, typography, color and flexible systems built to stay coherent in the real world.',
    titleKu: 'ناسنامەی براند',
    copyKu: 'ئاراستەی ناونان، ناسنامەی بینراو، تایپۆگرافی، ڕەنگ و سیستەمی نەرم کە لە جیهانی ڕاستەقینەدا یەکگرتوو دەمێنن.',
    Icon: Shapes,
  },
  {
    title: 'Art direction',
    copy: 'Campaign concepts, image language, graphic systems and launch direction with a clear point of view.',
    titleKu: 'ئاراستەی هونەری',
    copyKu: 'کۆنسێپتی کەمپەین، زمانی وێنە، سیستەمی گرافیکی و ئاراستەی دەستپێکردن بە دیدێکی ڕوون.',
    Icon: CursorClick,
  },
  {
    title: 'Editorial & type',
    copy: 'Books, posters, publications and information systems where typography carries the character.',
    titleKu: 'ئیدیتۆریاڵ و تایپ',
    copyKu: 'کتێب، پۆستەر، بڵاوکراوە و سیستەمی زانیاری کە تایپۆگرافی کەسایەتییان هەڵدەگرێت.',
    Icon: PenNib,
  },
  {
    title: 'Digital systems',
    copy: 'Web direction and interface systems that translate the identity into a precise, useful digital experience.',
    titleKu: 'سیستەمی دیجیتاڵ',
    copyKu: 'ئاراستەی وێب و سیستەمی ڕووکار کە ناسنامە دەگوازنەوە بۆ ئەزموونێکی دیجیتاڵی ورد و بەسوود.',
    Icon: Stack,
  },
];

const copy = {
  en: {
    navWork: 'Work',
    navProfile: 'Profile',
    navServices: 'Services',
    startProject: 'Start a project',
    navLabel: 'Primary navigation',
    menuLabel: 'Toggle navigation',
    homeLabel: 'Miran Azad home',
    switchLanguage: 'Switch to Kurdish Sorani',
    heroLabel: 'Independent graphic designer / Erbil',
    heroTitleTopA: 'Clear',
    heroTitleTopB: 'Ideas.',
    heroTitleBottom: 'Sharp Form.',
    heroDescription: 'Identity, art direction and graphic systems for culture, hospitality and ambitious independent brands.',
    viewWork: 'View selected work',
    specimenRole: 'GRAPHIC DESIGN / ERBIL',
    specimenSystems: 'VISUAL SYSTEMS',
    specimenMeta: 'Identity / Art direction / Digital',
    specimenForm: 'FORM / 01',
    sunLabel: 'Kurdish sun',
    systemTitle: 'From Idea to Impact',
    systemDescription: 'Ideas, context and conversation become one visual system.',
    wireLabel: "Ideas flow into Miran Azad's design process and become finished graphic work",
    graphicDesigner: 'GRAPHIC DESIGNER',
    dragLabel: 'Drag freely to reposition.',
    erbilIraq: 'Erbil / Iraq',
    worldwide: 'Worldwide',
    portraitLabel: 'Portrait of Miran Azad',
    profileName: 'Miran Azad.',
    about: 'I build identities and graphic systems that feel distinct without needing to shout. Find the strongest idea, remove what weakens it, and make every detail support the same point.',
    independentSince: 'Independent since 2019.',
    disciplines: 'Brand systems / Art direction / Editorial / Digital.',
    selectedWork: 'Selected Work.',
    selectedWorkCopy: 'Identity, campaigns, print and digital systems across different scales.',
    marquee: ['Identity', 'Typography', 'Direction', 'Editorial', 'Digital'],
    servicesTitle: 'What I Do.',
    servicesCopy: 'Identity, art direction, editorial systems and digital design.',
    processIntro: 'Small teams, direct conversations, fewer handoffs. The person you brief is the person making the work.',
    contactTitle: 'Have a Project?',
    contactCopy: 'Send the project, timing and what is not working yet. I usually reply within two working days.',
    top: 'Top',
    email: 'Email',
  },
  ku: {
    navWork: 'کارەکان',
    navProfile: 'دەربارە',
    navServices: 'خزمەتگوزارییەکان',
    startProject: 'پڕۆژەیەک دەست پێ بکە',
    navLabel: 'ڕێنوێنی سەرەکی',
    menuLabel: 'کردنەوەی ڕێنوێن',
    homeLabel: 'سەرەتای میران ئازاد',
    switchLanguage: 'گۆڕین بۆ ئینگلیزی',
    heroLabel: 'دیزاینەری گرافیکی سەربەخۆ / هەولێر',
    heroTitleTop: 'بیرۆکەی ڕوون.',
    heroTitleBottom: 'فۆرمی ورد.',
    heroDescription: 'ناسنامەی براند، ئاراستەی هونەری و سیستەمی گرافیکی بۆ کولتوور، میوانداری و براندە سەربەخۆ پڕئامانجەکان.',
    viewWork: 'کارە هەڵبژێردراوەکان ببینە',
    specimenRole: 'دیزاینی گرافیک / هەولێر',
    specimenSystems: 'سیستەمی بینراو',
    specimenMeta: 'ناسنامە / ئاراستەی هونەری / دیجیتاڵ',
    specimenForm: 'فۆرم / ٠١',
    sunLabel: 'خۆری کوردی',
    systemTitle: 'لە بیرۆکەوە بۆ کاریگەری',
    systemDescription: 'بیرۆکە، کۆنتێکست و گفتوگۆ دەبن بە یەک سیستەمی بینراو.',
    wireLabel: 'بیرۆکەکان دەچنە ناو پرۆسەی دیزاینی میران ئازاد و دەبن بە کاری گرافیکی تەواو.',
    graphicDesigner: 'دیزاینەری گرافیک',
    dragLabel: 'بە ئازادی بیگوازەوە.',
    erbilIraq: 'هەولێر / عێراق',
    worldwide: 'سەرانسەری جیهان',
    portraitLabel: 'وێنەی میران ئازاد',
    profileName: 'میران ئازاد.',
    about: 'ناسنامە و سیستەمی گرافیکی دروست دەکەم کە جیاوازن، بەبێ ئەوەی پێویستیان بە هاوار بێت. بەهێزترین بیرۆکە دەدۆزمەوە، ئەوەی لاوازە لادەبەم و هەموو وردەکارییەک لە خزمەتی هەمان مەبەستدا دادەنێم.',
    independentSince: 'لە ٢٠١٩ەوە سەربەخۆم.',
    disciplines: 'سیستەمی براند / ئاراستەی هونەری / ئیدیتۆریاڵ / دیجیتاڵ.',
    selectedWork: 'کارە هەڵبژێردراوەکان',
    selectedWorkCopy: 'ناسنامە، کەمپەین، چاپ و سیستەمی دیجیتاڵ لە قەبارە جیاوازەکاندا.',
    marquee: ['ناسنامە', 'تایپۆگرافی', 'ئاراستە', 'ئیدیتۆریاڵ', 'دیجیتاڵ'],
    servicesTitle: 'چی دەکەم.',
    servicesCopy: 'ناسنامە، ئاراستەی هونەری، سیستەمی ئیدیتۆریاڵ و دیزاینی دیجیتاڵ.',
    processIntro: 'تیمی بچووک، گفتوگۆی ڕاستەوخۆ، دەستگۆڕکێی کەمتر. ئەو کەسەی بریفەکەت وەردەگرێت، هەر ئەوە کارەکەت دروست دەکات.',
    contactTitle: 'پڕۆژەیەکت هەیە؟',
    contactCopy: 'پڕۆژەکە، کات و ئەوەی هێشتا کار ناکات بنێرە. زۆرجار لە ماوەی دوو ڕۆژی کاریدا وەڵام دەدەم.',
    top: 'سەرەتا',
    email: 'ئیمەیڵ',
  },
};

const processSteps = {
  en: [
    ['Find the real problem', 'Research, references, constraints and a sharp creative premise.'],
    ['Build the language', 'Type, image, layout, color and rules become one connected system.'],
    ['Test it in context', 'The system is pushed across the real touchpoints before anything is called finished.'],
    ['Make it usable', 'Clear files, templates and guidance so the work survives after handoff.'],
  ],
  ku: [
    ['کێشەی ڕاستەقینە بدۆزەوە', 'توێژینەوە، سەرچاوە، سنوورەکان و بنەمایەکی داهێنەرانەی ڕوون.'],
    ['زمانەکە دروست بکە', 'تایپ، وێنە، ڕیزبەندی، ڕەنگ و یاساکان دەبن بە یەک سیستەمی پەیوەست.'],
    ['لە کۆنتێکستدا تاقی بکەرەوە', 'سیستەمەکە لە خاڵە پەیوەندیدارە ڕاستەقینەکاندا تاقی دەکرێتەوە پێش ئەوەی تەواو بزانرێت.'],
    ['بەکارهێنانی ئاسان بکە', 'فایل، تێمپلەیت و ڕێنمایی ڕوون بۆ ئەوەی کارەکە دوای تەسلیمکردنیش بمێنێتەوە.'],
  ],
};

function ElasticWord({ text, className = '' }) {
  const wordRef = useRef(null);

  const animateFromPointer = (event) => {
    const letters = [...wordRef.current.querySelectorAll('.elastic-letter')];
    const pointerX = event.clientX;
    letters.forEach((letter) => {
      const rect = letter.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const distance = Math.min(Math.abs(pointerX - center), 150);
      const influence = 1 - distance / 150;
      gsap.to(letter, {
        scaleX: 1 + influence * 0.2,
        y: -influence * 2,
        duration: 0.42,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    });
  };

  const resetLetters = () => {
    if (!wordRef.current) return;
    gsap.to(wordRef.current.querySelectorAll('.elastic-letter'), {
      scaleX: 1,
      y: 0,
      duration: 0.72,
      ease: 'elastic.out(1, 0.42)',
      stagger: 0.018,
      overwrite: 'auto',
    });
  };

  return (
    <span
      ref={wordRef}
      className={`elastic-word ${className}`}
      onPointerEnter={animateFromPointer}
      onPointerMove={animateFromPointer}
      onPointerLeave={resetLetters}
    >
      {[...text].map((letter, index) => (
        <span className="elastic-letter" key={`${letter}-${index}`}>{letter}</span>
      ))}
    </span>
  );
}

const wireInputCards = [
  { id: 'ideas', label: 'Ideas', labelKu: 'بیرۆکەکان', detail: 'The first clear thought.', Icon: Lightbulb },
  { id: 'inspiration', label: 'Inspiration', labelKu: 'ئیلهام', detail: 'References with a reason.', Icon: FileText },
  { id: 'conversation', label: 'Conversations', labelKu: 'گفتوگۆکان', detail: 'What people actually mean.', Icon: ChatCircleDots },
  { id: 'culture', label: 'Culture', labelKu: 'کولتوور', detail: 'Context, place and behavior.', Icon: UsersThree },
];

const wireOutputCards = [
  { id: 'routine', art: 'routine', title: 'The New Routine', titleKu: 'ڕووتینی نوێ', kind: 'Brand Identity', kindKu: 'ناسنامەی براند', detail: 'Tactile form, packaging and image language.', detailKu: 'فۆرمی دەست‌هەستپێکراو، پەکەجینگ و زمانی وێنە.' },
  { id: 'sora', art: 'sora', title: 'Sora', titleKu: 'Sora', kind: 'Visual Campaign', kindKu: 'کەمپەینی بینراو', detail: 'A monochrome campaign built around atmosphere.', detailKu: 'کەمپەینێکی مۆنۆکرۆم کە لە دەوری هەست و کەش دروست کراوە.' },
  { id: 'feeling', art: 'feeling', title: 'Form Follows Feeling', titleKu: 'فۆرم و هەست', kind: 'Editorial Design', kindKu: 'دیزاینی ئیدیتۆریاڵ', detail: 'A soft editorial system driven by material.', detailKu: 'سیستەمێکی ئیدیتۆریاڵی نەرم کە ماددە ئاراستەی دەکات.' },
  { id: 'closer', art: 'closer', title: 'People Closer', titleKu: 'خەڵک نزیکتر', kind: 'Digital Experience', kindKu: 'ئەزموونی دیجیتاڵ', detail: 'A quiet digital identity with strong typography.', detailKu: 'ناسنامەیەکی دیجیتاڵی ئارام بە تایپۆگرافی بەهێز.' },
];

function WireOutputArtwork({ art }) {
  if (art === 'routine') {
    return (
      <div className="wire-card-face wire-card-front output-routine">
        <strong>The<br />New<br />Routine</strong>
        <div className="routine-object"><i /><b /></div>
        <span>BRAND<br />IDENTITY</span>
      </div>
    );
  }
  if (art === 'sora') {
    return (
      <div className="wire-card-face wire-card-front output-sora">
        <strong>SORA</strong>
        <div className="sora-mountain sora-a" />
        <div className="sora-mountain sora-b" />
        <span>VISUAL<br />CAMPAIGN</span>
      </div>
    );
  }
  if (art === 'feeling') {
    return (
      <div className="wire-card-face wire-card-front output-feeling">
        <strong>Form<br />Follows<br />Feeling</strong>
        <div className="fabric-wave fabric-a" />
        <div className="fabric-wave fabric-b" />
        <span>EDITORIAL<br />DESIGN</span>
      </div>
    );
  }
  return (
    <div className="wire-card-face wire-card-front output-closer">
      <div className="page-fold" />
      <strong>Good<br />Design<br />Brings<br />People<br />Closer</strong>
      <i className="closer-dot" />
      <span>DIGITAL<br />EXPERIENCE</span>
    </div>
  );
}

function ProjectArt({ art }) {
  if (art === 'nawa') {
    return (
      <div className="project-art art-nawa">
        <span className="art-small top-left">NAWA RECORDS</span>
        <div className="nawa-disc" />
        <strong>NAWA</strong>
        <span className="art-small bottom-right">LISTEN CLOSELY</span>
      </div>
    );
  }
  if (art === 'object') {
    return (
      <div className="project-art art-object">
        <span className="object-index">17</span>
        <div className="object-grid" />
        <strong>OBJECT<br />STUDIES</strong>
        <span className="art-small bottom-left">MATERIAL STUDIES</span>
      </div>
    );
  }
  if (art === 'kora') {
    return (
      <div className="project-art art-kora">
        <span className="art-small top-left">KORA / BOTANICAL</span>
        <div className="kora-shape kora-shape-a" />
        <div className="kora-shape kora-shape-b" />
        <strong>KORA</strong>
      </div>
    );
  }
  if (art === 'field') {
    return (
      <div className="project-art art-field">
        <span className="field-word field-word-a">FORM</span>
        <span className="field-word field-word-b">FOLLOWS</span>
        <span className="field-word field-word-c">FEELING</span>
        <span className="field-rule" />
      </div>
    );
  }
  if (art === 'miro') {
    return (
      <div className="project-art art-miro">
        <span className="art-small top-right">MIRŌ HOUSE</span>
        <div className="miro-frame"><span>M</span></div>
        <strong>MIRŌ<br />HOUSE</strong>
      </div>
    );
  }
  if (art === 'index') {
    return (
      <div className="project-art art-index">
        <span className="index-number">26</span>
        <div className="index-bars">{Array.from({ length: 12 }).map((_, i) => <i key={i} />)}</div>
        <span className="art-small bottom-right">INDEX / SYSTEMS</span>
      </div>
    );
  }
  if (art === 're') {
    return (
      <div className="project-art art-re">
        <span className="re-letter">RÊ</span>
        <span className="re-orbit" />
        <span className="art-small bottom-left">POSTER SERIES<br />ERBIL</span>
      </div>
    );
  }
  if (art === 'mono') {
    return (
      <div className="project-art art-mono">
        <span className="art-small top-left">MONO STUDY</span>
        <strong>M<br />O<br />N<br />O</strong>
        <span className="mono-rule mono-rule-a" /><span className="mono-rule mono-rule-b" />
        <span className="art-small bottom-right">TYPE AS IMAGE</span>
      </div>
    );
  }
  if (art === 'arc') {
    return (
      <div className="project-art art-arc">
        <span className="art-small top-left">ARC HOUSE</span>
        <div className="arc-ring arc-ring-a" /><div className="arc-ring arc-ring-b" />
        <strong>ARC<br />HOUSE</strong>
        <span className="art-small bottom-right">SPACE / FORM</span>
      </div>
    );
  }
  if (art === 'signal') {
    return (
      <div className="project-art art-signal">
        <span className="art-small top-left">SIGNAL</span>
        <div className="signal-bars">{Array.from({ length: 18 }).map((_, i) => <i key={i} />)}</div>
        <strong>ON<br />AIR</strong>
        <span className="art-small bottom-left">MOTION / CAMPAIGN</span>
      </div>
    );
  }
  if (art === 'atelier') {
    return (
      <div className="project-art art-atelier">
        <div className="atelier-grid" />
        <span className="atelier-number">41</span>
        <strong>ATELIER</strong>
        <span className="art-small bottom-right">FORM / GARMENT / IMAGE</span>
      </div>
    );
  }
  if (art === 'fold') {
    return (
      <div className="project-art art-fold">
        <span className="art-small top-left">FOLD / OBJECT SERIES</span>
        <div className="fold-plane fold-plane-a" /><div className="fold-plane fold-plane-b" /><div className="fold-plane fold-plane-c" />
        <strong>FOLD</strong>
        <span className="art-small bottom-right">PACKAGING</span>
      </div>
    );
  }
  if (art === 'echo') {
    return (
      <div className="project-art art-echo">
        <span className="art-small top-right">ECHO JOURNAL</span>
        <div className="echo-rings">{Array.from({ length: 5 }).map((_, i) => <i key={i} />)}</div>
        <strong>ECHO</strong>
        <span className="art-small bottom-left">ISSUE / RESONANCE</span>
      </div>
    );
  }
  if (art === 'terra') {
    return (
      <div className="project-art art-terra">
        <span className="art-small top-left">TERRA / CULTURE</span>
        <div className="terra-contour terra-a" /><div className="terra-contour terra-b" /><div className="terra-contour terra-c" />
        <strong>TERRA</strong>
        <span className="art-small bottom-right">PLACE / MEMORY</span>
      </div>
    );
  }
  if (art === 'volume') {
    return (
      <div className="project-art art-volume">
        <span className="art-small top-left">VOLUME</span>
        <span className="volume-v">V</span>
        <strong>LOUD<br />QUIET</strong>
        <span className="art-small bottom-right">MUSIC / DIRECTION</span>
      </div>
    );
  }
  return (
    <div className="project-art art-north">
      <span className="north-star" aria-hidden="true" />
      <strong>NORTH<br />STUDIO</strong>
      <span className="art-small bottom-right">DIRECTION / FORM / USE</span>
    </div>
  );
}

function WireSystem({ language, t }) {
  const wireMainRef = useRef(null);
  const processorRef = useRef(null);
  const inputRefs = useRef(new Map());
  const outputRefs = useRef(new Map());
  const inputPathRefs = useRef([]);
  const outputPathRefs = useRef([]);
  const inputActivePathRefs = useRef([]);
  const outputActivePathRefs = useRef([]);
  const inputDotRefs = useRef([]);
  const outputDotRefs = useRef([]);
  const dragRef = useRef(null);
  const geometryFrameRef = useRef(null);
  const flowFrameRef = useRef(null);
  const isKu = language === 'ku';
  const localizedInputs = wireInputCards.map((card) => ({
    ...card,
    label: isKu ? card.labelKu : card.label,
  }));
  const localizedOutputs = wireOutputCards.map((card) => ({
    ...card,
    title: isKu ? card.titleKu : card.title,
    kind: isKu ? card.kindKu : card.kind,
    detail: isKu ? card.detailKu : card.detail,
  }));

  const setCardRef = (group, id) => (element) => {
    const map = group === 'input' ? inputRefs.current : outputRefs.current;
    if (element) map.set(id, element);
    else map.delete(id);
  };

  const toSvgPoint = (x, y, rootRect) => ({
    x: (x / rootRect.width) * 800,
    y: (y / rootRect.height) * 620,
  });

  const cardAnchor = (element, rootRect, edge) => {
    const rect = element.getBoundingClientRect();
    const x = rect.left - rootRect.left + rect.width / 2;
    const y = edge === 'bottom' ? rect.bottom - rootRect.top : rect.top - rootRect.top;
    return toSvgPoint(x, y, rootRect);
  };

  const processorAnchor = (rootRect, edge) => {
    const rect = processorRef.current.getBoundingClientRect();
    const x = rect.left - rootRect.left + rect.width / 2;
    const y = edge === 'bottom' ? rect.bottom - rootRect.top : rect.top - rootRect.top;
    return toSvgPoint(x, y, rootRect);
  };

  const makeCurve = (start, end, direction) => {
    const vertical = Math.max(56, Math.abs(end.y - start.y) * 0.46);
    const c1y = direction === 'down' ? start.y + vertical : start.y - vertical;
    const c2y = direction === 'down' ? end.y - vertical : end.y + vertical;
    return `M${start.x.toFixed(2)} ${start.y.toFixed(2)}C${start.x.toFixed(2)} ${c1y.toFixed(2)} ${end.x.toFixed(2)} ${c2y.toFixed(2)} ${end.x.toFixed(2)} ${end.y.toFixed(2)}`;
  };

  const getDragOverscan = (rootRect) => {
    if (rootRect.width >= 1000) return { left: 220, right: 96, top: 36, bottom: 180 };
    if (rootRect.width >= 720) return { left: 110, right: 70, top: 28, bottom: 140 };
    return { left: 28, right: 28, top: 20, bottom: 100 };
  };

  const updateWireGeometry = () => {
    const root = wireMainRef.current;
    const processor = processorRef.current;
    if (!root || !processor) return;
    const rootRect = root.getBoundingClientRect();
    if (!rootRect.width || !rootRect.height) return;

    const clampCardToRoot = (card) => {
      const currentX = Number(card.dataset.dragX || 0);
      const currentY = Number(card.dataset.dragY || 0);
      if (!currentX && !currentY) return;
      const rect = card.getBoundingClientRect();
      const baseLeft = rect.left - rootRect.left - currentX;
      const baseTop = rect.top - rootRect.top - currentY;
      const overscan = getDragOverscan(rootRect);
      const minX = -baseLeft - overscan.left;
      const maxX = rootRect.width - rect.width - baseLeft + overscan.right;
      const minY = -baseTop - overscan.top;
      const maxY = rootRect.height - rect.height - baseTop + overscan.bottom;
      const x = Math.min(maxX, Math.max(minX, currentX));
      const y = Math.min(maxY, Math.max(minY, currentY));
      if (x !== currentX || y !== currentY) {
        card.dataset.dragX = String(x);
        card.dataset.dragY = String(y);
        card.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    inputRefs.current.forEach(clampCardToRoot);
    outputRefs.current.forEach(clampCardToRoot);

    const processorRect = processor.getBoundingClientRect();
    const processorCenterY = processorRect.top - rootRect.top + processorRect.height / 2;
    const processorTop = processorAnchor(rootRect, 'top');
    const processorBottom = processorAnchor(rootRect, 'bottom');

    wireInputCards.forEach(({ id }, index) => {
      const card = inputRefs.current.get(id);
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const cardCenterY = rect.top - rootRect.top + rect.height / 2;
      const isAboveProcessor = cardCenterY <= processorCenterY;
      const d = makeCurve(
        cardAnchor(card, rootRect, isAboveProcessor ? 'bottom' : 'top'),
        isAboveProcessor ? processorTop : processorBottom,
        isAboveProcessor ? 'down' : 'up',
      );
      inputPathRefs.current[index]?.setAttribute('d', d);
      inputActivePathRefs.current[index]?.setAttribute('d', d);
    });

    wireOutputCards.forEach(({ id }, index) => {
      const card = outputRefs.current.get(id);
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const cardCenterY = rect.top - rootRect.top + rect.height / 2;
      const isBelowProcessor = cardCenterY >= processorCenterY;
      const d = makeCurve(
        isBelowProcessor ? processorBottom : processorTop,
        cardAnchor(card, rootRect, isBelowProcessor ? 'top' : 'bottom'),
        isBelowProcessor ? 'down' : 'up',
      );
      outputPathRefs.current[index]?.setAttribute('d', d);
      outputActivePathRefs.current[index]?.setAttribute('d', d);
    });
  };

  const scheduleWireUpdate = () => {
    if (geometryFrameRef.current) cancelAnimationFrame(geometryFrameRef.current);
    geometryFrameRef.current = requestAnimationFrame(() => {
      geometryFrameRef.current = null;
      updateWireGeometry();
    });
  };

  useLayoutEffect(() => {
    updateWireGeometry();
    const secondFrame = requestAnimationFrame(updateWireGeometry);
    const resizeObserver = new ResizeObserver(scheduleWireUpdate);
    if (wireMainRef.current) resizeObserver.observe(wireMainRef.current);
    inputRefs.current.forEach((element) => resizeObserver.observe(element));
    outputRefs.current.forEach((element) => resizeObserver.observe(element));
    if (processorRef.current) resizeObserver.observe(processorRef.current);

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animateFlow = (time) => {
      const cycle = (time % 4200) / 4200;
      const inputProgress = Math.min(1, cycle / 0.39);
      const outputProgress = cycle < 0.45 ? 0 : Math.min(1, (cycle - 0.45) / 0.39);
      const inputVisible = cycle <= 0.43;
      const outputVisible = cycle >= 0.43 && cycle <= 0.9;

      const placeDot = (dot, path, progress, visible) => {
        if (!dot || !path) return;
        const length = path.getTotalLength();
        if (!length) return;
        const point = path.getPointAtLength(length * progress);
        dot.setAttribute('cx', point.x);
        dot.setAttribute('cy', point.y);
        dot.style.opacity = visible ? '1' : '0';
      };

      inputDotRefs.current.forEach((dot, index) => {
        placeDot(dot, inputPathRefs.current[index], inputProgress, inputVisible);
      });
      outputDotRefs.current.forEach((dot, index) => {
        placeDot(dot, outputPathRefs.current[index], outputProgress, outputVisible);
      });
      flowFrameRef.current = requestAnimationFrame(animateFlow);
    };

    if (!reduced) flowFrameRef.current = requestAnimationFrame(animateFlow);
    else {
      inputDotRefs.current.forEach((dot) => { if (dot) dot.style.opacity = '0'; });
      outputDotRefs.current.forEach((dot) => { if (dot) dot.style.opacity = '0'; });
    }

    return () => {
      cancelAnimationFrame(secondFrame);
      if (geometryFrameRef.current) cancelAnimationFrame(geometryFrameRef.current);
      if (flowFrameRef.current) cancelAnimationFrame(flowFrameRef.current);
      resizeObserver.disconnect();
    };
  }, []);

  const startFreeDrag = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    if (dragRef.current) return;
    if (event.pointerType !== 'mouse' && !event.target.closest('.wire-drag-handle')) return;
    const card = event.currentTarget;
    const root = wireMainRef.current;
    if (!root) return;

    const rootRect = root.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const currentX = Number(card.dataset.dragX || 0);
    const currentY = Number(card.dataset.dragY || 0);
    dragRef.current = {
      pointerId: event.pointerId,
      card,
      startPointerX: event.clientX,
      startPointerY: event.clientY,
      startX: currentX,
      startY: currentY,
      baseLeft: cardRect.left - rootRect.left - currentX,
      baseTop: cardRect.top - rootRect.top - currentY,
      cardWidth: cardRect.width,
      cardHeight: cardRect.height,
    };
    card.classList.remove('force-front');
    card.classList.add('is-dragging');
    card.setPointerCapture(event.pointerId);
  };

  const moveFreeDrag = (event) => {
    const drag = dragRef.current;
    const root = wireMainRef.current;
    if (!drag || drag.pointerId !== event.pointerId || !root) return;

    const rootRect = root.getBoundingClientRect();
    const desiredX = drag.startX + event.clientX - drag.startPointerX;
    const desiredY = drag.startY + event.clientY - drag.startPointerY;
    const overscan = getDragOverscan(rootRect);
    const minX = -drag.baseLeft - overscan.left;
    const maxX = rootRect.width - drag.cardWidth - drag.baseLeft + overscan.right;
    const minY = -drag.baseTop - overscan.top;
    const maxY = rootRect.height - drag.cardHeight - drag.baseTop + overscan.bottom;
    const x = Math.min(maxX, Math.max(minX, desiredX));
    const y = Math.min(maxY, Math.max(minY, desiredY));

    drag.card.dataset.dragX = String(x);
    drag.card.dataset.dragY = String(y);
    drag.card.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    scheduleWireUpdate();
  };

  const endFreeDrag = (event) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    dragRef.current = null;
    drag.card.classList.remove('is-dragging');
    drag.card.classList.add('force-front');
    if (drag.card.hasPointerCapture(event.pointerId)) drag.card.releasePointerCapture(event.pointerId);
    scheduleWireUpdate();
  };

  const clearForcedFront = (event) => {
    event.currentTarget.classList.remove('force-front');
  };

  return (
    <div className="wire-stage" aria-label={t.wireLabel}>
      <div className="wire-main" ref={wireMainRef}>
        <svg className="wire-svg" viewBox="0 0 800 620" preserveAspectRatio="none" fill="none" aria-hidden="true">
          {wireInputCards.map(({ id }, index) => (
            <path
              className="wire-static"
              key={`input-wire-${id}`}
              ref={(element) => { inputPathRefs.current[index] = element; }}
            />
          ))}
          {wireOutputCards.map(({ id }, index) => (
            <path
              className="wire-static"
              key={`output-wire-${id}`}
              ref={(element) => { outputPathRefs.current[index] = element; }}
            />
          ))}
          {wireInputCards.map(({ id }, index) => (
            <path
              className="wire-active"
              key={`input-active-${id}`}
              ref={(element) => { inputActivePathRefs.current[index] = element; }}
            />
          ))}
          {wireOutputCards.map(({ id }, index) => (
            <path
              className="wire-active"
              key={`output-active-${id}`}
              ref={(element) => { outputActivePathRefs.current[index] = element; }}
            />
          ))}
          {wireInputCards.map(({ id }, index) => (
            <circle
              className="wire-flow-dot"
              r="4"
              key={`input-dot-${id}`}
              ref={(element) => { inputDotRefs.current[index] = element; }}
            />
          ))}
          {wireOutputCards.map(({ id }, index) => (
            <circle
              className="wire-flow-dot wire-flow-dot-out"
              r="4"
              key={`output-dot-${id}`}
              ref={(element) => { outputDotRefs.current[index] = element; }}
            />
          ))}
        </svg>

        <div className="wire-inputs">
          {localizedInputs.map(({ id, label, Icon }) => (
            <div
              className="idea-node"
              key={id}
              ref={setCardRef('input', id)}
              onPointerDown={startFreeDrag}
              onPointerMove={moveFreeDrag}
              onPointerUp={endFreeDrag}
              onPointerCancel={endFreeDrag}
              onLostPointerCapture={endFreeDrag}
              onPointerLeave={clearForcedFront}
            >
              <span className="wire-drag-handle" aria-hidden="true" />
              <div className="idea-card-3d">
                <div className="idea-card-face idea-card-front">
                  <Icon size={25} weight="regular" />
                  <strong>{label}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="processor-box" ref={processorRef}>
          <strong>{isKu ? 'میران ئازاد' : 'Miran Azad'}</strong>
          <span>{t.graphicDesigner}</span>
        </div>

        <div className="wire-output">
          {localizedOutputs.map((card) => (
            <article
              className="wire-output-card"
              key={card.id}
              ref={setCardRef('output', card.id)}
              onPointerDown={startFreeDrag}
              onPointerMove={moveFreeDrag}
              onPointerUp={endFreeDrag}
              onPointerCancel={endFreeDrag}
              onLostPointerCapture={endFreeDrag}
              onPointerLeave={clearForcedFront}
              aria-label={`${card.title}. ${t.dragLabel}`}
            >
              <span className="wire-drag-handle" aria-hidden="true" />
              <div className="wire-card-3d">
                <WireOutputArtwork art={card.art} />
                <div className="wire-card-face wire-card-back">
                  <span>{card.kind}</span>
                  <strong>{card.title}</strong>
                  <p>{card.detail}</p>
                  <ArrowUpRight size={20} weight="light" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

    </div>
  );
}

function App() {
  const pageRef = useRef(null);
  const lenisRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState(() => (
    window.localStorage.getItem('miran-portfolio-language') === 'ku' ? 'ku' : 'en'
  ));
  const isKu = language === 'ku';
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = isKu ? 'ckb' : 'en';
    document.documentElement.dir = isKu ? 'rtl' : 'ltr';
    document.title = isKu ? 'میران ئازاد — دیزاینەری گرافیک' : 'Miran Azad — Graphic Designer';
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        'content',
        isKu
          ? 'پۆرتفۆلیۆی میران ئازاد، دیزاینەری گرافیکی سەربەخۆ بۆ ناسنامەی براند، کەمپەین و سیستەمی بینراو.'
          : 'Miran Azad is an independent graphic designer building brand identities, campaigns, and visual systems with clarity and character.',
      );
    }
    window.localStorage.setItem('miran-portfolio-language', language);
    setMenuOpen(false);
    const refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(refreshFrame);
  }, [language, isKu]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, touchMultiplier: 1.05 });
    lenisRef.current = lenis;
    const tick = (time) => lenis.raf(time * 1000);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return undefined;

    const handleAnchorClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor || !root.contains(anchor)) return;
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      setMenuOpen(false);
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (lenisRef.current && !reduced) {
        lenisRef.current.scrollTo(target, { offset: -76, duration: 1.25 });
      } else {
        const top = target.getBoundingClientRect().top + window.scrollY - 76;
        window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' });
      }
      window.history.replaceState(null, '', href);
    };

    root.addEventListener('click', handleAnchorClick);
    return () => root.removeEventListener('click', handleAnchorClick);
  }, []);

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;

    const hoverCleanups = [];

    const ctx = gsap.context(() => {
      gsap.from('.hero-reveal', {
        y: 42,
        opacity: 0,
        duration: 1.05,
        stagger: 0.09,
        ease: 'power4.out',
      });
      gsap.from('.hero-visual', {
        x: 56,
        opacity: 0,
        duration: 1.25,
        delay: 0.15,
        ease: 'power4.out',
      });

      gsap.utils.toArray('.section-reveal').forEach((el) => {
        gsap.from(el, {
          y: 44,
          opacity: 0,
          duration: 0.95,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        });
      });

      const wireTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.wire-stage',
          start: 'top 82%',
          end: 'bottom 88%',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
      wireTl.fromTo('.wire-active', { strokeDashoffset: 3200 }, { strokeDashoffset: 0, ease: 'none' }, 0);
      wireTl.from('.processor-box', { scale: 0.96, opacity: 0.35, duration: 0.2, ease: 'power2.out' }, 0.22);
      wireTl.from('.wire-output-card', { opacity: 0.12, duration: 0.24, stagger: 0.035, ease: 'power2.out' }, 0.52);

      const tiles = gsap.utils.toArray('.project-tile');
      tiles.forEach((tile, index) => {
        const entersFromLeft = index % 2 === 0;
        gsap.fromTo(tile, {
          x: entersFromLeft ? -28 : 28,
          opacity: 0,
          scale: 0.985,
          rotateZ: entersFromLeft ? -0.7 : 0.7,
          clipPath: entersFromLeft
            ? 'inset(0 18% 0 0)'
            : 'inset(0 0 0 18%)',
          filter: 'blur(5px)',
        }, {
          x: 0,
          opacity: 1,
          scale: 1,
          rotateZ: 0,
          clipPath: 'inset(0 0% 0 0%)',
          filter: 'blur(0px)',
          duration: 1.15,
          delay: () => gsap.utils.random(0.08, 0.34, 0.01),
          ease: 'power4.out',
          scrollTrigger: { trigger: tile, start: 'top 94%', once: true },
        });
      });

      gsap.utils.toArray('.service-row').forEach((row) => {
        const icon = row.querySelector('.service-icon');
        const enter = () => gsap.to(icon, { rotate: 8, scale: 1.08, duration: 0.45, ease: 'power3.out' });
        const leave = () => gsap.to(icon, { rotate: 0, scale: 1, duration: 0.55, ease: 'power3.out' });
        row.addEventListener('mouseenter', enter);
        row.addEventListener('mouseleave', leave);
        hoverCleanups.push(() => {
          row.removeEventListener('mouseenter', enter);
          row.removeEventListener('mouseleave', leave);
        });
      });

    }, pageRef);

    return () => {
      hoverCleanups.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const toggleLanguage = () => setLanguage((current) => (current === 'en' ? 'ku' : 'en'));
  const moveHeroSpecimen = (event) => {
    if (event.pointerType === 'touch') return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    const y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
    const offsetX = x - 0.5;
    const offsetY = y - 0.5;
    event.currentTarget.style.setProperty('--hero-rx', `${(-offsetY * 5).toFixed(2)}deg`);
    event.currentTarget.style.setProperty('--hero-ry', `${(offsetX * 6).toFixed(2)}deg`);
    event.currentTarget.style.setProperty('--hero-tx', `${(offsetX * 8).toFixed(2)}px`);
    event.currentTarget.style.setProperty('--hero-ty', `${(offsetY * 8).toFixed(2)}px`);
    event.currentTarget.style.setProperty('--hero-x', `${(x * 100).toFixed(1)}%`);
    event.currentTarget.style.setProperty('--hero-y', `${(y * 100).toFixed(1)}%`);
  };

  const resetHeroSpecimen = (event) => {
    event.currentTarget.style.setProperty('--hero-rx', '0deg');
    event.currentTarget.style.setProperty('--hero-ry', '0deg');
    event.currentTarget.style.setProperty('--hero-tx', '0px');
    event.currentTarget.style.setProperty('--hero-ty', '0px');
    event.currentTarget.style.setProperty('--hero-x', '50%');
    event.currentTarget.style.setProperty('--hero-y', '50%');
  };

  return (
    <div
      ref={pageRef}
      dir={isKu ? 'rtl' : 'ltr'}
      className={`min-h-[100dvh] overflow-x-clip bg-[#f7f7f4] text-[#181817] ${isKu ? 'is-ku' : ''}`}
    >
      <header className="site-nav fixed inset-x-0 top-0 z-40 mx-auto flex h-[76px] max-w-[1380px] items-center justify-between px-5 md:px-8 xl:px-12">
        <a href="#top" className="nav-mark" aria-label={t.homeLabel}>MA<span>®</span></a>
        <nav className="hidden items-center gap-9 text-[12px] font-semibold uppercase tracking-[0.17em] md:flex" aria-label={t.navLabel}>
          <a href="#work">{t.navWork}</a>
          <a href="#about">{t.navProfile}</a>
          <a href="#services">{t.navServices}</a>
        </nav>
        <div className="nav-actions flex items-center gap-2 md:gap-3">
          <button className="lang-toggle" type="button" onClick={toggleLanguage} aria-label={t.switchLanguage}>
            {isKu ? 'EN' : 'کوردی'}
          </button>
          <a href="#contact" className="nav-contact hidden items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.17em] md:flex">
            {t.startProject} <ArrowUpRight size={16} weight="bold" />
          </a>
          <button className="mobile-menu-btn md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label={t.menuLabel} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <List size={24} />}
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <a href="#work" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>{t.navWork}</a>
        <a href="#about" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>{t.navProfile}</a>
        <a href="#services" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>{t.navServices}</a>
        <a href="#contact" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>{t.startProject} <ArrowUpRight size={24} /></a>
      </div>

      <main id="top">
        <section className="hero-section relative mx-auto grid max-w-[1380px] grid-cols-1 items-center gap-12 px-5 pb-10 pt-28 md:px-8 md:pt-32 xl:grid-cols-[1.08fr_.92fr] xl:gap-16 xl:px-12">
          <div className="hero-copy pb-2 xl:pb-4">
            <div className="hero-reveal mb-12 hidden items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#66665f] md:flex">
              <span className="inline-block size-2 rounded-full bg-[#97a64b]" /> {t.heroLabel}
            </div>
            <h1 className="hero-reveal hero-title">
              {isKu ? (
                <>
                  <span className="hero-title-line hero-title-primary">{t.heroTitleTop}</span>
                  <span className="hero-title-line hero-title-final">{t.heroTitleBottom}</span>
                </>
              ) : (
                <>
                  <span className="hero-title-line hero-title-primary">
                    <ElasticWord text={t.heroTitleTopA} />
                    <ElasticWord text={t.heroTitleTopB} className="hero-title-accent" />
                  </span>
                  <span className="hero-title-line hero-title-final">
                    <ElasticWord text={t.heroTitleBottom} />
                  </span>
                </>
              )}
            </h1>
            <p className="hero-reveal mt-7 max-w-[34rem] text-[17px] leading-[1.45] text-[#55554f] md:mt-8 md:text-[20px]">
              {t.heroDescription}
            </p>
            <div className="hero-reveal mt-10 flex flex-wrap items-center gap-4 md:mt-14">
              <a className="primary-cta" href="#work">{t.viewWork} <ArrowDown size={18} weight="bold" /></a>
            </div>
          </div>

          <div
            className="hero-visual hero-specimen-stage relative w-full max-w-[560px] justify-self-center overflow-hidden bg-[#ecece6] xl:justify-self-end"
            onPointerMove={moveHeroSpecimen}
            onPointerLeave={resetHeroSpecimen}
          >
            <div className="hero-specimen-grid" aria-hidden="true" />
            <div className="hero-specimen-topline">
              <span>MIRAN AZAD</span>
              <span>{t.specimenRole}</span>
            </div>
            <div className="hero-register" aria-hidden="true"><i /></div>
            <div className="hero-sheet hero-sheet-back" aria-hidden="true" />
            <div className="hero-sheet hero-sheet-front">
              <div className="hero-sheet-glint" aria-hidden="true" />
              <div className="hero-sheet-head">
                <span>{isKu ? '٠١' : '01'}</span>
                <span>{t.specimenSystems}</span>
              </div>
              <div className="hero-kurdish-sun" aria-label={t.sunLabel}>
                <div className="hero-kurdish-sun-rays" aria-hidden="true">
                  {Array.from({ length: 21 }).map((_, index) => (
                    <span
                      className="hero-kurdish-sun-ray"
                      key={index}
                      style={{ transform: `translate(-50%, -100%) rotate(${index * (360 / 21)}deg)` }}
                    />
                  ))}
                </div>
                <div className="hero-kurdish-sun-core" aria-hidden="true" />
              </div>
              <div className="hero-sheet-rule" aria-hidden="true" />
              <div className="hero-sheet-foot">
                <strong>{isKu ? 'میران ئازاد' : 'Miran Azad'}</strong>
                <span>{t.specimenMeta}</span>
              </div>
            </div>
            <div className="hero-specimen-index" aria-hidden="true">
              <span>{t.specimenForm}</span>
              <span>MA®</span>
            </div>
          </div>
        </section>

        <section id="system" className="border-t border-[#d8d8d1] px-5 py-12 md:px-8 md:py-16 xl:px-12">
          <div className="mx-auto max-w-[1380px]">
            <div className="section-reveal mb-9 md:mb-10">
              <h2 className="section-title text-[clamp(3rem,4.5vw,5.1rem)] font-[500] leading-[0.88] tracking-[-0.06em]">{t.systemTitle}</h2>
              <p className="mt-5 max-w-[430px] text-[16px] leading-[1.5] text-[#66665f]">{t.systemDescription}</p>
            </div>
            <WireSystem language={language} t={t} />
          </div>
        </section>

        <section id="about" className="border-t border-[#d8d8d1] px-5 py-20 md:px-8 md:py-24 xl:px-12">
          <div className="mx-auto grid max-w-[1380px] gap-9 lg:grid-cols-[.9fr_1.1fr] lg:items-start lg:gap-12 xl:grid-cols-[.86fr_1.14fr] xl:gap-16">
            <div className="profile-visual section-reveal relative aspect-square overflow-hidden border border-[#d7d7d0] bg-[#efefec]">
              <img className="profile-portrait absolute inset-0 h-full w-full object-cover" src={`${import.meta.env.BASE_URL}il_fullxfull.8346800249_jsz5.avif`} alt={t.portraitLabel} />
              <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 border-t border-[#d1d1cb] bg-[#f7f7f4]/90 text-[#181817] backdrop-blur-md">
                <div className="profile-meta-primary border-r border-[#d1d1cb] px-5 py-4"><strong className="block text-[18px] font-[500]">{t.erbilIraq}</strong></div>
                <div className="px-5 py-4"><strong className="block text-[18px] font-[500]">{t.worldwide}</strong></div>
              </div>
            </div>
            <div className="section-reveal lg:pt-1">
              <h2 className="section-title max-w-[820px] text-[clamp(4.4rem,7.4vw,8rem)] font-[500] uppercase leading-[0.78] tracking-[-0.067em]">{t.profileName}</h2>
              <div className="mt-7 grid gap-7 border-t border-[#cecec7] pt-6 md:grid-cols-[1.12fr_.88fr] lg:mt-8 lg:gap-10">
                <p className="max-w-[650px] text-[20px] leading-[1.46] text-[#3f3f3b] md:text-[22px] lg:text-[23px]">{t.about}</p>
                <div className="text-[15px] font-medium leading-[1.65] text-[#5f5f59] md:text-[16px]">
                  <p>{t.independentSince}<br />{t.disciplines}</p>
                  <a href="mailto:hello@miranazad.com" className="mt-8 inline-flex items-center gap-2 border-b border-[#242421] pb-1 font-semibold text-[#242421]">hello@miranazad.com <ArrowUpRight size={16} weight="bold" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="border-t border-[#d8d8d1] px-5 py-28 md:px-8 md:py-36 xl:px-12">
          <div className="mx-auto max-w-[1380px]">
            <div className="section-reveal mb-16 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="section-title text-[clamp(3rem,5.5vw,6rem)] font-[500] uppercase leading-[0.84] tracking-[-0.062em]">{t.selectedWork}</h2>
              </div>
              <p className="max-w-[420px] text-[15px] leading-[1.55] text-[#66665f]">{t.selectedWorkCopy}</p>
            </div>

            <div className="projects-grid grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-14">
              {projects.map((project) => (
                <article key={project.id} className="project-tile group">
                  <a href="#contact" className="block" aria-label={`${project.title}, ${isKu ? project.typeKu : project.type}`}>
                    <div className="project-square aspect-square overflow-hidden border border-[#d7d7cf] bg-white"><ProjectArt art={project.art} /></div>
                    <div className="mt-4 flex items-start justify-between gap-4 border-t border-[#d0d0c9] pt-3">
                      <div><h3 className="text-[17px] font-[520] tracking-[-0.02em]">{project.title}</h3><p className="project-type mt-1 text-[11px] uppercase tracking-[0.14em] text-[#66665f]">{isKu ? project.typeKu : project.type}</p></div>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden border-y border-[#d8d8d1] py-5">
          <div className="marquee-track flex min-w-max items-center gap-12 whitespace-nowrap text-[clamp(2.8rem,6vw,6.5rem)] font-[500] uppercase leading-none tracking-[-0.055em] text-[#242421]">
            {[0, 1].map((n) => (
              <div key={n} className="flex items-center gap-12" aria-hidden={n === 1}>
                {t.marquee.map((item) => (
                  <span className="contents" key={item}><span>{item}</span><i /></span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="px-5 py-28 md:px-8 md:py-36 xl:px-12">
          <div className="mx-auto max-w-[1380px]">
            <div className="section-reveal mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
              <div><h2 className="section-title text-[clamp(3rem,5.2vw,5.8rem)] font-[500] uppercase leading-[0.84] tracking-[-0.06em]">{t.servicesTitle}</h2></div>
              <p className="max-w-[470px] justify-self-start text-[16px] leading-[1.55] text-[#66665f] lg:justify-self-end">{t.servicesCopy}</p>
            </div>
            <div className="section-reveal border-t border-[#bfbfb8]">
              {services.map(({ title, copy: serviceCopy, titleKu, copyKu, Icon }) => (
                <article key={title} className="service-row group grid gap-6 border-b border-[#cfcfc8] py-7 md:grid-cols-[1fr_1fr_120px] md:items-center md:py-9">
                  <h3 className="text-[clamp(1.8rem,3vw,3.2rem)] font-[480] tracking-[-0.045em]">{isKu ? titleKu : title}</h3>
                  <p className="max-w-[490px] text-[14px] leading-[1.55] text-[#696962]">{isKu ? copyKu : serviceCopy}</p>
                  <Icon className="service-icon justify-self-start md:justify-self-end" size={76} weight="thin" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#d8d8d1] bg-[#ecece6] px-5 py-28 md:px-8 md:py-36 xl:px-12">
          <div className="mx-auto max-w-[1380px]">
            <div className="section-reveal grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
              <div>
                <p className="max-w-[330px] text-[17px] leading-[1.55] text-[#5f5f59]">{t.processIntro}</p>
              </div>
              <div className="process-list">
                {processSteps[language].map(([title, stepCopy]) => (
                  <div className="process-row" key={title}>
                    <h3>{title}</h3><p>{stepCopy}</p><ArrowRight size={26} weight="light" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 pb-8 pt-28 md:px-8 md:pt-36 xl:px-12">
          <div className="section-reveal mx-auto max-w-[1380px] border-t border-[#bdbdb5] pt-8">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
              <div>
                <h2 className="section-title text-[clamp(3.8rem,8.8vw,9rem)] font-[510] uppercase leading-[0.76] tracking-[-0.072em]">{t.contactTitle}</h2>
              </div>
              <div className="pb-2 lg:pb-5">
                <p className="max-w-[390px] text-[17px] leading-[1.5] text-[#595953]">{t.contactCopy}</p>
                <a href="mailto:hello@miranazad.com" className="contact-link mt-9 flex items-center justify-between border-y border-[#bdbdb5] py-5 text-[clamp(1.3rem,2.3vw,2.1rem)] font-[500] tracking-[-0.03em]">hello@miranazad.com <ArrowUpRight size={28} weight="light" /></a>
              </div>
            </div>
            <footer className="mt-24 flex flex-col gap-5 border-t border-[#d1d1ca] py-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#74746d] md:mt-32 md:flex-row md:items-center md:justify-between">
              <span>{isKu ? '© ٢٠٢٦ میران ئازاد' : '© 2026 Miran Azad'}</span>
              <div className="flex gap-6"><a href="#top">{t.top}</a><a href="#work">{t.navWork}</a><a href="mailto:hello@miranazad.com">{t.email}</a></div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
