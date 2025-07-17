import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, ArrowRight, User, Phone } from "lucide-react";

export function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast({
        title: "Name required",
        description: "Please enter your name.",
        variant: "destructive",
      });
      return;
    }

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (!phone.trim()) {
      toast({
        title: "Phone number required",
        description: "Please enter your phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from("waitlist")
        .insert([
          {
            name: name.trim(),
            email: email.trim().toLowerCase(),
            phone: phone.trim(),
          }
        ]);

      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Already on waitlist! 📧",
            description: "This email is already registered. We'll keep you updated!",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "🎉 Welcome to OpenSections!",
          description: "You're now on the VIP waitlist. Get ready for exclusive nightlife experiences!",
          duration: 5000,
        });
        
        // Clear form after successful submission
        setName("");
        setEmail("");
        setPhone("");
      }
    } catch (error) {
      console.error("Error joining waitlist:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again. If the problem persists, contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      <div className="relative">
        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="glass-card pl-12 h-12 text-foreground placeholder:text-muted-foreground border-white/20 focus:border-primary"
          disabled={isSubmitting}
        />
      </div>

      <div className="relative">
        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="glass-card pl-12 h-12 text-foreground placeholder:text-muted-foreground border-white/20 focus:border-primary"
          disabled={isSubmitting}
        />
      </div>

      <div className="relative">
        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="glass-card pl-12 h-12 text-foreground placeholder:text-muted-foreground border-white/20 focus:border-primary"
          disabled={isSubmitting}
        />
      </div>
      
      <Button
        type="submit"
        variant="waitlist"
        size="lg"
        className="w-full h-12"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Joining..."
        ) : (
          <>
            Join the Waitlist
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}