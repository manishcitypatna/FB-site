
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { generateTeamVisuals, GenerateTeamVisualsInput, GenerateTeamVisualsOutput } from '@/ai/flows/ai-team-visuals';
import { Sparkles, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { FloatingCard } from '@/components/common/floating-card';

export function TeamVisuals() {
  const [teamDescription, setTeamDescription] = useState<string>("A diverse team of AI engineers, software developers, and UX designers working collaboratively in a futuristic, light-filled office space. They are focused on monitors displaying complex data visualizations and code. The atmosphere is innovative and energetic, with holographic elements subtly integrated into their workspace. Emphasize a professional yet forward-thinking aesthetic, suitable for a cutting-edge tech company.");
  const [visualData, setVisualData] = useState<GenerateTeamVisualsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamDescription.trim()) {
      toast({
        title: "Input Required",
        description: "Please provide a team description.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    setVisualData(null); // Clear previous visual

    try {
      const input: GenerateTeamVisualsInput = { teamDescription };
      const result = await generateTeamVisuals(input);
      setVisualData(result);
      toast({
        title: "Visual Generated!",
        description: "The AI has crafted a team visual based on your description.",
      });
    } catch (error) {
      console.error("Error generating team visual:", error);
      toast({
        title: "Error Generating Visual",
        description: (error as Error).message || "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FloatingCard className="w-full" interactive>
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          <Wand2 className="mr-2 h-6 w-6 text-primary" />
          AI-Powered Team Visualizer
        </CardTitle>
        <CardDescription>
          Describe your team, and our AI will generate a unique, futuristic visual representation.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="teamDescription" className="text-sm font-medium">Team Description</Label>
            <Textarea
              id="teamDescription"
              value={teamDescription}
              onChange={(e) => setTeamDescription(e.target.value)}
              placeholder="e.g., A dynamic team of innovators working on cutting-edge AI projects..."
              className="mt-1 min-h-[100px]"
              disabled={isLoading}
            />
            <p className="text-xs text-muted-foreground mt-1">
              Be descriptive! Mention roles, atmosphere, style, etc.
            </p>
          </div>

          {isLoading && (
            <div className="text-center py-8">
              <Sparkles className="h-12 w-12 text-primary animate-spin mx-auto mb-2" />
              <p className="text-muted-foreground">Generating your vision... This may take a moment.</p>
            </div>
          )}

          {visualData?.teamVisualDataUri && !isLoading && (
            <div className="mt-6 border rounded-lg overflow-hidden aspect-video relative">
              <Image
                src={visualData.teamVisualDataUri}
                alt="AI Generated Team Visual"
                fill
                className="object-contain"
                data-ai-hint="team ai generated"
              />
            </div>
          )}
           {visualData?.prompt && !isLoading && (
             <p className="text-xs text-muted-foreground mt-2">
                <span className="font-semibold">Prompt used:</span> {visualData.prompt.length > 100 ? visualData.prompt.substring(0,100) + "..." : visualData.prompt}
             </p>
           )}

        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Generate Visual
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </FloatingCard>
  );
}
