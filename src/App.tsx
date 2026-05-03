/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Anchor, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  Plane,
  Play,
  Camera,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const travelerInfo = {
    name: "鄧欣佩 HSIN PEI",
    email: "a111182116@nkust.edu.tw",
    location: "高雄, 台灣",
    education: {
      school: "國立高雄科技大學",
      department: "航海技術系 / 五專部"
    },
    experience: [
      {
        company: "MUMU POKE",
        role: "兼職 / 實習人員"
      }
    ],
    certifications: [
      "基本安全訓練",
      "救生艇筏及救難艇操作",
      "滅火訓練",
      "進階滅火訓練",
      "保全職責",
      "保全意識"
    ],
    travelPlan: {
      title: "旅遊計畫：清萊 → 大其力",
      description: "6天跨境行動指南 (預算 NT$30,000)",
      steps: [
        { title: "Day 1: 抵達清萊", content: "市區巡禮，入住民宿。" },
        { title: "Day 2: 白廟與藍廟", content: "探索清萊標誌性建築。" },
        { title: "Day 3: 金三角之旅", content: "前往泰緬老三國交界。" },
        { title: "Day 4: 跨境大其力", content: "辦理過境手續。" },
        { title: "Day 5: 邊界探索", content: "大其力大金塔。" },
        { title: "Day 6: 返回高雄", content: "經由泰國轉機返台。" }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-avocado-50 text-avocado-900 font-sans">
      {/* Navigation */}
      <nav className="border-b border-avocado-200 sticky top-0 bg-avocado-50/80 backdrop-blur-md z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-display font-bold text-xl uppercase tracking-tighter">
            <Anchor className="w-5 h-5 text-avocado-600" />
            <span>PEIPEI</span>
          </div>
          <div className="hidden sm:flex gap-6 text-sm font-bold uppercase tracking-wider text-avocado-400">
            <a href="#about" className="hover:text-avocado-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-avocado-600 transition-colors">Experience</a>
            <a href="#travel" className="hover:text-avocado-600 transition-colors">Travel</a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-24">
        
        {/* Header Section */}
        <header className="space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-black leading-none"
          >
            {travelerInfo.name}
          </motion.h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-avocado-700 font-medium">
            <a href={`mailto:${travelerInfo.email}`} className="flex items-center gap-2 hover:text-avocado-600 transition-colors w-fit">
              <Mail className="w-4 h-4" />
              {travelerInfo.email}
            </a>
            <span className="hidden md:block text-avocado-300">|</span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {travelerInfo.location}
            </span>
          </div>
        </header>

        {/* About Me Section Entry */}
        <section id="about" className="space-y-12">
          <div className="border-l-4 border-avocado-600 pl-6">
            <h2 className="text-3xl font-display font-bold mb-4 italic">關於我 About Me</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div id="experience" className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-avocado-400 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                工作經歷
              </h3>
              {travelerInfo.experience.map((exp, i) => (
                <div key={i} className="space-y-1">
                  <h4 className="text-xl font-bold">{exp.company}</h4>
                  <p className="text-avocado-700 font-medium">{exp.role}</p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-avocado-400 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                學歷
              </h3>
              <div className="space-y-1">
                <h4 className="text-xl font-bold">{travelerInfo.education.school}</h4>
                <p className="text-avocado-700 font-medium">{travelerInfo.education.department}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Section */}
        <section id="travel" className="space-y-12 bg-avocado-100 -mx-6 px-6 py-16 md:rounded-[3rem]">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-avocado-600 font-bold uppercase tracking-widest text-xs">
              <Plane className="w-4 h-4" />
              Travel Plan
            </div>
            <h2 className="text-4xl font-display font-bold uppercase italic">{travelerInfo.travelPlan.title}</h2>
            <p className="text-avocado-700 font-medium font-display mb-6">{travelerInfo.travelPlan.description}</p>
            <div className="flex justify-center md:justify-start">
              <a 
                href="https://docs.google.com/presentation/d/1lzhs7QWeaqj5PDj6hMRM356EYgsO_QlLYejOY2kcVrU/edit?slide=id.p1#slide=id.p1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-avocado-600 text-white rounded-full font-bold text-sm hover:bg-avocado-700 transition-all flex items-center gap-2 shadow-lg shadow-avocado-200"
              >
                查看完整簡報 <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelerInfo.travelPlan.steps.map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-avocado-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-xl mb-3">{item.title}</h4>
                <p className="text-avocado-700 text-sm leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 space-y-8">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="p-3 bg-white rounded-2xl shadow-sm border border-avocado-200">
                <Play className="w-6 h-6 text-avocado-600 fill-avocado-600" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold italic uppercase tracking-tight">影片回顧 Video Highlight</h3>
                <p className="text-avocado-400 text-xs font-bold uppercase tracking-widest leading-none">Episode: Northern Borders</p>
              </div>
            </div>
            
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-avocado-200 shadow-2xl group border-[8px] border-white ring-1 ring-avocado-200">
              <img 
                src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2670&auto=format&fit=crop" 
                alt="Travel Video Thumbnail" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-avocado-900/60 via-transparent to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.a 
                  href="https://youtu.be/JkDQdkX67Zk"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 bg-white text-avocado-900 rounded-full flex items-center justify-center shadow-2xl hover:bg-avocado-50 transition-colors z-20"
                >
                  <Play className="w-8 h-8 ml-1 fill-avocado-900" />
                </motion.a>
              </div>

              <div className="absolute bottom-10 left-10 text-white z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-avocado-600 rounded text-[10px] font-black uppercase">Now Playing</span>
                  <span className="text-xs font-bold text-avocado-100">03:45 / 12:00</span>
                </div>
                <h4 className="text-3xl font-display font-black italic uppercase italic tracking-tighter">清萊與大其力的跨境界限</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="space-y-8">
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-avocado-400 flex items-center gap-2">
            <Award className="w-4 h-4" />
            專業證照
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {travelerInfo.certifications.map((cert, i) => (
              <li key={i} className="flex items-center gap-4 p-5 bg-avocado-100 rounded-xl font-bold text-avocado-800">
                <div className="w-2 h-2 rounded-full bg-avocado-600" />
                {cert}
              </li>
            ))}
          </ul>
        </section>

        {/* Contact & CTA */}
        <section className="pt-12 border-t border-avocado-200 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl font-display font-bold italic leading-tight">準備好交流了嗎？</h2>
            <p className="text-avocado-800 font-medium max-w-sm">歡迎與我聯繫以獲取更多資訊或合作機會。</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a 
              href={`mailto:${travelerInfo.email}`}
              className="px-10 py-5 bg-avocado-600 text-white rounded-full font-bold hover:bg-avocado-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-avocado-200"
            >
              發送郵件 <Mail className="w-4 h-4" />
            </a>
            <a 
              href="https://studio.tripo3d.ai/workspace/generate/f2489859-19e5-425b-8b40-5d0bb321b177"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-avocado-900 text-white rounded-full font-bold hover:bg-black transition-all flex items-center justify-center gap-2 text-center"
            >
              檢視自製 3D 模型作品 <Camera className="w-4 h-4" />
            </a>
          </div>
        </section>

      </main>

      <footer className="max-w-4xl mx-auto px-6 py-12 text-center border-t border-avocado-200 text-avocado-400 text-[10px] font-black uppercase tracking-[0.3em]">
        © 2024 HSIN PEI • PORTFOLIO
      </footer>
    </div>
  );
}


