import React, { useState } from 'react';

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState('Announcements');

  // Data States
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: 'Staging Environment Maintenance — June 5',
      author: 'Alex Chen',
      date: 'Jun 2',
      pinned: false,
    },
    {
      id: 2,
      title: 'New PTO Policy Effective July 1',
      author: 'Priya Nair',
      date: 'Jun 2',
      pinned: true,
    },
  ]);
  const [meetings] = useState([
    {
      id: 1,
      title: 'Q2 Engineering Sprint Planning',
      attendees: 3,
      date: 'Jun 3, 2026',
    },
  ]);

  // Form Input States
  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  // Handle Form Submission
  const handleAddAnnouncement = (e) => {
    e.preventDefault();
    if (!newTitle || !newAuthor) return;

    const newEntry = {
      id: Date.now(),
      title: newTitle,
      author: newAuthor,
      date: 'Jun 2',
      pinned: false,
    };

    setAnnouncements([newEntry, ...announcements]);
    setNewTitle('');
    setNewAuthor('');
    setShowModal(false);
  };

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 antialiased w-full font-sans">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-slate-200 p-5 space-y-6 flex-shrink-0">
        <div className="flex items-center space-x-2">
          <div className="bg-black text-white font-bold p-1 rounded text-xs tracking-wider">
            HQ
          </div>
          <span className="font-bold text-base tracking-tight">HQ</span>
        </div>
        <input
          type="text"
          placeholder="Search HQ..."
          className="w-full px-3 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:border-slate-400"
        />
        <nav className="space-y-1">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
            Communication
          </div>

          <button
            onClick={() => setActiveTab('Channels')}
            className={`w-full flex items-center space-x-3 px-2 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === 'Channels'
                ? 'bg-slate-100 text-slate-900'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            💬 Channels
          </button>

          <button
            onClick={() => setActiveTab('Announcements')}
            className={`w-full flex items-center space-x-3 px-2 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === 'Announcements'
                ? 'bg-slate-100 text-slate-900'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            🔔 Announcements
          </button>

          <button
            onClick={() => setActiveTab('Help Desk')}
            className={`w-full flex items-center space-x-3 px-2 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === 'Help Desk'
                ? 'bg-slate-100 text-slate-900'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            ⛑️ Help Desk
          </button>

          <button
            onClick={() => setActiveTab('Meetings')}
            className={`w-full flex items-center space-x-3 px-2 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === 'Meetings'
                ? 'bg-slate-100 text-slate-900'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            📅 Meetings
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-10 max-w-7xl mx-auto w-full">
        {/* TAB 1: ANNOUNCEMENTS (DASHBOARD SCREEN) */}
        {activeTab === 'Announcements' && (
          <div>
            <header className="mb-8 flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                  Activity Hub
                </h1>
                <p className="text-slate-500 text-sm mt-1">
                  Here is what is happening across HQ.
                </p>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition"
              >
                + New Announcement
              </button>
            </header>

            {/* METRICS COUNTER CARDS */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-28">
                <span className="text-xs font-medium text-slate-500">
                  Total Messages
                </span>
                <div className="text-3xl font-bold tracking-tight text-slate-900">
                  8
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-28">
                <span className="text-xs font-medium text-slate-500">
                  Total Announcements
                </span>
                <div className="text-3xl font-bold tracking-tight text-slate-900">
                  {announcements.length}
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-28">
                <span className="text-xs font-medium text-slate-500">
                  Open Tickets
                </span>
                <div className="text-3xl font-bold tracking-tight text-slate-900">
                  3
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-28">
                <span className="text-xs font-medium text-slate-500">
                  Upcoming Meetings
                </span>
                <div className="text-3xl font-bold tracking-tight text-slate-900">
                  {meetings.length}
                </div>
              </div>
            </section>

            {/* SPLIT LISTS */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h2 className="text-sm font-bold text-slate-900 mb-4">
                  Recent Announcements
                </h2>
                <div className="space-y-3">
                  {announcements.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 border border-slate-100 rounded-lg hover:bg-slate-50 cursor-pointer"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-sm text-slate-800">
                          {item.pinned ? '📌 ' : ''}
                          {item.title}
                        </h3>
                        <span className="text-xs text-slate-400">
                          {item.date}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        {item.author}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h2 className="text-sm font-bold text-slate-900 mb-4">
                  Upcoming Meetings
                </h2>
                <div className="space-y-3">
                  {meetings.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 border border-slate-100 rounded-lg"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-sm text-slate-800">
                          {item.title}
                        </h3>
                        <span className="text-xs text-slate-400">
                          {item.date}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        {item.attendees} attendees
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: CHANNELS */}
        {activeTab === 'Channels' && (
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              💬 Chat Channels
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Real-time team messaging interface workspace.
            </p>
            <div className="bg-white p-12 border border-slate-200 rounded-xl mt-6 text-center text-slate-400 text-sm">
              Channel streams empty. Start a new conversation node.
            </div>
          </div>
        )}

        {/* TAB 3: HELP DESK */}
        {activeTab === 'Help Desk' && (
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              ⛑️ Help Desk Tickets
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Manage corporate IT and operations inquiries.
            </p>
            <div className="bg-white p-12 border border-slate-200 rounded-xl mt-6 text-center text-slate-400 text-sm">
              No active support tickets pending allocation.
            </div>
          </div>
        )}

        {/* TAB 4: MEETINGS */}
        {activeTab === 'Meetings' && (
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              📅 Calendar Matrix
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Track corporate briefings and sprint sessions.
            </p>
            <div className="bg-white p-12 border border-slate-200 rounded-xl mt-6 text-center text-slate-400 text-sm">
              Calendar synchronized. No further events queued today.
            </div>
          </div>
        )}
      </main>

      {/* CREATE POPUP FORM MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Create New Announcement
            </h3>
            <form onSubmit={handleAddAnnouncement} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                  Announcement Subject
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g., Server Cluster Migration Protocol"
                  className="w-full px-3 py-2 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-slate-400"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                  Author Name
                </label>
                <input
                  type="text"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  placeholder="e.g., Sarah Jenkins"
                  className="w-full px-3 py-2 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-slate-400"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-slate-800"
                >
                  Publish Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
