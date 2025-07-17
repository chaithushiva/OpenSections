import { WaitlistForm } from "./WaitlistForm";
import { SocialLinks } from "./SocialLinks";
import nightclubBg from "@/assets/nightclub-bg.jpg";

export function ComingSoonLanding() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm scale-110"
          style={{
            backgroundImage: `url(${nightclubBg})`,
          }}
        />
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        
        {/* Logo/Brand */}
        <div className="mb-8 animate-float">
          <h1 className="text-6xl md:text-8xl font-bold font-space-grotesk text-gradient mb-4 animate-pulse-neon">
            OpenSections
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-neon-pink to-neon-aqua rounded-full"></div>
        </div>

        {/* Glassmorphism Card */}
        <div className="glass-card p-8 md:p-12 max-w-lg w-full mx-4 animate-fade-in">
          
          {/* Tagline */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4 text-foreground">
              The Future of Nightlife
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              Exclusive reservations. VIP access. Unforgettable nights.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary font-medium">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Coming in 2026
            </div>
          </div>

          {/* Waitlist Form */}
          <div className="mb-8">
            <WaitlistForm />
          </div>

          {/* Social Links */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-4">Stay in the loop</p>
            <SocialLinks />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-sm text-muted-foreground">
          <p>© 2024 OpenSections. All rights reserved.</p>
        </div>
      </div>

      {/* Floating neon particles for atmosphere */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-purple rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-neon-pink rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-neon-aqua rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary rounded-full animate-ping opacity-30"></div>
      </div>
    </div>
  );
}