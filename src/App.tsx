import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Platform } from "./components/Platform";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { PilotDialog } from "./components/PilotDialog";

export function App() {
  const [isPilotOpen, setIsPilotOpen] = useState(false);
  const [triggerEl, setTriggerEl] = useState<HTMLElement | null>(null);
  const [isExclusionPanelOpen, setIsExclusionPanelOpen] = useState(false);

  const handleOpenPilot = (trigger: HTMLElement) => {
    setTriggerEl(trigger);
    setIsPilotOpen(true);
  };

  const handleClosePilot = () => {
    setIsPilotOpen(false);
  };

  const handleToggleExclusionPanel = (forcedState?: boolean) => {
    setIsExclusionPanelOpen((prev) => (typeof forcedState === "boolean" ? forcedState : !prev));
  };

  const handleOpenExclusionPanel = () => {
    setIsExclusionPanelOpen(true);
  };

  return (
    <div className="site-root">
      <Header onRequestPilot={handleOpenPilot} />

      <main id="main-content" tabIndex={-1}>
        {/* 1. Home */}
        <Hero onRequestPilot={handleOpenPilot} />

        {/* 2. About */}
        <About />

        {/* 3. Platform */}
        <Platform />

        {/* 4. How It Works */}
        <HowItWorks
          isExclusionPanelOpen={isExclusionPanelOpen}
          onToggleExclusionPanel={handleToggleExclusionPanel}
        />

        {/* 5. Market & Pricing */}
        <Pricing onRequestPilot={handleOpenPilot} />

        {/* 6. FAQ */}
        <Faq onOpenExclusionPanel={handleOpenExclusionPanel} />
      </main>

      {/* 7. Footer */}
      <Footer onRequestPilot={handleOpenPilot} />

      {/* Shared accessible modal dialog */}
      <PilotDialog
        isOpen={isPilotOpen}
        onClose={handleClosePilot}
        triggerElement={triggerEl}
      />
    </div>
  );
}

export default App;
