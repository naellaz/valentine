import { HeroSection } from './components/HeroSection';
import { LoveLetterSection } from './components/LoveLetterSection';
import { PhotoGallery } from './components/PhotoGallery';
import { MemoriesSection } from './components/MemoriesSection';
import { QuoteSection } from './components/QuoteSection';
import { ClosingSection } from './components/ClosingSection';
import { MusicPlayer } from './components/MusicPlayer';

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden scroll-smooth">
      <HeroSection />
      <LoveLetterSection />
      <PhotoGallery />
      <MemoriesSection />
      <QuoteSection />
      <ClosingSection />
      <MusicPlayer />
    </div>
  );
}