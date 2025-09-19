import React from 'react';
import logo from './22gameslogored.svg';
import './App.css';
import { Mail, Phone, MapPin } from 'lucide-react';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logo"/>
      </header>

      <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-2xl shadow-lg"
          src="https://www.youtube.com/watch?v=K6N4hK8RfsM?autoplay=0&controls=1"
          title="Game Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>



      <div className="min-h-screen bg-gray-900 text-gray-100 overflow-hidden" style={{ backgroundColor: '#2b2d42' }}>
        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20 relative">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(43, 45, 66, 1) 0%, rgba(141, 153, 174, 0.1) 50%, rgba(43, 45, 66, 1) 100%)' }} />
            <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#edf2f4' }}>
                GET IN TOUCH
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: '#8d99ae' }}>
                Ready to join our journey? Whether you're a gamer, developer, or industry professional, we'd love to connect.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="p-8 rounded-2xl backdrop-blur-sm border"
                    style={{ 
                      backgroundColor: 'rgba(141, 153, 174, 0.1)', 
                      borderColor: 'rgba(239, 35, 60, 0.3)'
                    }}>
                  <Mail className="w-8 h-8 mb-4" style={{ color: '#ee4036' }} />
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#edf2f4' }}>Email</h3>
                  <p style={{ color: '#8d99ae' }}>contact@22games.dk</p>
                </div>
                
                <div className="p-8 rounded-2xl backdrop-blur-sm border"
                    style={{ 
                      backgroundColor: 'rgba(141, 153, 174, 0.1)', 
                      borderColor: 'rgba(217, 4, 41, 0.3)'
                    }}>
                  <Phone className="w-8 h-8 mb-4" style={{ color: '#ee4036' }} />
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#edf2f4' }}>Phone</h3>
                  <p style={{ color: '#8d99ae' }}>+45 22258003</p>
                </div>
                
                <div className="p-8 rounded-2xl backdrop-blur-sm border"
                    style={{ 
                      backgroundColor: 'rgba(141, 153, 174, 0.1)', 
                      borderColor: 'rgba(239, 35, 60, 0.3)'
                    }}>
                  <MapPin className="w-8 h-8 mb-4" style={{ color: '#ee4036' }} />
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#edf2f4' }}>Location</h3>
                  <p style={{ color: '#8d99ae' }}> Aarhus, Denmark</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
