'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Users, Phone, Video, Search, Send, Smile, Plus, Hash, Lock, ChevronDown } from 'lucide-react';

const messages = [
  { id: 1, user: 'Alice', avatar: 'A', content: 'Hey ! Tu as vu la nouvelle mise à jour ?', time: '14:32', self: false },
  { id: 2, user: 'Vous', avatar: 'V', content: 'Oui, le chiffrement E2E est incroyable ! 🔒', time: '14:33', self: true },
  { id: 3, user: 'Alice', avatar: 'A', content: 'Les appels vocaux sont trop bien aussi', time: '14:34', self: false },
  { id: 4, user: 'Vous', avatar: 'V', content: 'Et tout est hébergé en France 🇫🇷', time: '14:35', self: true },
];

const contacts = [
  { name: 'Alice', status: 'En ligne', unread: 2, active: true },
  { name: 'Bob', status: 'Il y a 5 min', unread: 0, active: false },
  { name: 'Charlie', status: 'En ligne', unread: 0, active: false },
];

export default function ChatMockup() {
  return (
    <motion.div
      className="relative w-full max-w-[720px] mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {/* Container */}
      <div className="relative rounded-2xl overflow-hidden border border-border-2/50 shadow-2xl" style={{ background: 'linear-gradient(135deg, #0c0f20, #111535)' }}>
        {/* App Chrome */}
        <div className="flex h-[420px] sm:h-[460px]">
          {/* Sidebar */}
          <div className="hidden sm:flex flex-col w-[200px] border-r border-border/60" style={{ background: 'rgba(8, 11, 22, 0.8)' }}>
            {/* Sidebar Header */}
            <div className="p-3 border-b border-border/40">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-brand/20 flex items-center justify-center">
                  <MessageCircle className="w-3.5 h-3.5 text-brand-light" />
                </div>
                <span className="text-xs font-bold text-text-primary tracking-wide">Messages</span>
                <Plus className="w-3.5 h-3.5 text-text-muted ml-auto cursor-pointer" />
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-md bg-surface-2/60 border border-border/40">
                <Search className="w-3 h-3 text-text-muted" />
                <span className="text-[10px] text-text-muted">Rechercher...</span>
              </div>
            </div>

            {/* Sidebar Sections */}
            <div className="flex-1 overflow-hidden p-2 space-y-1">
              <div className="flex items-center gap-1.5 px-2 py-1 text-[10px] uppercase tracking-wider text-text-muted font-medium">
                <Users className="w-3 h-3" />
                Amis
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 text-[10px] uppercase tracking-wider text-text-muted font-medium mt-2">
                <ChevronDown className="w-3 h-3" />
                Messages privés
              </div>

              {/* Contacts */}
              {contacts.map((c) => (
                <div
                  key={c.name}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-colors ${
                    c.active ? 'bg-brand/15 border border-brand/20' : 'hover:bg-surface-2/40'
                  }`}
                >
                  <div className="relative">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      c.active ? 'bg-brand/30 text-brand-light' : 'bg-surface-3 text-text-muted'
                    }`}>
                      {c.name[0]}
                    </div>
                    {c.status === 'En ligne' && (
                      <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-success border-2 border-[#0c0f20]" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-medium text-text-primary truncate">{c.name}</div>
                    <div className="text-[9px] text-text-muted truncate">{c.status}</div>
                  </div>
                  {c.unread > 0 && (
                    <div className="w-4 h-4 rounded-full bg-brand text-[9px] text-white flex items-center justify-center font-bold">
                      {c.unread}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* User bar */}
            <div className="p-2 border-t border-border/40">
              <div className="flex items-center gap-2 px-2 py-1">
                <div className="relative">
                  <div className="w-7 h-7 rounded-full bg-brand/30 flex items-center justify-center text-[10px] font-bold text-brand-light">W</div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-success border-2 border-[#0c0f20]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-medium text-text-primary">wiltark</div>
                  <div className="text-[9px] text-success">En ligne</div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/40">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center text-xs font-bold text-brand-light">A</div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-success border-2" style={{ borderColor: '#111535' }} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-primary">Alice</div>
                  <div className="text-[10px] text-success">En ligne</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-text-muted cursor-pointer hover:text-text-primary transition-colors" />
                <Video className="w-4 h-4 text-text-muted cursor-pointer hover:text-text-primary transition-colors" />
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-3 overflow-hidden">
              {messages.map((msg, i) => (
                <motion.div
                  key={msg.id}
                  className={`flex gap-2 ${msg.self ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.15, duration: 0.4 }}
                >
                  {!msg.self && (
                    <div className="w-7 h-7 rounded-full bg-brand/20 flex items-center justify-center text-[10px] font-bold text-brand-light flex-shrink-0 mt-1">
                      {msg.avatar}
                    </div>
                  )}
                  <div className={`max-w-[75%] ${msg.self ? 'order-first' : ''}`}>
                    <div className={`px-3 py-2 rounded-2xl text-xs leading-relaxed ${
                      msg.self
                        ? 'bg-brand/20 text-text-primary rounded-br-md border border-brand/20'
                        : 'bg-surface-2/80 text-text-primary rounded-bl-md border border-border/40'
                    }`}>
                      {msg.content}
                    </div>
                    <div className={`text-[9px] text-text-muted mt-0.5 ${msg.self ? 'text-right' : ''}`}>
                      {msg.time}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-border/40">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 text-[10px] text-brand-light px-2 py-1 rounded-md bg-brand/10 border border-brand/20">
                  <Lock className="w-3 h-3" />
                  Standard
                </div>
                <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-2/60 border border-border/40">
                  <span className="text-[11px] text-text-muted flex-1">Envoyer un message...</span>
                  <Smile className="w-3.5 h-3.5 text-text-muted" />
                </div>
                <div className="w-8 h-8 rounded-lg bg-brand/20 flex items-center justify-center cursor-pointer hover:bg-brand/30 transition-colors">
                  <Send className="w-3.5 h-3.5 text-brand-light" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
